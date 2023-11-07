import { navMenus } from "@/constant";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-10 sticky top-0 z-10">
      <div className="text-center bg-rgba-white backdrop-blur-sm border-b border-gray-200 max-w-3xl flex h-10 mx-auto my-0 items-center">
        <h1 className="flex-grow">최신글 올라오기</h1>
        {/* <ul className="flex gap-4">
          {navMenus.map((menu, i) => (
            <li key={i}>
              <Link
                href={menu.href}
                target="_blank"
                className="bg-black rounded-2xl px-4 py-1 block outline-none box-border opacity-[0.7] hover:opacity-[1]"
                title={`${menu.name} 이동`}
              >
                <span className="flex items-center h-6 w-auto">
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
}
