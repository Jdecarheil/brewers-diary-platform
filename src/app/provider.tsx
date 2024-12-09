import { MainErrorFallback } from "@components/error-fallback";
import { queryConfig } from "@config/react-query";
import { NhostClient, NhostProvider } from "@nhost/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: queryConfig,
			}),
	);

	const nhost = new NhostClient({
		subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
		region: import.meta.env.VITE_NHOST_REGION,
	});

	return (
		<React.Suspense
			fallback={
				<div className="flex h-screen w-screen items-center justify-center">
					...loading
				</div>
			}
		>
			<ErrorBoundary FallbackComponent={MainErrorFallback}>
				<NhostProvider nhost={nhost}>
					<QueryClientProvider client={queryClient}>
						{children}
					</QueryClientProvider>
				</NhostProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
