'use client';

import { throttle } from '@/utill/throttle';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = throttle((): void => {
    const scrollY = window.scrollY;
    const { scrollHeight, clientHeight } = document.documentElement;
    if (scrollY === 0) return setWidth(0);
    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = scrollY / windowHeight;
    setWidth(Math.max(0, Math.min(currentPercent * 100, 100)));
  }, 200);

  useEffect(() => {
    window.document.documentElement.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed left-0 top-[48px] z-20 w-full h-4 bg-blue-100 border-blue-100'>
      <div
        style={{ width: width + '%' }}
        className='transition-all h-full rounded-r-md px-1 bg-blue-500 text-[10px] text-white'
      >
        {width.toFixed()}%
      </div>
    </div>
  );
}
