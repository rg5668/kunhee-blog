import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react';

export interface PostType {
  slug: string;
  category: string[] | string;
  title: string;
  date: string;
  coverImage?: string;
  author: string;
  content: string;
  description?: string;
  team?: string;
  targetLink?: string;
  next?: PostType;
  prev?: PostType;
  currentIndex?: number;
  totalLength?: number;
}

export interface PostProps {
  posts: PostType[];
  category?: string[];
  setPostList?: Dispatch<SetStateAction<PostType[]>>;
  setCount?: (value: number) => void;
}

export interface PostBoxProps {
  post: PostType;
}

export interface FilterProps {
  isOpenFilters: boolean;
  selectedFilter: string;
  handleFilterSelected: (filterName: string) => void;
  handleOnFilterMenu: (e: globalThis.MouseEvent | MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;
  postList: PostType[];
}

export interface SearchInputProps {
  input: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnClearInput: () => void;
}
