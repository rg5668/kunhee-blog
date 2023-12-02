import { PostType } from './post';

export interface TabProps {
  menus: string[];
  posts: PostType[];
  handleTagSelected: (tagName: string) => void;
  selected: string;
}
