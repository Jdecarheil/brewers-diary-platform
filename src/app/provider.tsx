import React from 'react';
import { MainErrorFallback } from '@components/error-fallback';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryConfig } from '@config/react-query';
import { NhostClient, NhostReactProvider } from '@nhost/react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  const nhost = new NhostClient({
    subdomain: '<Your Nhost app subdomain>',
    region: '<Your Nhost app region>',
  });

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">...loading</div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <NhostReactProvider nhost={nhost}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </NhostReactProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
