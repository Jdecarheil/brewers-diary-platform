import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './routes/authentication/login';

// import { AppRoot, AppRootErrorBoundary } from './routes/app/root';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/auth/login',
      lazy: async () => {
        const { Login } = await import('./routes/authentication/login');
        return { Component: Login };
      },
    },
    {
      path: '/auth/register',
      lazy: async () => {
        const { Register } = await import('./routes/authentication/register');
        return { Component: Register };
      },
    },
    {
      path: '/auth/forgot-password',
      lazy: async () => {
        const { ForgotPassword } = await import('./routes/authentication/forgot-password');
        return { Component: ForgotPassword };
      },
    },
    {
      path: '/app',
      element: (
        <></>
        // <AppRoot />
      ),
      // ErrorBoundary: <></>,
      children: [],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
