"use client";

export default function Button() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button>
      <div
        id="to-top"
        className="absolute bottom-3 right-3"
        onClick={scrollToTop}
      >
        <div className="text-black text-sm font-bold">UP</div>
      </div>
    </button>
  );
}
