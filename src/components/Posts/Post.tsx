import Image from "next/image";
import Link from "next/link";
// 임시 이미지
import dog from "/public/dog.jpg";

export default function Post() {
  return (
    <Link href={"/"} className="flex gap-3 items-center border">
      <div className="flex-grow flex gap-4 items-center">
        <Image src={dog} alt={""} width={80} height={80} unoptimized={true} />
        <span className="text-base font-bold">
          클로저에 대해서 클로저에 대해서 클로저에 대해서
        </span>
      </div>
      <span className="opacity-[0.7] pr-3">2023.11.07</span>
    </Link>
  );
}
