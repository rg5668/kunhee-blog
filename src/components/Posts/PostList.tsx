import Link from 'next/link';
import Post from './Post';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

export default function PostList() {
  return (
    <>
      <div className='flex items-center justify-between pb-4 pt-4'>
        <h1 className='text-xl -md:text-lg -sm:text-base font-bold'>Study</h1>

        <Link
          href={`/`}
          className='font-bold hover-underline-animation flex items-center gap-2 after:dark:bg-white after:bg-black opacity-[0.7] hover:opacity-[1] -md:text-sm -sm:text-[13px] -xs:text-xs'
        >
          Title 페이지 이동 <FaArrowRight />
        </Link>
      </div>
      <div className='flex flex-wrap gap-3 -xs:justify-center'>
        {new Array(8).fill(0).map((v, i) => (
          <Post key={i} imageSrc={''} />
        ))}
      </div>
      <div className='pt-5 pb-8 -md:text-sm -sm:text-xs'>
        <Link
          href={'/'}
          className='dark:bg-white hover:opacity-100 opacity-80 dark:text-black text-white bg-black w-auto rounded-2xl px-5 py-2 -xs:px-3 -xs:py-2 box-border outline-none justify-center items-center font-bold flex'
        >
          게시글 더보기 &nbsp;
          <FaPlus />
        </Link>
      </div>
    </>
  );
}
