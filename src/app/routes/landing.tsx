import { useAuth } from '@/app/providers/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Landing = () => {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await user.session();

      if (res) navigate('/app');
      else navigate('/auth/login');
    };

    checkAuth();
  }, []);
};

export default Landing;
