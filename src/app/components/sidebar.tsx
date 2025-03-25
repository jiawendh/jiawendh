import Image from "next/image";
import { cn } from "@/lib/utils";

export interface tag {
  title: string;
  color: string;
  featured: boolean;
}

const SkillsTags: tag[] = [
  {
    title: "React",
    color: "bg-black/[.15]",
    featured: true
  },
  {
    title: "Next.js",
    color: "bg-red-600/[.15]",
    featured: true
  },
  {
    title: "TypeScript",
    color: "bg-orange-600/[.15]",
    featured: true
  },
  {
    title: "Tailwind CSS",
    color: "bg-amber-500/[.15]",
    featured: true
  },
  {
    title: "CSS/SASS",
    color: "bg-yellow-800/[.15]",
    featured: true
  },
  {
    title: "JavaScript",
    color: "bg-lime-500/[.15]",
    featured: true
  },
  {
    title: "Cloudflare",
    color: "bg-green-400/[.15]",
    featured: true
  },
  {
    title: "Unity",
    color: "bg-green-700/[.15]",
    featured: false
  },
  {
    title: "SQL",
    color: "bg-cyan-400/[.15]",
    featured: true
  },
  {
    title: "C++/C",
    color: "bg-indigo-500/[.15]",
    featured: true
  },
  {
    title: "Python",
    color: "bg-sky-600/[.15]",
    featured: false
  },
  {
    title: "C#",
    color: "bg-fuchsia-700/[.15]",
    featured: false
  },
  {
    title: "Project Management",
    color: "bg-pink-400/[.15]",
    featured: true
  },
  {
    title: "UX/UI Design",
    color: "bg-rose-900/[.15]",
    featured: false
  },
  {
    title: "Web Development",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "Game Design & Development",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "Custom Game Engine",
    color: "bg-blue-500/[.15]",
    featured: false
  },
  {
    title: "VR",
    color: "bg-blue-500/[.15]",
    featured: false
  },
  {
    title: "Illustrator",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "3D Modeling",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: ".NET Mono",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "FMOD",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "Multiplayer",
    color: "bg-black/[.15]",
    featured: false
  },
  {
    title: "CMS",
    color: "bg-blue-500/[.15]",
    featured: false
  },
  {
    title: "Ecommerce",
    color: "bg-rose-900/[.15]",
    featured: false
  },
  {
    title: "3D",
    color: "bg-blue-500/[.15]",
    featured: false
  },
]

export function displayTag(tag: tag) {
  return (
    <code className={`${tag.color} px-1.5 py-0.5 rounded font-semibold`}>
      {tag.title}
    </code>
  );
}

export function getTagColor(tag: string) {
  let tagItem;
  SkillsTags.forEach((t: tag) => {
    if(t.title === tag) {
      tagItem = displayTag({ title: t.title, color: t.color, featured: t.featured});
    }
  })
  return tagItem;
}

export default function Sidebar(props: { className?: string }) {
  return (
    <section className={`${props.className} flex flex-col items-end font-[family-name:var(--font-geist-mono)]`}>
      <div className="w-full xl:w-auto hover:lg:cursor-default">
        <div className="py-2.5 flex justify-start gap-2 hover:cursor-default hover:no-underline">
          <Image
            aria-hidden
            src="/icons/skills.svg"
            alt="Skills icon"
            width={20}
            height={20}
          />
          <p className="text-base">Skills & Expertise</p>
        </div>
        <div className="text-sm">
          <ol className="xl:pt-3 flex flex-wrap xl:flex-col gap-1.5 items-start">
            {
              SkillsTags.map((tag: tag, index: number) => {
                if (tag.featured === true) return <li key={index} className="hover:scale-110 transition-transform">{displayTag(tag)}</li>;
              })
            }
          </ol>
          <div className="mt-4 hidden sm:flex gap-1">
            <a
              className={cn("rounded-full border border-solid border-black/[.08]",
                "flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs",
                "transition-colors hover:bg-[#f2f2f2] hover:border-transparent")}
              href="/ChenJiaWen_Resume_2025.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a
              className={cn("rounded-full border border-solid border-black/[.08]",
                "flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs",
                "transition-colors hover:bg-[#f2f2f2] hover:border-transparent")}
              href="https://www.linkedin.com/in/jiawendh/"
              target="_blank"
              rel="noopener noreferrer"
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
      </div>
    </section>
  );
}
