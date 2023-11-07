"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menus } from "@/constant";

export default function Header() {
  const pathname = usePathname();
  const startPathname = pathname.split("/", 2).join("/");

  return (
    <header className="bg-black h-12 z-10 relative">
      <div className="max-w-3xl mx-auto my-0 relative h-12">
        <ul className="flex h-12 items-center gap-5">
          <li className="font-bold text-lg flex-1">
            <Link href={"/"}>
              <span>KunHee Blog</span>
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

          {/* <li>
            <a href="#">
              <span>Search</span>
            </a>
          </li> */}
          {/* 모바일 메뉴 */}
          {/* <li>
            <a href="#">
              <span>=</span>
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
