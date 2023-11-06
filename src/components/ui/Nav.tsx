import { navMenus } from "@/constant";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-10 bg-rgba-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl text-gray-500 flex h-10 mx-auto my-0 items-center">
        <h1 className="flex-grow">NAV</h1>
        <ul className="flex gap-4">
          {navMenus.map((menu, i) => (
            <li key={i}>
              <Link
                href={menu.href}
                target="_blank"
                className="block hover:text-black"
              >
                <span>{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
