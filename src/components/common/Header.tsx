'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import { menus } from '@/constant/header';
import useWindowEvents from '@/hooks/useWindowEvents';
import HoverLink from '../ui/HoverLink';
import ResponsiveMenu from './ResponsiveMenu';

export default function Header() {
  const pathname = usePathname();
  const startPathname = pathname.split('/', 2).join('/');
  const { isClick: isMenuing, handleOnClick: handleOnMenu } = useWindowEvents();

  return (
    <header
      className={`fixed top-0 h-12 z-20 w-full ${
        isMenuing ? '-md:menuing -md:dark:bg-black -md:dark:before:bg-black' : ''
      } `}
    >
      <div className='relative h-12 max-w-3xl mx-auto my-0 bg-white -md:px-3 dark:bg-black'>
        <div className={`flex h-12 items-center header-wrap`}>
          <Link href={'/'} className='flex flex-1 text-lg font-bold'>
            <span>Kunhee Blog</span>
          </Link>
          <div className='flex items-center gap-5'>
            <ul className='flex items-center justify-end flex-1 w-full gap-5 -md:hidden'>
              {menus.map((menu, i) => (
                <li key={i} className='logo'>
                  {menu.href && (
                    <HoverLink href={menu.href} animation={true} active={startPathname === menu.href}>
                      {menu.name}
                    </HoverLink>
                  )}
                </li>
              ))}
            </ul>

            {!isMenuing && <ThemeSwitcher />}
            <button
              onClick={handleOnMenu}
              className={`hidden -md:flex h-[30px] flex-col justify-center menu-starter ${
                isMenuing ? 'menu-starting' : ''
              }`}
            >
              <span className='dark:bg-white'></span>
              <span className=' dark:bg-white'></span>
            </button>
          </div>

          <ResponsiveMenu startPathname={startPathname} />
        </div>
      </div>
    </header>
  );
}
