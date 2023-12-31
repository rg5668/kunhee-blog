import { useCallback, useState } from 'react';

export default function usePostMore() {
  const [count, setCount] = useState(6);

  const handlePlusPost = useCallback(() => {
    setCount((prev) => prev + 6);
  }, []);

  return {
    count,
    setCount,
    handlePlusPost,
  };
}
