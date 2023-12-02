import MainBanner from '@/components/common/MainBanner';
import PostList from '@/components/posts/PostList';
import { getAllPosts } from '@/service/posts';
import { PostProps } from '@/types/post';

export default async function Home() {
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
      <MainBanner />
      <PostList posts={posts} category={category} />
    </>
  );
}
