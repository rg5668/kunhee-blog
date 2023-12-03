import { getAllPosts } from '@/service/posts';
import { PostProps } from '@/types/post';
import PostList from '@/components/posts/PostList';
import { image_url, meta } from '@/constant/meta';

export const metadata = {
  title: meta.posts_title,
  description: meta.posts_description,
  openGraph: {
    title: {
      template: `${meta.posts_title}`,
      default: `${meta.posts_title}`,
    },
    description: `${meta.posts_description}`,
    url: `${meta.url}/posts`,
    siteName: `${meta.posts_title}`,
    images: [meta.og_image],
    locale: 'ko_KR',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: {
      template: `${meta.posts_title}`,
      default: `${meta.posts_title}`,
    },
    description: `${meta.posts_description}`,
    site: `${meta.url}/$posts`,
    images: {
      url: image_url,
      alt: 'Kunhee Logo',
    },
  },
};

export default async function Posts() {
  const { posts, category } = (await getAllPosts([
    'slug',
    'title',
    'date',
    'category',
    'description',
    'coverImage',
  ])) as unknown as PostProps;
  return (
    <>
      <h1 className='pb-10 text-lg font-bold text-center underline underline-offset-4'>Posts</h1>
      <PostList posts={posts} category={category} />
    </>
  );
}
