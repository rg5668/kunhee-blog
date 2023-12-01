import { AboutProps } from '@/types/about';
import Link from 'next/link';
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { IoLogoGithub } from 'react-icons/io';
import { RiNotionFill } from 'react-icons/ri';

export default function About({ data }: AboutProps) {
  return (
    <div>
      <div className='flex gap-5 items-center -sm:flex-wrap w-full justify-center pb-3'>
        <div className='min-w-1/4 flex flex-col gap-1 items-center'>
          <span className='text-base font-bold'>{data.name}</span>
          <span>
            {data.startDate} ~ {data.endDate}
          </span>
          <span>{data.team}</span>
        </div>
        <div className='w-3/4'>
          <div className='pl-5 flex flex-col gap-1 break-keep'>
            {data.description?.map((desc) => (
              <span>- {desc}</span>
            ))}
            {data.skills && <span className='pt-2'>사용 기술: {data.skills}</span>}
          </div>
        </div>
      </div>
      <div className='flex gap-2 justify-end'>
        {data.portfolioLink && (
          <Link href={data.portfolioLink} title={`${data.name} Web Site 이동`}>
            <RiNotionFill className='w-5 h-5' />
          </Link>
        )}
        {data.webSiteLink && (
          <Link href={data.webSiteLink} title={`${data.name} Web Site 이동`}>
            <CgWebsite className='w-5 h-5' />
          </Link>
        )}
        {data.githubLink && (
          <Link href={data.githubLink} title={`${data.name} Github 이동`}>
            <IoLogoGithub className='w-5 h-5' />
          </Link>
        )}
      </div>
    </div>
  );
}
