'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
  };

  return (
    <div className='w-10 h-10 flex items-center justify-center'>
      {theme !== 'dark' ? (
        <button onClick={() => handleThemeChange('dark')}>
          <BsSun size='20' />
        </button>
      ) : (
        <button onClick={() => handleThemeChange('light')}>
          <BsMoon size='20' />
        </button>
      )}
    </div>
  );
}
