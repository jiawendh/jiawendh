import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={cn("flex flex-col md:flex-row gap-3 md:gap-10",
      "fixed bottom-4 md:bottom-6 right-4 md:right-auto",
      "bg-white py-4 px-8 rounded-3xl md:rounded-full drop-shadow-lg text-sm md:text-base")}>
      <a
        className="animate-pulse font-semibold flex items-center gap-2 group"
        href="mailto:jiawendh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/icons/email.svg"
          alt="Email icon"
          width={16}
          height={16}
          className="group-hover:animate-wiggle"
        />
        <span
          className={cn("relative before:absolute before:transition-all before:duration-200",
          "before:w-[0px] before:h-px before:bottom-0 before:left-1/2",
          "before:bg-gray-900 group-hover:before:w-full group-hover:before:left-0")}
        >Get in touch!</span>
      </a>
    </footer>
  );
}
