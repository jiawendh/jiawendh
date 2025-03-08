import ProjectGrid from "./project_grid";
import { Project } from "./project_card";

const GameProjects: Project[] = [
  {
    title: "Bon Voyage",
    year: "2023 | Storybased",
    prototype_link: "https://www.youtube.com/playlist?list=PLNN_ZZgMBY1nPzAorjoPbTM7NaW7ogkFk",
    img_src: "/projects/BonVoyage.png",
    tags: ["Project Management", "Custom Game Engine", "Game Design & Development", "C++/C", "C#"],
  },
  {
    title: "Wiscape",
    year: "2024 | 3D Multiplayer",
    prototype_link: "https://www.youtube.com/watch?v=HMsVZTgGvqE",
    img_src: "/projects/Wiscape.jpg",
    tags: ["Custom Game Engine", "Multiplayer", "C++/C", "C#", "3D", "FMOD"],
  },
  {
    title: "EZ AI",
    year: "2022 | Endless Runner",
    prototype_link: "https://kewyj.itch.io/ez-ai",
    img_src: "/projects/EZAI.png",
    tags: ["Game Design & Development", "Unity", "C#"],
  },
  {
    title: "Roll of the Chamber",
    year: "2022 | First Person",
    prototype_link: "https://kewyj.itch.io/roll-of-the-chamber",
    img_src: "/projects/ROTC.png",
    tags: ["Game Design & Development", "Unity", "C#", "3D"],
  },
  {
    title: "Squirrel: Not At Home",
    year: "2022 | Platformer",
    prototype_link: "https://www.youtube.com/playlist?list=PLNN_ZZgMBY1mdV7-hIFmGhxBI7GVNGnJ2",
    img_src: "/projects/Squirrel_NotAtHome.png",
    tags: ["Project Management", "UX/UI Design", "C++/C", "Game Design & Development"],
  },
  {
    title: "Shepherd's Husbandry",
    year: "2021 | Puzzle",
    img_src: "/projects/ShepherdsHusbandry.jpg",
    tags: ["Project Management", "UX/UI Design", "C++/C", "Game Design & Development"],
  },
  {
    title: "The Last December",
    year: "2018 | Visual Novel",
    img_src: "/projects/TLD.jpg",
    tags: ["Project Management", "UX/UI Design", "Python", "Game Design & Development"],
  },
]

export default function Games() {
  return (
    <ProjectGrid img_src="/icons/games.svg" title="Games" projects={GameProjects} />
  );
}
