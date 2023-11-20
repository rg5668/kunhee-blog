'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { menus } from '@/constant';
import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function Header() {
    const pathname = usePathname();
    const startPathname = pathname.split('/', 2).join('/');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState<string>('');

    const handleOnSearch = useCallback(
        (e: globalThis.MouseEvent | MouseEvent<HTMLAnchorElement>) => {
            e.stopPropagation();
            setIsSearchOpen(!isSearchOpen);

            if (isSearchOpen) {
                setSearchText('');
            }
        },
        [isSearchOpen]
    );

    const handleOnSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
    };

    useEffect(() => {
        if (isSearchOpen) {
            window.addEventListener('click', (e) => handleOnSearch(e));
            document.body.classList.add('stopScroll');
        } else {
            document.body.classList.remove('stopScroll');
            window.removeEventListener('click', (e) => handleOnSearch(e));
        }
    }, [handleOnSearch, isSearchOpen]);

    return (
        <header className="h-12 z-10 relative -md:px-3">
            <div className="max-w-3xl mx-auto my-0 relative h-12">
                <div>
                    <div
                        className={`flex h-12 items-center gap-5 ${
                            isSearchOpen ? `invisible opacity-0` : 'header-wrap'
                        }`}
                    >
                        <Link href={'/'} className="flex font-bold text-lg flex-1">
                            <span>Kunhee Blog</span>
                        </Link>

                        <ul className="flex w-full items-center gap-5 flex-1 justify-end -md:hidden">
                            {menus.map((menu, i) => (
                                <li key={i} className="logo">
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

                        <a href="#" onClick={handleOnSearch}>
                            <FaSearch size={'18px'} />
                        </a>
                        <ThemeSwitcher />
                        <div className="hidden -md:block">메뉴</div>
                    </div>

                    <div className={`search-wrap ${isSearchOpen ? `visible opacity-100` : ''}`}>
                        <div className="search">
                            <div className="shadow"></div>
                            <div className="textfield">
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요."
                                    className="w-full h-8 rounded-2xl px-5 outline-none border-none bg-white"
                                    autoFocus
                                    value={searchText || ''}
                                    onChange={handleOnSearchText}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <a
                                    href="#"
                                    className="search-canceler text-white font-bold text-sm"
                                    onClick={handleOnSearch}
                                >
                                    취소
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
