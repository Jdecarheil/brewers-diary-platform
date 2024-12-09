import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { DashboardLayout } from '@/components/layouts/dashboard';
import { useNhostClient } from '@nhost/react';
import { AuthLayout } from './routes/authentication/layouts/auth-layout';
// import { AppRoot, AppRootErrorBoundary } from './routes/app/root';
//
const test = '';
export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { Landing } = await import('@/app/routes/landing');
        return { Component: Landing };
      },
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          lazy: async () => {
            const { Login } = await import('@/app/routes/authentication/login');
            return { Component: Login };
          },
        },
        {
          path: '/auth/register',
          lazy: async () => {
            const { Register } = await import('@/app/routes/authentication/register');
            return { Component: Register };
          },
        },
        {
          path: '/auth/forgot-password',
          lazy: async () => {
            const { ForgotPassword } = await import('@routes/authentication/forgot-password');
            return { Component: ForgotPassword };
          },
        },
      ],
    },
    {
      path: '/app',
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: NavigationError,
      children: [
        {
          path: '/app/recipes',
          lazy: async () => {
            const { Recipes } = await import('@/app/routes/app/recipes');
            return {
              Component: Recipes,
            };
          },
          ErrorBoundary: NavigationError,
        },
        {
          path: '',
          lazy: async () => {
            const { DashboardRoute } = await import('@/app/routes/app/dashboard');
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: NavigationError,
        },
      ],
    },
    {
      path: '*',
      element: <NavigationError />,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const d = 'd';
  const router = useMemo(() => createAppRouter(), [queryClient]);

  return <RouterProvider router={router} />;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useNhostClient().auth.getAuthenticationStatus();
  console.log('protected route:', isAuthenticated);
  if (!isLoading) return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export const NavigationError = () => {
  return (
    <div className="w-full h-full content-center h-screen border">
      <p className="text-center">Something went wrong and the page could not be loaded</p>
    </div>
  );
};

export const AppRoot = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
