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
  return (
    <tr>
      <td className={cn("hidden lg:flex flex-col items-end pr-8 text-sm text-slate-600 cursor-default",
        item.month ? "-mt-4" : "-mt-1.5"
      )}>
        <p>{item.year}</p>
        <p className="whitespace-nowrap">{item.month}</p>
      </td>
      <td className={cn("relative", !props.lastItem && "bg-black")}>
        {!props.lastItem && <div className="w-0.5"></div>}
        {item.current && <div className="h-3 w-3 bg-black rounded-full absolute top-0 left-0 -translate-y-1/9 -translate-x-1/2 ml-[1px] opacity-25 animate-ping"></div>}
        <div className={cn("h-2.5 w-2.5 rounded-full absolute top-0 left-0 -translate-x-1/2 ml-[1px]",
        item.current ? "border-2 border-black bg-white" : "bg-black")}></div>
      </td>
      <td className="w-full pb-14">
        {item.subsection ? (
          <Accordion type="single" collapsible className="pl-8 -mt-8">
            <AccordionItem value={`${item.slug}_details`}>
              <AccordionTrigger className="items-end py-4 hover:cursor-pointer hover:no-underline">
                <div className="text-base">
                  <div className="text-xs text-slate-600 lg:hidden mb-3">
                    <p>{item.year}</p>
                    <p className="whitespace-nowrap">{item.month}</p>
                  </div>
                  <h2 className="font-bold">{item.title}
                    {item.tag && Array.isArray(item.tag) ?
                      item.tag.map((tag: TagProps, index: number) => {
                        return <span key={index} className={cn("text-xs px-1.5 py-0.5 rounded", tag.color, index > 0 ? "ml-2" : "ml-8")}>{tag.title}</span>
                      }) : item.tag && <span className={cn("ml-8 text-xs px-1.5 py-0.5 rounded", item.tag.color)}>{item.tag.title}</span>
                    }
                  </h2>
                  {
                  Array.isArray(item.description) ?
                    item.description.map((desc: string, index: number) => {
                      return <p key={index} className="text-sm lg:text-base text-slate-600">{desc}</p>
                    })
                  : <p className="text-sm lg:text-base text-slate-600">{item.description}</p>
                  }
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm transition-all">
                {
                  item.subsection.map((section: SubsectionProps, index: number) => {
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
                  })
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="-mt-8 pl-8 py-4 text-base cursor-default">
            <h2 className="font-bold">
              {item.title}
              {item.tag && Array.isArray(item.tag) ?
                item.tag.map((tag: TagProps, index: number) => {
                  return <span key={index} className={cn("text-xs px-1.5 py-0.5 rounded", tag.color, index > 0 ? "ml-2" : "ml-8")}>{tag.title}</span>
                }) : item.tag && <span className={cn("ml-8 text-xs px-1.5 py-0.5 rounded", item.tag.color)}>{item.tag.title}</span>
              }
            </h2>
            <p className="text-slate-600">{item.description}</p>
          </div>
        )}
      </td>
    </tr>
  );
}
