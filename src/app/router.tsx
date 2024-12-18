import { AuthLayout } from '@/app/routes/authentication/layouts/auth-layout';
import { DashboardLayout } from '@/app/routes/dashboard';
import { getUser } from '@/lib/auth';

import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router';
const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;

  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: () => import('@/app/routes/landing').then(convert(queryClient)),
    },
    {
      element: <AuthLayout />,
      hydrateFallbackElement: <p>loading...</p>,
      children: [
        {
          path: '/auth/login',
          lazy: () => import('@/app/routes/authentication/login').then(convert(queryClient)),
        },
        {
          path: '/auth/register',
          lazy: () => import('@/app/routes/authentication/register').then(convert(queryClient)),
        },
        {
          path: '/auth/forgot-password',
          lazy: () => import('@routes/authentication/forgot-password').then(convert(queryClient)),
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
          lazy: () => import('@/app/routes/app/recipes').then(convert(queryClient)),
        },
        {
          path: '/app/public-recipes',
          lazy: () => import('@/app/routes/app/recipes').then(convert(queryClient)),
        },
        {
          path: '/app/tools',
          lazy: () => import('@/app/routes/app/tools').then(convert(queryClient)),
        },
        {
          path: '/app/settings',
          lazy: () => import('@/app/routes/app/settings').then(convert(queryClient)),
        },
        {
          path: '/app/sessions',
          lazy: () => import('@/app/routes/app/sessions').then(convert(queryClient)),
        },
        {
          path: '/app/about',
          lazy: () => import('@/app/routes/app/about').then(convert(queryClient)),
        },
        {
          path: '/app/help',
          lazy: () => import('@/app/routes/app/help').then(convert(queryClient)),
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

  const router = useMemo(() => createAppRouter(queryClient), ['queryClient']);

  return <RouterProvider router={router} />;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = getUser();

  return user ? children : <Navigate to="/auth/login" />;
};

export const NavigationError = () => {
  return (
    <div className="w-full content-center h-screen border">
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
