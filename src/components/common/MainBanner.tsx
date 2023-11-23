'use client';
import Image from 'next/image';
import ReactRotatingText from 'react-rotating-text';
import Link from 'next/link';

export default function MainBanner() {
  const skill = ['Frontend', 'UI/UX', '정보 공유'];
  const name = ['임건희', 'Kunhee'];

  return (
    <div className='flex justify-between items-center relative -xs:flex -xs:flex-col-reverse -sm:gap-4'>
      <div className='flex flex-col text-3xl -md:text-2xl -sm:text-lg -xs:w-full -xs:items-center relative -xs:bottom-[40px]'>
        <span>안녕하세요!</span>
        <span>
          <strong>
            <ReactRotatingText items={skill} className='react-rotating-text' />
          </strong>{' '}
          를 좋아하는
        </span>
        <span>
          개발자{' '}
          <strong>
            <ReactRotatingText items={name} />
          </strong>{' '}
          입니다.
        </span>
        <div className='text-base flex gap-2 mt-5 -sm:text-xs'>
          <Link
            target='_blank'
            title={`Github 열기`}
            href={'https://github.com/rg5668'}
            className='hover-underline-animation after:dark:bg-white after:bg-black block opacity-[0.7] hover:opacity-[1]'
          >
            Github
          </Link>
          <Link
            target='_blank'
            title={`LinkedIn 열기`}
            href={'https://www.linkedin.com/in/kh5668/'}
            className='hover-underline-animation after:dark:bg-white after:bg-black block opacity-[0.7] hover:opacity-[1]'
          >
            LinkedIn
          </Link>
          <Link
            target='_blank'
            title={`Resume 열기`}
            href={
              'https://www.figma.com/file/26TEvE6Qgv2ay4l3irRlX1/%EC%9E%84%EA%B1%B4%ED%9D%AC-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&mode=design&t=q0D6Y9HdgiURhCYp-1'
            }
            className='hover-underline-animation after:dark:bg-white after:bg-black block opacity-[0.7] hover:opacity-[1]'
          >
            Resume
          </Link>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/assets/my_photo.png'}
          alt={''}
          width={200}
          height={200}
          unoptimized={true}
          className='relative top-[-50px] rounded-2xl w-[300px] h-[auto] -md:w-[250px] -sm:w-[150px] -xs:w-[180px]'
        />
        <Image
          src={'/assets/summer_dog.png'}
          alt={''}
          width={200}
          height={200}
          unoptimized={true}
          className='absolute right-[180px] bottom-[30px] rounded-2xl w-[120px] h-[auto] -md:w-[100px] -sm:w-[70px] -md:right-[150px] -sm:right-[100px] -xs:top-[105px] -xs:left-[0]'
        />
      </div>
    </div>
  );
}
