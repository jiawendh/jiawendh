"use client"

import Image from "next/image";

export default function ScrollToTop() {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      className="bg-black rounded-full p-1.5 self-center transition-transform hover:cursor-pointer hover:scale-110"
      onClick={()=>scrollToTop()}
      aria-label="Scroll back to top">
        <Image
          aria-hidden
          src="/icons/arrow.svg"
          alt="Arrow icon"
          width={20}
          height={20}
        />
    </button>
  );
}
