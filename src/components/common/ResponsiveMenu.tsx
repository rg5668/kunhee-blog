import React from 'react';
import HoverLink from '../ui/HoverLink';
import useWindowEvents from '@/hooks/useWindowEvents';
import { menus } from '@/constant/header';

export default function ResponsiveMenu({ startPathname }: { startPathname: string }) {
  const { isClick: isMenuing } = useWindowEvents();
  return (
    <div className={`hidden -md:block ${!isMenuing ? 'clone-menu' : ''}`}>
      <ul className='dark:bg-black menu'>
        {!isMenuing && (
          <>
            {[{ name: 'Home', href: '/' }, ...menus].map((menu, i) => (
              <li
                key={i}
                className='border-b outline-none last-of-type:border-none hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white'
              >
                {menu.href && (
                  <HoverLink
                    href={menu.href}
                    active={startPathname === menu.href}
                    animation={false}
                    className='block w-full p-3 after:dark:bg-white after:bg-black'
                  >
                    {menu.name}
                  </HoverLink>
                )}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
