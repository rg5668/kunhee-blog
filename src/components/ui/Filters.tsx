'use client';

import { filterItems } from '@/constant/post';
import { FilterProps } from '@/types/post';
import React from 'react';
import { BiCheckboxChecked } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

function Filters({ isOpenFilters, selectedFilter, handleFilterSelected, handleOnFilterMenu, postList }: FilterProps) {
  return (
    <div className='relative flex justify-end gap-3 py-4'>
      <button
        onClick={(e) => handleOnFilterMenu(e)}
        className='relative border py-2 pl-4 pr-2 rounded-md flex items-center gap-1 bg-white opacity-85 text-black w-[105px] justify-between disabled:bg-gray-200 disabled:text-gray-600'
        disabled={postList.length === 0}
      >
        {selectedFilter} <IoMdArrowDropdown className='w-4 h-4' />
      </button>

      {isOpenFilters && (
        <ul className='absolute top-[54px] w-[105px] bg-white text-black z-10 rounded-md border'>
          {filterItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleFilterSelected(item.name)}
              className='flex items-center justify-between py-2 pl-4 pr-2 rounded-md cursor-pointer hover:opacity-100 hover:bg-black hover:text-white'
            >
              {item.name}
              {item.name === selectedFilter ? <BiCheckboxChecked className='w-5 h-5' /> : <span></span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(Filters);
