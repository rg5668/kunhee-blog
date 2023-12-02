'use client';
import { TabProps } from '@/types/ui';
import React from 'react';

function Tab({ menus, handleTagSelected, selected, posts }: TabProps) {
  return (
    <ul className='flex flex-wrap items-center justify-center flex-1 gap-2 text-sm'>
      {menus.map((menu, i) => (
        <li
          key={i}
          onClick={() => handleTagSelected(menu)}
          className={`dark:bg-white dark:text-black bg-black text-white rounded-md px-3 py-[6px] cursor-pointer hover:opacity-100 hover:scale-105 flex gap-1 text-sm ${
            menu === selected ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <span>{menu}</span>
          <strong>{posts.filter((post) => (menu === 'all' ? '/' : post.slug.startsWith(menu))).length}</strong>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Tab);
