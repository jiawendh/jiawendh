import { Project } from "./project_card";
import ProjectGrid from "./project_grid";

const AppsProjects: Project[] = [
  // {
  //   title: "Adventures of a Little Toy",
  //   year: "2023",
  //   prototype_link: "/",
  //   img_src: "/projects/example.jpg",
  //   tags: ["Unity", "3D Modeling"],
  // },
  {
    title: "Event Horizon Engine",
    year: "2023 | 3D Game Engine",
    prototype_link: "https://github.com/Calipao/EventHorizon/blob/main/EventHorizon/Source/Audio/AudioManager.cpp",
    img_src: "/projects/EHE.png",
    tags: ["Custom Game Engine", "C++/C", "FMOD", "3D"],
  },
  {
    title: "VI Engine",
    year: "2022 | 2D Game Engine",
    prototype_link: "https://www.youtube.com/watch?v=fYzXkJa1Xpg&list=PLNN_ZZgMBY1nPzAorjoPbTM7NaW7ogkFk&index=4",
    img_src: "/projects/VI.png",
    tags: ["Project Management", "Custom Game Engine", "C++/C", ".NET Mono"],
  },
  // {
  //   title: "eDocs",
  //   year: "2022",
  //   img_src: "/projects/example.jpg",
  //   tags: ["Web Development"],
  // },
  {
    title: "JustCook",
    year: "2018 | VR Installation",
    prototype_link: "https://youtu.be/I799BrYcXKE",
    img_src: "/projects/JustCook.png",
    tags: ["Unity", "3D Modeling", "VR"],
  },
]

export default function Apps() {
  return (
    <ProjectGrid img_src="/icons/software.svg" title="Installations & Engines" projects={AppsProjects} />
  );
}
