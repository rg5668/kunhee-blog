import Image from 'next/image';
import Link from 'next/link';

interface Post {
  imageSrc?: string;
}

export default function Post({ imageSrc }: Post) {
  // w-[230px] -md:max-w-[200px] -sm:max-w-full
  return (
    <Link
      href={'/'}
      className='items-center border rounded-2xl scale-100 hover:scale-95 transition-all w-[calc(33%-6px)] -sm:w-[calc(50%-6px)] -xs:w-[calc(50%-8px)] -xxs:w-full'
    >
      <div className='items-center flex-wrap flex'>
        <Image
          src={imageSrc ? imageSrc : '/assets/no_image.png'}
          alt={''}
          width={200}
          height={200}
          unoptimized={true}
          className='rounded-t-2xl h-auto w-full'
        />

        <span className='text-base -md:text-sm font-bold p-3 overflow-hidden -md:h-[54px] line-clamp-2'>
          클로저에 대해서 클로저에 대해서 클로저에 대해서
        </span>
        <span className='opacity-[0.7] pl-3 pb-3 -sm:text-xs'>2023.11.07</span>
      </div>
    </Link>
  );
}
