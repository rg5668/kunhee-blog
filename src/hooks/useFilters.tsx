'use client';

import { filterItems } from '@/constant/post';
import { PostProps } from '@/types/post';
import { MouseEvent, useCallback, useState } from 'react';
import useWindowEvents from './useWindowEvents';

export default function useFilters({ posts }: PostProps) {
  const { isClick: isOpenFilters, setIsClick: setIsOpenFilters } = useWindowEvents({ scrollStop: false });

  const [postList, setPostList] = useState([...posts]);
  const [selected, setSelected] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState(filterItems[0].name);
  const [count, setCount] = useState(6);

  const handleTagSelected = useCallback(
    (tagName: string) => {
      const filteredPosts = tagName === 'all' ? [...posts] : posts.filter((v) => v.slug.startsWith(tagName));
      setPostList(filteredPosts);
      setSelected(tagName);
      setSelectedFilter(filterItems[0].name);
      setCount(6);
    },
    [posts],
  );

  const handleFilterSelected = useCallback(
    (filterName: string) => {
      const sortedPosts = [...postList];
      switch (filterName) {
        case '최신순':
          sortedPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
          break;
        case '오래된순':
          sortedPosts.sort((post1, post2) => (post1.date < post2.date ? -1 : 1));
          break;
        case '제목순':
          sortedPosts.sort((post1, post2) => (post1.title > post2.title ? 1 : -1));
          break;
      }
      setPostList(sortedPosts);
      setSelectedFilter(filterName);
      setIsOpenFilters(!isOpenFilters);
    },
    [isOpenFilters, postList],
  );

  const handleOnFilterMenu = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
      e.stopPropagation();
      setIsOpenFilters(!isOpenFilters);
    },
    [isOpenFilters],
  );

  const handlePlusPost = () => {
    setCount((prev) => prev + 6);
  };

  return {
    postList,
    selected,
    isOpenFilters,
    selectedFilter,
    count,
    handleTagSelected,
    handleFilterSelected,
    handleOnFilterMenu,
    handlePlusPost,
    posts,
  };
}
