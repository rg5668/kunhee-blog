import { MouseEvent } from 'react';

export interface PostType {
  slug: string;
  category: string[];
  title: string;
  date: string;
  coverImage?: string;
  author: string;
  content: string;
  description?: string;
  team?: string;
  targetLink?: string;
}

export interface PostProps {
  posts: PostType[];
  category?: string[];
}

export interface FilterProps {
  isOpenFilters: boolean;
  selectedFilter: string;
  handleFilterSelected: (filterName: string) => void;
  handleOnFilterMenu: (e: globalThis.MouseEvent | MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;
  postList: PostType[];
}
