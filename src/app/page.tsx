import { cn } from "@/lib/utils";
import Image from "next/image";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Availability from "./components/availability";

export default function Home() {
  return (
    <div className={cn("grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16",
      "px-8 pb-8 sm:px-20 lg:px-20 font-[family-name:var(--font-geist-sans)]")}>
      <main className="w-full flex flex-col xl:grid xl:grid-cols-5 gap-4 row-start-2">
        <section></section>

        {/* Main Section */}
        <section className="grow flex flex-col items-center col-span-3 animate-fadein">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-left font-[family-name:var(--font-geist-mono)]">
              <h1 className="text-5xl hover:cursor-default">jiawendh</h1>
              <div className="text-base hover:cursor-default">
                <h2>Chen Jia Wen</h2>
                <h3>Software Engineer</h3>
                <p>Singapore</p>
              </div>
              {/* <div className="text-sm flex flex-col gap-1 min-[468px]:flex-row min-[468px]:gap-2">
                <a
                  className={cn("group relative before:transition-all before:duration-200 before:absolute",
                    "")}
                  href="mailto:jiawendh@gmail.com"
                  rel="noopener noreferrer"
                >
                  <span
                    className={cn("transition-opacity duration-600",
                    "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                    "bg-black text-white rounded-full absolute bottom-full mb-1 px-1.5 py-0.5 text-xs")}
                  >Let{"'"}s get in touch!</span>
                  jiawendh@gmail.com
                  {"  "}
                  <span className="group-hover:translate-x-2 transition-transform hidden min-[468px]:inline-block">→</span>
                </a>
              </div> */}
              <Availability className="hidden xl:block" />
            </div>

            <Sidebar className="pb-2.5 max-w-xl xl:hidden" />

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-4 sm:flex sm:items-start md:items-center">
              <a
                className={cn("rounded-full border border-solid border-transparent bg-foreground text-background",
                  "flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
                  "transition-colors hover:bg-[#383838] text-sm sm:text-base col-span-2 min-[350px]:col-span-1")}
                href="./projects"
              >
                View Projects
              </a>
              <a
                className={cn("rounded-full border border-solid border-black/[.08]",
                  "flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5",
                  "transition-colors hover:bg-[#f2f2f2] hover:border-transparent",
                  "text-sm sm:text-base col-span-2 min-[350px]:col-span-1")}
                href="./background"
              >
                Background
              </a>
              <a
                className={cn("rounded-full border border-solid border-black/[.08]",
                  "flex items-center justify-center h-10 px-4 text-sm sm:hidden",
                  "transition-colors hover:bg-[#f2f2f2] hover:border-transparent")}
                href="/ChenJiaWen_Resume_2025.pdf"
                target="_blank"
              >
                Resume
              </a>
              <a
                className={cn("rounded-full border border-solid border-black/[.08]",
                  "flex items-center justify-center h-10 px-4 text-sm sm:hidden",
                  "transition-colors hover:bg-[#f2f2f2] hover:border-transparent")}
                href="/ChenJiaWen_Resume_2025.pdf"
                target="_blank"
              >
                <Image
                  aria-hidden
                  src="/icons/linkedin.svg"
                  alt="LinkedIn icon"
                  width={10}
                  height={10}
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </section>

        <Sidebar className="hidden xl:block" />
      </main>
      <Footer />
    </div>
  );
}
