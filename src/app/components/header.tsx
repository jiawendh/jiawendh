"use client"

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  
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
        <li>
          <a
            className={cn("flex items-center gap-2",
              "font-bold font-[family-name:var(--font-geist-mono)]",
              "relative before:absolute before:transition-all before:duration-200",
              "before:w-[0px] hover:before:w-full before:h-px before:bottom-0 before:left-1/2 hover:before:left-0",
              "before:bg-gray-900 dark:before:bg-gray-200")}
            href="./"
          >
            jiawendh
          </a>
        </li>
        <li>
          <a
            className={cn("flex items-center gap-2",
              "relative before:absolute before:transition-all before:duration-200",
              "before:w-[0px] hover:before:w-full before:h-px before:bottom-0 before:left-1/2 hover:before:left-0",
              "before:bg-gray-900 dark:before:bg-gray-200")}
            href="./projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={cn("flex items-center gap-2",
              "relative before:absolute before:transition-all before:duration-200",
              "before:w-[0px] hover:before:w-full before:h-px before:bottom-0 before:left-1/2 hover:before:left-0",
              "before:bg-gray-900 dark:before:bg-gray-200")}
            href="./background"
          >
            Background
          </a>
        </li>
      </ul>
    </nav>
  );
}
