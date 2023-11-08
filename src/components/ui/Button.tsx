"use client";

import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Button() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="fixed bottom-3 right-3 p-2 border rounded-2xl bg-black">
      <div id="to-top" className="" onClick={scrollToTop}>
        <div className="text-white text-sm font-bold">
          <FaArrowAltCircleUp />
        </div>
      </div>
    </button>
  );
}
