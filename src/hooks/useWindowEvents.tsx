'use client';

import React, { MouseEvent, useCallback, useEffect, useState } from 'react';

export default function useWindowEvents() {
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

      document.body.classList.add('stopScroll');
    } else {
      document.body.classList.remove('stopScroll');
      window.removeEventListener('click', (e) => handleOnClick(e));
    }
    return () => {
      window.removeEventListener('click', handleOnClick);
    };
  }, [handleOnClick, isClick]);

  return { isClick, handleOnClick };
}
