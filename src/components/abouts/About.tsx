import { AboutProps } from '@/types/about';
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { IoLogoGithub } from 'react-icons/io';
import { RiNotionFill } from 'react-icons/ri';
import HoverLink from '../ui/HoverLink';

export default function About({ data }: AboutProps) {
  return (
    <div>
      <div className='flex items-center justify-center w-full gap-5 pb-4 -sm:flex-wrap'>
        <div className='flex flex-col items-center w-2/5 gap-1 min-w-2/5'>
          <span className='text-base font-bold'>{data.name}</span>
          <span>
            {data.startDate} ~ {data.endDate}
          </span>
          <span>{data.team}</span>
        </div>
        <div className='w-3/5 -md:text-center -md:w-full'>
          <div className='flex flex-col gap-1 pl-5 break-keep'>
            {data.description?.map((desc, i) => (
              <span key={i}>- {desc}</span>
            ))}
            <div className='flex flex-wrap gap-2 mt-2 -md:justify-center'>
              {data.skills &&
                data.skills.map((skill, i) => (
                  <span key={i} className='inline-block px-2 py-1 text-xs border rounded-xl'>
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-2 -sm:justify-center'>
        {data.webSiteLink && (
          <HoverLink
            href={data.webSiteLink}
            className='flex flex-col items-center'
            animation
            title={`${data.name} WebSite 이동`}
          >
            <CgWebsite className='w-5 h-5' />
            WebSite
          </HoverLink>
        )}
        {data.portfolioLink && (
          <HoverLink
            href={data.portfolioLink}
            className='flex flex-col items-center'
            animation
            title={`${data.name} Portfolio 이동`}
          >
            <RiNotionFill className='w-5 h-5' />
            Portfolio
          </HoverLink>
        )}
        {data.githubLink && (
          <HoverLink
            href={data.githubLink}
            className='flex flex-col items-center'
            animation
            title={`${data.name} Github 이동`}
          >
            <IoLogoGithub className='w-5 h-5' />
            Github
          </HoverLink>
        )}
      </div>
    </div>
  );
}
