import Image from "next/image";
import { getTagColor } from "../sidebar";
import { cn } from "@/lib/utils";

export interface Project {
  prototype_link?: string;
  github_link?: string;
  img_src: string;
  title: string;
  year: string;
  tags: string[];
}

export default function ProjectCard(props: { proj: Project, className?: string }) {
  const proj = props.proj;

  function CardDetails() {
    return(
      <div className="py-3 px-5 flex flex-col gap-2">
        <div>
          <h2 className="font-bold text-base">{proj.title}</h2>
          <p className="text-slate-600 text-xs">{proj.year}</p>
        </div>
        <ul className="text-xs flex flex-wrap gap-1">
          {proj.tags.map((tag: string, index: number) => {
              return <li key={index}>{getTagColor(tag)}</li>
            })
          }
        </ul>
      </div>
    )
  }

  if (proj.prototype_link) return (
    <a
      className={cn(props.className, `drop-shadow-sm bg-white rounded-lg hover:scale-105 hover:cursor-pointer transition-transform group animate-loadin`)}
      href={proj.prototype_link}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <div className="relative">
        <Image
          className="!h-auto !static rounded-t-lg"
          src={proj.img_src}
          alt={`${proj.title} preview`}
          fill={true}
          priority
        />
        <div className={cn("flex items-center justify-center",
        "underline underline-offset-4 text-white",
        "bg-black rounded-t-lg top-0 left-0 right-0 bottom-0 absolute",
        "group-hover:opacity-75 opacity-0 transition-opacity")}>
          View
        </div>
      </div>
      {CardDetails()}
    </a>
  );

  return (
    <div className={cn(props.className, `drop-shadow-sm bg-white rounded-lg hover:scale-105 transition-transform cursor-default animate-loadin`)}>
      <Image
        className="!h-auto !static rounded-t-lg"
        src={proj.img_src}
        alt={`${proj.title} preview`}
        fill={true}
        priority
      />
      {CardDetails()}
    </div>
  );
}
