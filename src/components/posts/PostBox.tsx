'use client';

import React from 'react';
import HoverLink from '../ui/HoverLink';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { PostBoxProps } from '@/types/post';
import Image from 'next/image';

export default function PostBox({ post, prev }: PostBoxProps) {
  const router = useRouter();
  return (
    <HoverLink
      className={`flex w-full hover:outline hover:outline-1 hover:outline-gray-300 hover:rounded-xl hover:bg-gray-200 hover:dark:bg-slate-800`}
      onClick={() => router.push(`/posts/${post.slug}`)}
    >
      <div
        className={`flex flex-wrap ${
          prev && 'flex-row-reverse'
        } w-full justify-between -sm:justify-center items-center py-3 px-8 border rounded-lg`}
      >
        <div className={`flex flex-wrap -sm:justify-center items-center gap-4 ${prev && 'flex-row-reverse'}`}>
          <Image
            src={post.coverImage ? post.coverImage : '/assets/no_image.png'}
            width={0}
            height={0}
            sizes='100vw'
            alt=''
            priority
            className='w-[100px] h-[100px] object-cover'
          />
          <div className={`flex -sm:items-center flex-col ${prev ? 'items-end' : 'items-start'} w-auto gap-[2px]`}>
            {post.category && (
              <span className='inline-block px-3 py-1 mb-2 text-xs border border-gray-300 rounded-xl'>
                {post.category}
              </span>
            )}
            <span className='font-bold'>{post.title}</span>
            <span className='text-sm'>{post.description}</span>
            <span className='text-sm'>{post.date}</span>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          {prev ? (
            <>
              <FaLongArrowAltLeft className='w-5 h-5' />
              이전글
            </>
          ) : (
            <>
              다음글 <FaLongArrowAltRight className='w-5 h-5' />
            </>
          )}
        </div>
      </div>
    </HoverLink>
  );
}
