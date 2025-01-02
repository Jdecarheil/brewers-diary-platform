import { AuthProvider } from '@/app/providers/auth';
import { AuthLayout } from '@/app/routes/authentication/layouts/auth-layout';
import { DashboardLayout } from '@/app/routes/dashboard';
import { BreadcrumbLink } from '@/components/ui/breadcrumb';
import { ProtectedRoute } from '@app/protected-route';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { useMemo } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

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
      id: '/',
      hydrateFallbackElement: <Hydrate />,
      lazy: () => import('@/app/routes/landing').then(convert(queryClient)),
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          id: 'auth/login',
          lazy: () => import('@/app/routes/authentication/login').then(convert(queryClient)),
        },
        {
          path: '/auth/register',
          id: 'auth/register',
          lazy: () => import('@/app/routes/authentication/register').then(convert(queryClient)),
        },
        {
          path: '/auth/forgot-password',
          id: 'auth/forgot-password',
          lazy: () => import('@routes/authentication/forgot-password').then(convert(queryClient)),
        },
      ],
    },
    {
      path: '/app',
      id: 'app',
      handle: {
        crumb: () => <BreadcrumbLink href="/app">Home</BreadcrumbLink>,
      },
      element: (
        <>
          <ProtectedRoute>
            <AppRoot />
          </ProtectedRoute>
        </>
      ),
      ErrorBoundary: NavigationError,
      children: [
        {
          path: 'recipes',
          id: 'recipes',
          hydrateFallbackElement: <Hydrate />,
          handle: {
            crumb: () => <BreadcrumbLink href="/recipes">Recipes</BreadcrumbLink>,
          },
          element: <RecipeRoot />,
          children: [
            {
              path: ':id',
              id: ':id',
              hydrateFallbackElement: <Hydrate />,
              handle: {
                crumb: () => <BreadcrumbLink href="/recipes">View Recipe</BreadcrumbLink>,
              },
              lazy: () => import('@/app/routes/app/recipes').then(convert(queryClient)),
            },
            {
              index: true,
              id: 'index',
              hydrateFallbackElement: <Hydrate />,
              handle: {
                crumb: () => <BreadcrumbLink href="/recipes">Your Recipes</BreadcrumbLink>,
              },
              lazy: () => import('@/app/routes/app/recipes').then(convert(queryClient)),
            },
          ],
        },
        {
          path: '/app/public-recipes',
          id: 'app/public-recipes',
          lazy: () => import('@/app/routes/app/recipes').then(convert(queryClient)),
        },
        {
          path: '/app/tools',
          id: 'app/tools',
          lazy: () => import('@/app/routes/app/tools').then(convert(queryClient)),
        },
        {
          path: '/app/settings',
          id: 'app/settings',
          lazy: () => import('@/app/routes/app/settings').then(convert(queryClient)),
        },
        {
          path: '/app/sessions',
          id: 'app/sessions',
          lazy: () => import('@/app/routes/app/sessions').then(convert(queryClient)),
        },
        {
          path: '/app/about',
          id: 'app/about',
          lazy: () => import('@/app/routes/app/about').then(convert(queryClient)),
        },
        {
          path: '/app/help',
          id: 'app/help',
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

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
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

export const RecipeRoot = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const Hydrate = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader size={35} />
    </div>
  );
};
