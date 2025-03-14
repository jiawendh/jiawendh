import { cn } from "@/lib/utils";
import Image from "next/image";
import TimelineItem, { TimelineItemProps } from "./timeline_item";

interface Props {
  title: string;
  img_src: string;
  timeline: TimelineItemProps[];
  tag?: string;
}

export default function Timeline(props: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-5 flex-wrap justify-center items-start flex-col lg:flex-row lg:items-center lg:justify-start cursor-default">
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
        {props.tag && <p className={cn("px-2.5 py-0.5 lg:ml-5 text-sm font-semibold",
        "bg-gray-500/[.15] dark:bg-white/[.06] rounded inline-block lg:self-end")}>{props.tag}</p>}
      </div>

      <table className="mt-4 items-start animate-loadin">
        <tbody>
          {props.timeline.map((item: TimelineItemProps, index: number) => {
            return <TimelineItem key={index} item={item} lastItem={index == props.timeline.length - 1} />
          })}
        </tbody>
      </table>
    </div>
  );
}
