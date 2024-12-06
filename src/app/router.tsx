import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { AppRoot } from '@/app/routes/app/root';
import { useNhostClient } from '@nhost/react';
import { loadRecipes } from '@/app/routes/app/recipes';
// import { AppRoot, AppRootErrorBoundary } from './routes/app/root';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { Landing } = await import('@/app/routes/landing');
        return { Component: Landing };
      },
    },
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
      lazy: async () => {
        return {
          Component: NavigationError,
        };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useNhostClient();
  const location = useLocation();

  if (!user.auth.isAuthenticated()) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return children;
};

export const NavigationError = () => {
  return <p>Something went wrong and the page could not be loaded</p>;
};
