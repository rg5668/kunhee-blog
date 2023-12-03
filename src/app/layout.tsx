import Header from '@/components/common/Header';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import Footer from '@/components/common/Footer';
import Layout from '@/components/Layout';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';
import ThemeProviders from '@/providers/ThemeProviders';
import ScrollToButton from '@/components/ui/ScrollToButton';
import { image_url, meta } from '@/constant/meta';
import GoogleAnalytics from '@/components/common/GoogleAnalytics';

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    template: `%s | ${meta.blog_title}`,
    default: `Home | ${meta.blog_title}`,
  },
  description: `${meta.blog_description}`,
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.png',
      },
    ],
  },
  openGraph: {
    title: {
      template: `%s | ${meta.blog_title}`,
      default: `Home | ${meta.blog_title}`,
    },
    description: `${meta.blog_description}`,
    url: `${meta.url}`,
    siteName: `${meta.blog_title}`,
    images: [meta.og_image],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: {
      template: `${meta.blog_title}`,
      default: `${meta.blog_title}`,
    },
    description: `${meta.blog_description}`,
    site: `${meta.url}`,
    images: {
      url: image_url,
      alt: 'Kunhee Logo',
    },
  },
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  const GA_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <html lang='ko'>
      {GA_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID} />}
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
