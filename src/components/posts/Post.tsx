import { PostType } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ post }: { post: PostType }) {
  return (
    <Link
      href={`${post.targetLink ? post.targetLink : `/posts/${post.slug}`}`}
      className='items-center border rounded-2xl scale-100 hover:scale-105 transition-all w-[calc(33%-6px)] -sm:w-[calc(50%-6px)] -xs:w-[calc(50%-8px)] -xxs:w-full'
      target={`${post.targetLink ? `_blank` : `_self`}`}
    >
      <div className='flex flex-col flex-wrap'>
        <div className='w-full h-[200px] -sm:h-[200px] -xs:h-[150px]'>
          <Image
            src={post.coverImage ? post.coverImage : '/assets/no_image.png'}
            alt={''}
            width={0}
            height={0}
            sizes='100vw'
            className='object-cover w-full h-full border-b rounded-t-2xl'
            priority
          />
        </div>
        <span className='h-auto px-3 py-2 overflow-hidden text-base font-bold -md:text-sm line-clamp-2'>
          {post.title}
        </span>
        <span className='text-sm -md:text-xs px-3 overflow-hidden min-h-[60px] -md:min-h-[30px] line-clamp-2'>
          {post.description && post.description}
        </span>
        <span className='opacity-[0.7] pl-3 pb-3 -sm:text-xs pt-1'>{post.date ?? post.team}</span>
      </div>
    </Link>
  );
}
