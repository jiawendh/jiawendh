import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  title: string;
  description: string[] | string;
  slug?: string;
  year: string;
  month?: string;
  current?: boolean;
  tag?: TagProps | TagProps[];
  subsection?: SubsectionProps[];
}

interface SubsectionProps {
  title?: string;
  items: string[];
}

interface TagProps {
  title: string;
  color: string;
}

export default function TimelineItem(props: { item: TimelineItemProps, lastItem: boolean }) {
  const item = props.item;

  function getHeader() {
    return (
      <div className="text-base flex flex-col gap-3">
        <div className="text-xs text-slate-600 mt-3.5 lg:hidden">
          <p>{item.year}</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-1 xl:gap-0.5">
          <div className={cn("font-bold flex items-start flex-wrap",
            "flex-col-reverse gap-1.5 md:flex-row md:gap-8"
          )}>
            <h2 className="text-sm md:text-base">{item.title}</h2>
            {item.tag && 
              <div className="flex gap-3">
                {Array.isArray(item.tag) ?
                  item.tag.map((tag: TagProps, index: number) => {
                    return getTag(tag.title, tag.color, index);
                  }) : getTag(item.tag.title, item.tag.color)
                }
              </div>
            }
          </div>
          {Array.isArray(item.description) ?
            item.description.map((desc: string, index: number) => {
              return getDesc(desc, index);
            })
          : getDesc(item.description)}
        </div>
      </div>
    );
  }

  function getTag(title: string, color: string, index?: number) {
    return <span key={index} className={cn("text-[11px] md:text-xs px-1.5 py-0.5 rounded mb-1 -ml-1", color)}>{title}</span>;
  }

  function getDesc(desc: string, index?: number) {
    return <p key={index} className="text-xs sm:text-sm lg:text-base text-slate-600">{desc}</p>
  }

  return (
    <tr>
      <td className="hidden lg:flex flex-col items-end pr-8 text-xs text-slate-600 cursor-default -mt-1">
        <p className="text-center whitespace-nowrap">{item.year}</p>
      </td>
      <td className={cn("relative", !props.lastItem && "bg-black")}>
        {!props.lastItem && <div className="w-0.5"></div>}
        {item.current && <div className="h-3 w-3 bg-black rounded-full absolute top-0 left-0 -translate-y-1/9 -translate-x-1/2 ml-[1px] opacity-25 animate-ping"></div>}
        <div className={cn("h-2.5 w-2.5 rounded-full absolute top-0 left-0 -translate-x-1/2 ml-[1px]",
        item.current ? "border-2 border-black bg-white" : "bg-black")}></div>
      </td>
      <td className={cn("w-full", !props.lastItem && "pb-8")}>
        {item.subsection ? (
          <Accordion type="single" collapsible className="pl-8 -mt-8 lg:-mt-6">
            <AccordionItem value={`${item.slug}_details`}>
              <AccordionTrigger className="items-end py-4 hover:cursor-pointer hover:no-underline">
                {getHeader()}
              </AccordionTrigger>
              <AccordionContent className="text-sm transition-all">
                {item.subsection.map((section: SubsectionProps, index: number) => {
                  return (
                    <div key={index} className={cn(index > 0 && "mt-6", "cursor-default")}>
                      {section.title && <p>{section.title}</p>}
                      <ul className={cn("list-disc pl-5 flex flex-col gap-2", section.title && "mt-3")}>
                        {section.items.map((task: string, index: number) => {
                          return <li key={index}>{task}</li>;
                        })}
                      </ul>
                    </div>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="-mt-8 pl-8 py-4 text-base cursor-default">
            {getHeader()}
          </div>
        )}
      </td>
    </tr>
  );
}
