'use client';

import { FaCircleArrowUp } from 'react-icons/fa6';

export default function ScrollToButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className='fixed bg-black border rounded-full dark:bg-white bottom-4 right-4'
      id='to-top'
      onClick={scrollToTop}
    >
      <FaCircleArrowUp className='text-white border-none outline-none dark:text-black w-7 h-7' />
    </button>
  );
}
