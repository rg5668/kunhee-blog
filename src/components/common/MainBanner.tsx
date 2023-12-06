'use client';
import Image from 'next/image';
import ReactRotatingText from 'react-rotating-text';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { bannerLink, mainBanner } from '@/constant/banner';
import HoverLink from '../ui/HoverLink';

export default function MainBanner() {
  return (
    <div className='relative flex items-center justify-between pb-8 -sm:flex -sm:flex-col-reverse -sm:gap-4'>
      <div className='w-3/5 flex flex-col text-3xl -md:text-2xl -sm:text-lg -xs:w-full -sm:items-center relative -sm:bottom-[40px]'>
        <div className='flex gap-2 pb-3'>
          <FaReact />
          <TbBrandNextjs />
        </div>
        <span>안녕하세요!</span>
        <span>
          <strong>
            <ReactRotatingText items={mainBanner.skills} className='react-rotating-text' />
          </strong>{' '}
          를 좋아하는
        </span>
        <span>
          개발자{' '}
          <strong>
            <ReactRotatingText items={mainBanner.names} />
          </strong>{' '}
          입니다.
        </span>
        <div className='flex gap-3 mt-5 text-base -sm:text-sm -sm:flex-wrap -sm:justify-center'>
          {bannerLink.map((data, i) => (
            <div key={i}>
              <HoverLink
                href={data.href}
                target='_blank'
                animation
                title={`${data.name} 열기`}
                className='flex items-center gap-1'
              >
                {data.icon}
                {data.name}
              </HoverLink>
            </div>
          ))}
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/assets/my_photo.png'}
          alt={'myphoto'}
          width={200}
          height={200}
          priority
          className='relative top-[-50px] rounded-2xl w-[300px] h-[auto] -md:w-[250px] -sm:w-[180px]'
        />
        <Image
          src={'/assets/summer_dog.png'}
          alt={'summerdog'}
          width={200}
          height={200}
          priority
          className='absolute right-[180px] bottom-[30px] rounded-2xl w-[120px] h-[auto] -md:w-[100px] -sm:w-[70px] -md:right-[150px] -sm:right-[110px] -sm:top-[105px] -xs:left-[0]'
        />
      </div>
    </div>
  );
}
