'use client';

import Post from './Post';
import { FaPlus } from 'react-icons/fa';
import { CiFileOff } from 'react-icons/ci';
import { PostProps } from '@/types/post';
import useFilters from '@/hooks/useFilters';
import Filters from '../ui/Filters';
import Tab from '../ui/Tab';
import SearchInput from '../ui/SearchInput';
import useSearch from '@/hooks/useSearch';
import usePostMore from '@/hooks/usePostMore';

export default function PostList({ posts, category }: PostProps) {
  const { count, handlePlusPost, setCount } = usePostMore();
  const {
    postList: data,
    selected,
    handleTagSelected,
    isOpenFilters,
    selectedFilter,
    handleFilterSelected,
    handleOnFilterMenu,
    setPostList,
  } = useFilters({ posts, setCount });
  const { input, handleOnChange, handleOnClearInput } = useSearch({
    posts: selected === 'all' ? [...posts] : posts.filter((v) => v.slug.startsWith(selected)),
    setPostList,
  });

  return (
    <>
      {category && (
        <>
          <SearchInput input={input} handleOnChange={handleOnChange} handleOnClearInput={handleOnClearInput} />
          <div className='py-5 border-b-2'>
            <Tab menus={category} posts={posts} handleTagSelected={handleTagSelected} selected={selected} />
          </div>
          <Filters
            isOpenFilters={isOpenFilters}
            selectedFilter={selectedFilter}
            handleFilterSelected={handleFilterSelected}
            handleOnFilterMenu={handleOnFilterMenu}
            postList={data}
          />
        </>
      )}
      <article className='flex flex-wrap gap-3 -xs:justify-center'>
        {data.length !== 0 ? (
          data.slice(0, count).map((post, i) => <Post key={i} post={post} />)
        ) : (
          <div className='flex justify-center w-full h-[360px] items-center flex-col gap-3 border rounded-lg font-bold text-base text-gray-300'>
            <CiFileOff className='w-12 h-12' />
            <span>게시글이 없습니다.</span>
          </div>
        )}
      </article>
      {data.length !== 0 && data.length >= count && (
        <div className='flex justify-center pt-5 pb-8 -md:text-sm -sm:text-xs'>
          <button
            onClick={handlePlusPost}
            className='box-border flex items-center justify-center w-full px-5 py-2 font-bold text-white bg-black outline-none dark:bg-white hover:opacity-100 opacity-80 dark:text-black rounded-2xl -xs:px-3 -xs:py-2'
          >
            게시글 더보기 &nbsp;
            <FaPlus />
          </button>
        </div>
      )}
    </>
  );
}
