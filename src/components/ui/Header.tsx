"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menus } from "@/constant";

export default function Header() {
  const pathname = usePathname();
  const startPathname = pathname.split("/", 2).join("/");

  return (
    <header className="bg-black h-11 z-10 relative">
      <div className="max-w-5xl mx-auto my-0 relative h-11">
        <ul className="flex h-11 items-center justify-between">
          {menus.map((menu, i) => (
            <li key={i}>
              {menu.href ? (
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
              ) : (
                <span>{menu.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
