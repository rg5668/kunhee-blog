'use client';

import HoverLink from '@/components/ui/HoverLink';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbError404 } from 'react-icons/tb';
import { IoHome } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-5 items-center justify-center w-full relative top-[230px]'>
      <TbError404 className='w-28 h-28' />
      <h1 className='text-2xl font-bold'>해당 게시글이 없습니다.</h1>
      <div>
        <div className='flex items-center gap-2 text-base'>
          <HoverLink className='flex gap-2' animation onClick={() => router.back()}>
            <IoMdArrowRoundBack className='w-5 h-5' />
            이전으로 돌아가기
          </HoverLink>
          <div className='w-5 h-1 rotate-90 border-b-2' />
          <HoverLink href='/' className='flex gap-2' animation>
            <IoHome className='w-5 h-5' />
            홈으로 이동하기
          </HoverLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
