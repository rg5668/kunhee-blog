'use client';

import Post from './Post';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { CiFileOff } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiCheckboxChecked } from 'react-icons/bi';
import { PostType } from '@/types/post';
import Tab from '../ui/Tab';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

type Post = {
  posts: PostType[];
  category?: string[];
};

const filterItems = [{ name: '최신순' }, { name: '오래된순' }, { name: '제목순' }];

export default function PostList({ posts, category }: Post) {
  const [postList, setPostList] = useState(posts);
  const [selected, setSelected] = useState('all');
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(filterItems[0].name);
  const [count, setCount] = useState(6);
  const handleTagSelected = (tagName: string) => {
    setPostList([...posts.filter((v) => (tagName === 'all' ? '/' : v.slug.startsWith(tagName)))]);
    setSelected(tagName);
    setSelectedFilter(filterItems[0].name);
    setCount(6);
  };

  const handleFilterSelected = (filterName: string) => {
    switch (filterName) {
      case '최신순':
        setPostList([...postList].sort((post1, post2) => (post1.date > post2.date ? -1 : 1)));
        break;
      case '오래된순':
        setPostList([...postList].sort((post1, post2) => (post1.date < post2.date ? -1 : 1)));
        break;
      case '제목순':
        setPostList([...postList].sort((post1, post2) => (post1.title > post2.title ? 1 : -1)));
        break;
    }
    setSelectedFilter(filterName);
    setIsOpenFilters(!isOpenFilters);
  };

  const handleOnFilterMenu = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsOpenFilters(!isOpenFilters);
    },
    [isOpenFilters],
  );

  useEffect(() => {
    if (isOpenFilters) {
      window.addEventListener('click', (e) => handleOnFilterMenu(e));
    } else {
      window.removeEventListener('click', (e) => handleOnFilterMenu(e));
    }
  }, [handleOnFilterMenu, isOpenFilters]);

  const handlePlusPost = () => {
    setCount((prev) => prev + 6);
  };

  return (
    <>
      {category && (
        <>
          <div className='py-5 border-b-2'>
            <Tab menus={category} posts={posts} handleTagSelected={handleTagSelected} selected={selected} />
          </div>
          <div className='relative flex justify-end py-4 gap-3'>
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
                    className='pl-4 pr-2 py-2 cursor-pointer hover:opacity-100 hover:bg-black hover:text-white rounded-md flex items-center justify-between'
                  >
                    {item.name}
                    {item.name === selectedFilter ? <BiCheckboxChecked className='w-5 h-5' /> : <span></span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
      <div className='flex flex-wrap gap-3 -xs:justify-center'>
        {postList.length !== 0 ? (
          postList.slice(0, count).map((post, i) => <Post key={i} post={post} />)
        ) : (
          <div className='flex justify-center w-full h-[360px] items-center flex-col gap-3 border rounded-lg font-bold text-base text-gray-300'>
            <CiFileOff className='w-12 h-12' />
            <span>게시글이 없습니다.</span>
          </div>
        )}
      </div>
      {postList.length !== 0 && postList.length >= count && (
        <div className='pt-5 pb-8 -md:text-sm -sm:text-xs flex justify-center'>
          <button
            onClick={handlePlusPost}
            className='dark:bg-white hover:opacity-100 opacity-80 dark:text-black text-white bg-black w-full rounded-2xl px-5 py-2 -xs:px-3 -xs:py-2 box-border outline-none justify-center items-center font-bold flex'
          >
            게시글 더보기 &nbsp;
            <FaPlus />
          </button>
        </div>
      )}
    </>
  );
}
