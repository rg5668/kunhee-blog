"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menus } from "@/constant";
import { FaSearch } from "react-icons/fa";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

export default function Header() {
  const pathname = usePathname();
  const startPathname = pathname.split("/", 2).join("/");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleOnSearch = useCallback(
    (e: globalThis.MouseEvent | MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      setIsSearchOpen(!isSearchOpen);
    },
    [isSearchOpen]
  );

  const handleOnSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  useEffect(() => {
    if (isSearchOpen) {
      window.addEventListener("click", (e) => handleOnSearch(e));
      document.body.classList.add("stopScroll");
    } else {
      document.body.classList.remove("stopScroll");
      window.removeEventListener("click", (e) => handleOnSearch(e));
    }
  }, [handleOnSearch, isSearchOpen]);

  return (
    <header className="bg-black h-12 z-10 relative">
      <div className="max-w-3xl mx-auto my-0 relative h-12">
        <div>
          <div
            className={`flex items-center gap-5 ${
              isSearchOpen ? `invisible opacity-0` : ""
            }`}
          >
            <ul className="flex h-12 w-full items-center gap-5">
              <li className="font-bold text-lg flex-1">
                <Link href={"/"}>
                  <span>Kunhee Blog</span>
                </Link>
              </li>
              {menus.map((menu, i) => (
                <li key={i} className="logo">
                  {menu.href && (
                    <Link
                      href={`${menu.href}`}
                      className={`hover-underline-animation block ${
                        startPathname === menu.href
                          ? "opacity-[1] active"
                          : "opacity-[0.7]"
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
              <FaSearch size={"18px"} />
            </a>
          </div>

          <div
            className={`search-wrap ${
              isSearchOpen ? `visible opacity-100` : ""
            }`}
          >
            <div className="search">
              <div className="shadow"></div>
              <div className="textfield">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  className="w-full h-8 rounded-2xl px-5 text-black outline-none border-none"
                  autoFocus
                  value={searchText || ""}
                  onChange={handleOnSearchText}
                />
                <a
                  href="#"
                  className="search-canceler"
                  onClick={handleOnSearch}
                >
                  {/* <FaWindowClose size={"18px"} /> */}
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
