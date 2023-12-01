import React from 'react';
import About from './About';
import { about } from '@/constant/about';

export default function AboutList() {
  return (
    <div>
      <div className='border-b pt-2 pb-8 mb-8 gap-4 flex flex-col -sm:items-center'>
        <span className='text-lg font-bold mb-3'>Careers</span>
        {about.careers.map((career, i) => (
          <About key={i} data={career} />
        ))}
      </div>
      <div className='border-b pt-2 pb-8 mb-8 gap-4 flex flex-col -sm:items-center'>
        <span className='text-lg font-bold mb-3'>ToyProjects</span>
        {about.toyProjects.map((project, i) => (
          <About key={i} data={project} />
        ))}
      </div>
      <div className='gap-4 flex flex-col -sm:items-center'>
        <span className='text-lg font-bold mb-3'>Others</span>
        {about.others.map((other, i) => (
          <About key={i} data={other} />
        ))}
      </div>
    </div>
  );
}
