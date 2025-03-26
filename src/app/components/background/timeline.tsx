import Image from "next/image";
import TimelineItem, { TimelineItemProps } from "./timeline_item";

interface Props {
  title: string;
  img_src: string;
  timeline: TimelineItemProps[];
  tag?: boolean;
}

export default function Timeline(props: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 sm:gap-5 items-center cursor-default">
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

      <table className="items-start animate-loadin lg:mt-3">
        <tbody>
          {props.timeline.map((item: TimelineItemProps, index: number) => {
            return <TimelineItem key={index} item={item} lastItem={index == props.timeline.length - 1} />
          })}
        </tbody>
      </table>
    </div>
  );
}
