import { cn } from "@/lib/utils";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

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
              <div className="text-sm flex flex-col gap-1 min-[468px]:flex-row min-[468px]:gap-2">
                <a
                  className={cn("group relative before:transition-all before:duration-200 before:absolute",
                    "before:w-[0px] before:h-px before:-bottom-0.5 before:left-1/2",
                    "before:bg-gray-900 hover:before:w-full hover:before:left-0")}
                  href="mailto:jiawendh@gmail.com"
                  rel="noopener noreferrer"
                >
                  <span
                    className={cn("transition-opacity duration-600",
                    "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                    "bg-black text-white rounded-full absolute bottom-full mb-1 px-1.5 py-0.5 text-xs")}
                  >Let{"'"}s get in touch!</span>
                  jiawendh@gmail.com
                </a>
                <p className="hidden min-[468px]:inline-block">
                  |
                </p>
                <p>
                  <a className={cn("relative before:transition-all before:duration-200 before:absolute",
                    "before:w-[0px] before:h-px before:-bottom-0.5 before:left-1/2",
                    "before:bg-gray-900 hover:before:w-full hover:before:left-0")}
                    href="tel:+6580904336"
                    rel="noopener noreferrer">+65 8090 4336</a>
                </p>
                <p className="hidden min-[468px]:inline-block">
                  |
                </p>
                <p className="group pt-3 pb-1 min-[468px]:py-0">
                  <a
                    href="https://www.linkedin.com/in/jiawendh/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className={cn("underline underline-offset-4 transition-color",
                    "decoration-gray-500 group-hover:decoration-gray-900")}>LinkedIn</span>
                    {"  "}
                    <span className="group-hover:translate-x-2 transition-transform hidden min-[468px]:inline-block">→</span>
                  </a>
                </p>
              </div>
              <p
                className={cn("text-sm font-semibold inline-block self-start",
                "bg-gray-500/[.15] px-2.5 py-0.5 rounded hover:cursor-default")}
              >Available first Monday of May 2025 onwards!</p>
            </div>

            <Sidebar className="pb-2.5 max-w-xl xl:hidden" />

            {/* CTAs */}
            <div className="flex gap-4 items-start md:items-center flex-col sm:flex-row">
              <a
                className={cn("rounded-full border border-solid border-transparent bg-foreground text-background",
                  "flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
                  "transition-colors hover:bg-[#383838] text-sm sm:text-base")}
                href="./projects"
              >
                View Projects
              </a>
              <a
                className={cn("rounded-full border border-solid border-black/[.08]",
                  "flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5",
                  "transition-colors hover:bg-[#f2f2f2] hover:border-transparent",
                  "text-sm sm:text-base")}
                href="./background"
              >
                Background
              </a>
              <a
                className={cn("rounded-full border border-solid border-black/[.08]",
                  "flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5",
                  "transition-colors hover:bg-[#f2f2f2] hover:border-transparent",
                  "text-sm sm:text-base xl:hidden")}
                href="/ChenJiaWen_Resume_2025.pdf"
                target="_blank"
              >
                Resume
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
