'use client';

import '@styles';
import clsx from 'clsx';

import { addToast } from '@heroui/react';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Footer, Navbar } from '@components';
import { siteConfig } from '@config';
import { fontSans } from '@config';
import { TkError } from '@http';

import { Providers } from './providers';
import { errorTitleMapper } from './utils';

function onError(error: Error) {
  if (error instanceof TkError) {
    addToast({
      title: errorTitleMapper[error.statusCode],
      description: error.message,
      color: 'danger',
    });
  } else {
    addToast({
      title: 'Unexpected Error',
      description: error.message,
      color: 'danger',
    });
  }
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError,
  }),

  mutationCache: new MutationCache({
    onError,
  }),
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="author" content={siteConfig.author} />
      </head>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <QueryClientProvider client={queryClient}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
