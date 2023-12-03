import PostList from '@/components/posts/PostList';
import { image_url, meta } from '@/constant/meta';
import { playgrounds } from '@/constant/playground';
import { PostType } from '@/types/post';

export const metadata = {
  title: meta.playground_title,
  description: meta.playground_description,
  openGraph: {
    title: {
      template: `${meta.playground_title}`,
      default: `${meta.playground_title}`,
    },
    description: `${meta.playground_description}`,
    url: `${meta.url}/playground`,
    siteName: `${meta.playground_title}`,
    images: [meta.og_image],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: {
      template: `${meta.playground_title}`,
      default: `${meta.playground_title}`,
    },
    description: `${meta.playground_description}`,
    site: `${meta.url}/playground`,
    images: {
      url: image_url,
      alt: 'Kunhee Logo',
    },
  },
};

export default function Playground() {
  return (
    <>
      <h1 className='pb-4 text-lg font-bold text-center underline border-b-2 mb-7 underline-offset-4'>Playground</h1>
      <PostList posts={playgrounds as PostType[]} />
    </>
  );
}
