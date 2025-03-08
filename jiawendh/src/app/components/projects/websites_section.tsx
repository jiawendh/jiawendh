import { Project } from "./project_card";
import ProjectGrid from "./project_grid";

const WebsitesProjects: Project[] = [
  {
    title: "Jupiter Mobile",
    year: "2024",
    prototype_link: "https://jup.ag/mobile",
    img_src: "/projects/JupMobile.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Jupiter Metropolis",
    year: "2024",
    prototype_link: "https://station.jup.ag/metropolis",
    img_src: "/projects/JupMetropolis.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Jupiter LFG",
    year: "2024",
    prototype_link: "https://lfg.jup.ag/",
    img_src: "/projects/JupLFG.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Solana Projects Managment Tool",
    year: "2024",
    img_src: "/projects/Ecosystem.png",
    tags: ["Cloudflare", "SQL", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "SolanaFM Internal Platform",
    year: "2024",
    img_src: "/projects/Lighthouse.png",
    tags: ["Cloudflare", "SQL", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Live Chatroom",
    year: "2024",
    img_src: "/projects/FilterNotFound.png",
    tags: ["React", "CSS/SASS", "JavaScript", "UX/UI Design"]
  },
  {
    title: "Jalan Journey",
    year: "2024",
    prototype_link: "https://www.jalanjourney.com/",
    img_src: "/projects/JalanJourney.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Morrow",
    year: "2021",
    prototype_link: "https://morrow.sg/",
    img_src: "/projects/Morrow.png",
    tags: ["Web Development", "CMS", "Ecommerce"],
  },
  {
    title: "Kimzua",
    year: "2020",
    prototype_link: "https://kimzua.com.sg/",
    img_src: "/projects/Kimzua.png",
    tags: ["Web Development", "CMS", "Ecommerce"],
  },
]

export default function Websites() {
  return (
    <ProjectGrid img_src="/icons/website.svg" title="Websites" projects={WebsitesProjects} />
  );
}
