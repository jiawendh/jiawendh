import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";

export default function SubPage(props: { children: ReactNode }) {
  return (
    <div className={cn("grid grid-rows-[20px_1fr_20px]",
      "items-center justify-items-center min-h-screen",
      "p-8 pt-14 pb-20 md:py-20 gap-3 xl:gap-16 lg:p-20",
      "font-[family-name:var(--font-geist-sans)]")}>
      <Header />
      <main className="w-full flex flex-col flex-col-reverse xl:grid xl:grid-cols-5 gap-4 row-start-2 relative pt-10 md:pt-5">
        <section className="hidden 2xl:block"></section>
        <section className="grow flex flex-col items-stretch col-span-4 2xl:col-span-3 animate-fadein">
          <div className="flex flex-col gap-18 text-left font-[family-name:var(--font-geist-mono)]">
            {props.children}
          </div>
        </section>
        <section className="xl:relative xl:flex xl:justify-end">
          <Sidebar className="xl:fixed pb-6 hidden lg:flex" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
