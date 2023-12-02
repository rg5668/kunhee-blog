import Header from '@/components/common/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import ScrollToButton from '@/components/ui/ScrollToButton';
import Footer from '@/components/common/Footer';
import Layout from '@/components/Layout';
import ThemeProviders from '@/providers/ThemeProviders';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'Kunhee Blog',
  description: 'Kunhee Blog App',
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
