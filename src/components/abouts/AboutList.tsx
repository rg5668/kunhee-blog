import React from 'react';
import About from './About';
import { about } from '@/constant/about';

export default function AboutList() {
  return (
    <article>
      <div className='flex flex-col gap-6 pt-2 pb-8 mb-8 border-b -sm:items-center'>
        <span className='mb-3 text-lg font-bold'>Careers</span>
        {about.careers.map((career, i) => (
          <About key={i} data={career} />
        ))}
      </div>
      <div className='flex flex-col gap-6 pt-2 pb-8 mb-8 border-b -sm:items-center'>
        <span className='mb-3 text-lg font-bold'>ToyProjects</span>
        {about.toyProjects.map((project, i) => (
          <About key={i} data={project} />
        ))}
      </div>
      <div className='flex flex-col gap-6 -sm:items-center'>
        <span className='mb-3 text-lg font-bold'>Others</span>
        {about.others.map((other, i) => (
          <About key={i} data={other} />
        ))}
      </div>
    </article>
  );
}
