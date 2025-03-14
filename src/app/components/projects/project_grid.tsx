"use client"

import Image from "next/image";
import ProjectCard, { Project } from "./project_card";
import { ReactElement, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  img_src: string;
  projects: Project[];
}

export default function ProjectGrid(props: Props) {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [projects, setProjects] = useState<ReactElement[]>([]);

  useEffect(() => {
    if(loadMore) {
      setProjects(props.projects.map((proj: Project, index: number) => {
        return <ProjectCard key={index} proj={proj} />
      }));
    } else {
      setProjects(props.projects.map((proj: Project, index: number) => {
        if(index < 3) {
          return <ProjectCard key={index} proj={proj} />
        }
        return <ProjectCard key={index} proj={proj} className="hidden sm:block" />;
      }));
    }
  }, [loadMore, props.projects]);

  return (
    <div className="flex flex-col gap-8">
      {projects.length != 0 && (
        <div className="flex gap-3 sm:gap-5 items-center">
          <Image
            aria-hidden
            src={props.img_src}
            alt={`${props.title} icon`}
            width={30}
            height={30}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <p className="text-xl sm:text-2xl font-bold md:text-3xl">{props.title}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects?.map((proj: ReactElement) => {
          return proj;
        })}
        <a
          className={cn((loadMore || props.projects.length <= 3) && "hidden", "text-sm text-center pt-8 underline underline-offset-4 sm:hidden cursor-pointer")}
          onClick={() => setLoadMore(true)}
        >Load More</a>
      </div>
    </div>
  )
}
