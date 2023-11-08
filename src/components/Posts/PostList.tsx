import Link from "next/link";
import Post from "./Post";
import { FaPlus, FaArrowRight } from "react-icons/fa";

export default function PostList() {
  return (
    <>
      <div className="text-xl font-bold pb-4 pt-8">
        <h1>Study</h1>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        {new Array(5).fill(0).map((v, i) => (
          <Post key={i} />
        ))}
        <div className="flex gap-5 justify-center">
          <Link
            href={"/"}
            className="bg-white w-auto rounded-2xl px-5 py-2 box-border outline-none text-black justify-center items-center font-bold flex"
          >
            게시글 더보기 <FaPlus />
          </Link>
          <Link
            href={"/"}
            className="bg-white w-auto rounded-2xl px-5 py-2 box-border outline-none text-black justify-center items-center font-bold flex"
          >
            title 페이지 이동 <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
