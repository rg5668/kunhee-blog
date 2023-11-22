'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { menus } from '@/constant';
import { FaSearch, FaWindowClose } from 'react-icons/fa';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function Header() {
  const pathname = usePathname();
  const startPathname = pathname.split('/', 2).join('/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchElement = useRef<HTMLInputElement>(null);
  const [isMenuing, setIsMenuing] = useState(false);

  const handleOnSearch = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      setIsSearchOpen(!isSearchOpen);

      if (isSearchOpen && searchElement.current) {
        searchElement.current.value = '';
      }
    },
    [isSearchOpen],
  );

  const handleOnMenu = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      setIsMenuing(!isMenuing);
    },
    [isMenuing],
  );

  useEffect(() => {
    const currentElement = searchElement.current;
    if (!currentElement) return;

    if (isSearchOpen) {
      setTimeout(() => {
        currentElement.focus();
      }, 400);
      window.addEventListener('click', (e) => handleOnSearch(e));

      document.body.classList.add('stopScroll');
    } else {
      document.body.classList.remove('stopScroll');
      window.removeEventListener('click', (e) => handleOnSearch(e));
    }
  }, [handleOnSearch, isSearchOpen]);

  useEffect(() => {
    if (isMenuing) {
      window.addEventListener('click', (e) => handleOnMenu(e));

      document.body.classList.add('stopScroll');
    } else {
      document.body.classList.remove('stopScroll');
      window.removeEventListener('click', (e) => handleOnMenu(e));
    }
  }, [handleOnMenu, isMenuing]);

  return (
    <header
      className={`h-12 z-10 relative -md:px-3 ${
        isMenuing ? '-md:menuing -md:dark:bg-black -md:dark:before:bg-black' : ''
      }`}
    >
      <div className='max-w-3xl mx-auto my-0 relative h-12'>
        <div className={`flex h-12 items-center ${isSearchOpen ? `invisible opacity-0` : 'header-wrap'}`}>
          <Link href={'/'} className='flex font-bold text-lg flex-1'>
            <span>Kunhee Blog</span>
          </Link>

          <div className='flex items-center gap-5'>
            <ul className='flex w-full items-center gap-5 flex-1 justify-end -md:hidden'>
              {menus.map((menu, i) => (
                <li key={i} className='logo'>
                  {menu.href && (
                    <Link
                      href={`${menu.href}`}
                      className={`hover-underline-animation after:dark:bg-white after:bg-black block ${
                        startPathname === menu.href ? 'opacity-[1] active' : 'opacity-[0.7]'
                      } hover:opacity-[1]
                    `}
                    >
                      <span>{menu.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {!isMenuing && (
              <>
                <a href='#' onClick={handleOnSearch}>
                  <FaSearch size={'18px'} />
                </a>
                <ThemeSwitcher />
              </>
            )}
            <a
              onClick={handleOnMenu}
              className={`cursor-pointer hidden -md:flex h-[30px] flex-col justify-center menu-starter ${
                isMenuing ? 'menu-starting' : ''
              }`}
            >
              <span className='dark:bg-white'></span>
              <span className=' dark:bg-white'></span>
            </a>
          </div>
          {/* 반응형 메뉴 */}
          <div className={`hidden -md:block ${isMenuing ? 'clone-menu' : ''}`}>
            <ul className='dark:bg-black menu'>
              {isMenuing && (
                <>
                  <li className='border-b hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white outline-none'>
                    <Link
                      href={`/`}
                      className={`after:dark:bg-white after:bg-black block w-full p-3 ${
                        startPathname === '/' ? 'opacity-100 active' : 'opacity-[0.7]'
                      } hover:opacity-[1]
                    `}
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  {menus.map((menu, i) => (
                    <li
                      key={i}
                      className='border-b last-of-type:border-none hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white outline-none'
                    >
                      {menu.href && (
                        <Link
                          href={`${menu.href}`}
                          className={`after:dark:bg-white after:bg-black block w-full p-3 ${
                            startPathname === menu.href ? 'opacity-100 active' : 'opacity-[0.7]'
                          } hover:opacity-[1]
                    `}
                        >
                          <span>{menu.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>

        <div className={`search-wrap ${isSearchOpen ? `visible opacity-100` : ''}`}>
          <div className='search'>
            <div className='shadow'></div>
            <div className='textfield'>
              <input
                type='text'
                placeholder='검색어를 입력하세요.'
                ref={searchElement}
                className='w-full h-8 rounded-2xl px-5 outline-none border-none bg-white text-black'
                onClick={(e) => e.stopPropagation()}
              />
              <a href='#' className='block text-white' onClick={handleOnSearch}>
                <FaWindowClose size={'20px'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
