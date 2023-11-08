"use client";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
// 임시 이미지
import dog from "/public/dog.jpg";
import Link from "next/link";

export default function MainBanner() {
  const skill = ["Frontend", "UI/UX", "정보 공유"];
  const name = ["임건희", "Kunhee"];

  return (
    <div className="flex justify-between items-center relative">
      <div className="flex flex-col text-2xl">
        <span>안녕하세요!</span>
        <span>
          <strong>
            <ReactRotatingText items={skill} className="react-rotating-text" />
          </strong>{" "}
          를 좋아하는
        </span>
        <span>
          개발자{" "}
          <strong>
            <ReactRotatingText items={name} />
          </strong>{" "}
          입니다.
        </span>
        <div className="text-base flex gap-2 mt-5">
          <Link
            target="_blank"
            title={`Github 열기`}
            href={"https://github.com/rg5668"}
            className="hover-underline-animation opacity-[0.7] hover:opacity-[1]"
          >
            Github
          </Link>
          <Link
            target="_blank"
            title={`LinkedIn 열기`}
            href={"https://www.linkedin.com/in/kh5668/"}
            className="hover-underline-animation opacity-[0.7] hover:opacity-[1]"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            title={`Resume 열기`}
            href={
              "https://www.figma.com/file/26TEvE6Qgv2ay4l3irRlX1/%EC%9E%84%EA%B1%B4%ED%9D%AC-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=fdexTKnsPcsbG8Cn-1"
            }
            className="hover-underline-animation opacity-[0.7] hover:opacity-[1]"
          >
            Resume
          </Link>
        </div>
      </div>
      <Image src={dog} alt={""} width={200} height={200} unoptimized={true} />
    </div>
  );
}
