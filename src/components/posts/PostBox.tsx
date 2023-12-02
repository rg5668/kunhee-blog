'use client';

import React from 'react';
import HoverLink from '../ui/HoverLink';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { PostBoxProps } from '@/types/post';

export default function PostBox({ post }: PostBoxProps) {
  const router = useRouter();
  return (
    post.currentIndex && (
      <div className='flex items-center justify-between pt-5 border-t'>
        <HoverLink
          onClick={() => router.push(`/posts/${post?.prev?.slug}`)}
          animation={post.currentIndex > 1}
          disabled={post.currentIndex <= 1}
          className='flex items-center gap-2'
        >
          <FaLongArrowAltLeft className='w-5 h-5' />
          이전글
        </HoverLink>
        <div className='flex gap-2'>
          <span>{post.currentIndex}</span>/<span>{post.totalLength}</span>
        </div>
        <HoverLink
          onClick={() => router.push(`/posts/${post?.next?.slug}`)}
          animation={post.currentIndex !== post.totalLength}
          disabled={post.currentIndex === post.totalLength}
          className='flex items-center gap-2'
        >
          다음글
          <FaLongArrowAltRight className='w-5 h-5' />
        </HoverLink>
      </div>
    )
  );
}
