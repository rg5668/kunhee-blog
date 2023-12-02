import Header from '@/components/common/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/common/Footer';
import Layout from '@/components/Layout';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';
import ThemeProviders from '@/providers/ThemeProviders';
import ScrollToButton from '@/components/ui/ScrollToButton';

export const metadata: Metadata = {
  title: 'Kunhee Blog',
  description: 'Kunhee Blog App',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.png',
      },
    ],
  },
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='ko'>
      <body>
        <ThemeProviders>
          <Header />
          <Suspense fallback={<Spinner />}>
            <main>
              <Layout>{children}</Layout>
            </main>
          </Suspense>
          <ScrollToButton />
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
