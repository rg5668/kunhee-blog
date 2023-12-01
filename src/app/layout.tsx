import Header from '@/components/common/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Footer from '@/components/common/Footer';
import Providers from '@/libs/Providers';
import Layout from '@/components/Layout';
import { Search } from '@/components/common/Search';

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
        <Providers>
          <Header />
          <main>
            <Layout>{children}</Layout>
            <Button />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
