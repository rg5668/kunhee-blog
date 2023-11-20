import Link from 'next/link';
import Post from './Post';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

export default function PostList() {
  return (
    <>
      <div className='text-xl font-bold pb-4 pt-8'>
        <h1>Study</h1>
      </div>
      <div className='flex flex-wrap gap-9'>
        {new Array(8).fill(0).map((v, i) => (
          <Post key={i} />
        ))}
      </div>
      <div className='pt-5 flex gap-5 justify-center'>
        <Link
          href={'/'}
          className='dark:bg-white dark:text-black text-white bg-black w-auto rounded-2xl px-5 py-2 box-border outline-none justify-center items-center font-bold flex'
        >
          게시글 더보기 <FaPlus />
        </Link>
        <Link
          href={'/'}
          className='dark:bg-white dark:text-black text-white bg-black w-auto rounded-2xl px-5 py-2 box-border outline-none justify-center items-center font-bold flex'
        >
          title 페이지 이동 <FaArrowRight />
        </Link>
      </div>
    </>
  );
}
