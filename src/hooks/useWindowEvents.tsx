'use client';

import React, { MouseEvent, useCallback, useEffect, useState } from 'react';

interface WindowEventsProps {
  scrollStop: boolean;
}

export default function useWindowEvents({ scrollStop }: WindowEventsProps) {
  const [isClick, setIsClick] = useState(false);
  const handleOnClick = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsClick(!isClick);
    },
    [isClick],
  );

  useEffect(() => {
    if (isClick) {
      window.addEventListener('click', (e) => handleOnClick(e));
      {
        scrollStop && document.body.classList.add('stopScroll');
      }
    } else {
      {
        scrollStop && document.body.classList.remove('stopScroll');
      }
      window.removeEventListener('click', (e) => handleOnClick(e));
    }
    return () => {
      window.removeEventListener('click', handleOnClick);
    };
  }, [handleOnClick, isClick, scrollStop]);

  return { isClick, setIsClick, handleOnClick };
}
