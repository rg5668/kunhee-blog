import React from 'react';

export default function Spinner() {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-rgba-gray'>
      <div className='w-[100px] h-[100px] relative'>
        <span className='loader'></span>
      </div>
    </div>
  );
}
