import PostList from '@/components/posts/PostList';
import { playgrounds } from '@/constant/playground';
import { PostType } from '@/types/post';

export default function Playground() {
  return (
    <div>
      <h1 className='text-lg font-bold pb-4 mb-7 text-center border-b-2 underline underline-offset-4'>Playground</h1>
      <div className='flex gap-3 w-full flex-wrap justify-between'>
        <PostList posts={playgrounds as PostType[]} />
      </div>
    </div>
  );
}
