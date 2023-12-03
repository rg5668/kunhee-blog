import AboutList from '@/components/abouts/AboutList';
import MainBanner from '@/components/common/MainBanner';
import { image_url, meta } from '@/constant/meta';

export const metadata = {
  title: meta.about_title,
  description: meta.about_description,
  openGraph: {
    title: {
      template: `${meta.about_title}`,
      default: `${meta.about_title}`,
    },
    description: `${meta.about_description}`,
    url: `${meta.url}/about`,
    siteName: `${meta.about_title}`,
    images: [meta.og_image],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: {
      template: `${meta.about_title}`,
      default: `${meta.about_title}`,
    },
    description: `${meta.about_description}`,
    site: `${meta.url}/about`,
    images: {
      url: image_url,
      alt: 'Kunhee Logo',
    },
  },
};
export default function About() {
  return (
    <>
      <h1 className='pb-4 text-lg font-bold text-center underline border-b-2 mb-7 underline-offset-4'>About</h1>
      <MainBanner />
      <AboutList />
    </>
  );
}
