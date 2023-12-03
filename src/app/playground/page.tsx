import PostList from '@/components/posts/PostList';
import { playgrounds } from '@/constant/playground';
import { PostType } from '@/types/post';

export default function Playground() {
  return (
    <>
      <h1 className='pb-4 text-lg font-bold text-center underline border-b-2 mb-7 underline-offset-4'>Playground</h1>
      <PostList posts={playgrounds as PostType[]} />
    </>
  );
}
