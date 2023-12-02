'use client';

import { FaCircleArrowUp } from 'react-icons/fa6';

export default function ScrollToButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className='fixed bottom-4 right-4' id='to-top' onClick={scrollToTop}>
      <FaCircleArrowUp className='w-7 h-7 border outline-none border-none font-bold' />
    </button>
  );
}
