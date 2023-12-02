'use client';

import { SearchInputProps } from '@/types/post';
import { IoSearch } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import React from 'react';

function SearchInput({ input, handleOnChange, handleOnClearInput }: SearchInputProps) {
  return (
    <div className='relative flex justify-center w-full pb-5'>
      <div className='relative flex items-center w-[90%] gap-3 bg-white border rounded-lg'>
        <IoSearch className='w-6 h-6 ml-3 text-black opacity-80' />
        <input
          className='w-full py-3 pr-4 text-black bg-white rounded-lg outline-none'
          placeholder='검색어를 입력하세요.'
          autoFocus
          value={input}
          onChange={handleOnChange}
        />
        <button className='absolute top-[3px] p-2 right-2' onClick={handleOnClearInput}>
          <IoMdClose className={`w-6 h-6 opacity-80 text-black ${input.length === 0 ? 'opacity-70' : 'opacity-100'}`} />
        </button>
      </div>
    </div>
  );
}

export default React.memo(SearchInput);
