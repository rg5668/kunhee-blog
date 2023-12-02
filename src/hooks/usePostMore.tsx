import React, { useCallback, useState } from 'react';

export default function usePostMore() {
  const [count, setCount] = useState(6);

  const handlePlusPost = useCallback(() => {
    setCount((prev) => prev + 6);
  }, [count]);

  return {
    count,
    setCount,
    handlePlusPost,
  };
}
