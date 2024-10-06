'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: PropsWithChildren<unknown>) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	);

	return (
		<QueryClientProvider client={client}>
			<Toaster position='bottom-left' />
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
