import PostList from '@/components/posts/PostList';
import { getAllPosts } from '@/service/posts';
import { PostProps } from '@/types/post';

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
