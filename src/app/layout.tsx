import Header from '@/components/common/Header';
import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/common/Nav';
import Button from '@/components/ui/Button';
import Footer from '@/components/common/Footer';
import Providers from '@/libs/Providers';
import Layout from '@/components/Layout';

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
          <Nav />
          <main>
            <Layout>{children}</Layout>
          </main>
          <Footer />
          <Button />
        </Providers>
      </body>
    </html>
  );
}
