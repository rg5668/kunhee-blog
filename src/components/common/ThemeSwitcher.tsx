'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
  };

  return (
    <div className='flex items-center justify-center'>
      {theme !== 'dark' ? (
        <button onClick={() => handleThemeChange('dark')}>
          <BsSun className='w-5 h-5' />
        </button>
      ) : (
        <button onClick={() => handleThemeChange('light')}>
          <BsMoon className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}
