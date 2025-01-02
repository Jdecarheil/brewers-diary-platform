import { useAuth } from '@/app/providers/auth';
import { ReactNode, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Navigate, useLocation, useNavigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { refreshSessionToken, logout, session } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onActive = async () => {
    const res = await refreshSessionToken();
    if (!res) {
      navigate('/auth/login', { replace: true });
    }
  };

  useIdleTimer({
    onActive,
    timeout: 120_000,
    throttle: 500,
  });

  useEffect(() => {
    const logoutUser = async () => {
      const res = await logout();
      if (res) {
        navigate('/auth/login', { replace: true });
      } else {
        alert('There was an issue redirecting after expired session');
      }
    };

    const checkSession = async () => {
      const res = await session();

      if (!res) {
        await logoutUser();
      }
    };

    checkSession();
  }, [pathname]);

  if (!session) return <Navigate to="/auth/login" replace />;

  return children;
};
