import { navMenus } from '@/constant';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='h-10 sticky top-0 z-[1]'>
      <div className='text-center dark:bg-rgba-white dark:text-black text-white bg-rgba-gray backdrop-blur-sm border-b border-gray-200 max-w-3xl flex h-10 mx-auto my-0 items-center'>
        <h1 className='flex-grow'>최신글 올라오기</h1>
      </div>
    </nav>
  );
}
