"use client"

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const HeaderLinks = [
  {
    title: "jiawendh",
    relativeLink: "/",
    homepage: true
  },
  {
    title: "Projects",
    relativeLink: "/projects"
  },
  {
    title: "Background",
    relativeLink: "/background"
  }
]

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  console.log(pathname);
  
  const onScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);

  return (
    <nav className="flex justify-center row-start-1 flex w-full h-full lg:w-auto mb-6 z-50">
      <ul className={cn("flex gap-5 min-[400px]:gap-8 md:gap-12 items-center fixed",
      "bg-white rounded-3xl md:rounded-full py-4 px-4 min-[350px]:px-8",
      "transition-shadow duration-700 text-sm sm:text-base",
      scrollY > 40 && "shadow-lg")}>
        {HeaderLinks.map((item, index: number) => {
          return (
            <li key={index}>
              <Link
                className={cn("flex items-center gap-2 text-slate-600",
                  item.homepage && "font-[family-name:var(--font-geist-mono)]",
                  pathname === item.relativeLink && "font-medium !text-black",
                  "relative before:absolute before:transition-all before:duration-200",
                  "before:w-[0px] before:h-px before:bottom-0 before:left-1/2",
                  "before:bg-gray-900 hover:before:w-full hover:before:left-0")}
                href={item.relativeLink}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
