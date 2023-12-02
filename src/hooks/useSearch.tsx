import { PostProps } from '@/types/post';
import React, { ChangeEvent, useCallback, useState } from 'react';

export default function useSearch({ posts, setPostList }: PostProps) {
  const [input, setInput] = useState('');

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);

      if (setPostList) {
        const blankTrim = /\s+/g;
        const inputText = e.target.value.replace(blankTrim, '');

        setPostList(
          posts.filter((post) => {
            const formattedTitle = post.title.replace(blankTrim, '');
            return formattedTitle.includes(inputText);
          }),
        );
      }
    },
    [posts, setPostList],
  );

  const handleOnClearInput = () => {
    setInput('');
    setPostList && setPostList(posts);
  };

  return {
    input,
    setInput,
    handleOnChange,
    handleOnClearInput,
  };
}
