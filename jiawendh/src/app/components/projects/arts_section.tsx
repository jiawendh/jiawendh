import { Project } from "./project_card";
import ProjectGrid from "./project_grid";

const ArtProjects: Project[] = [
  {
    title: "Secret of Mana",
    year: "2024",
    img_src: "/projects/SecretOfMana.jpg",
    tags: ["UX/UI Design"],
  },
  {
    title: "Old Master Q",
    year: "2020",
    img_src: "/projects/OldMasterQ.jpg",
    tags: ["Illustrator"],
  },
  {
    title: "Infographic",
    year: "2017",
    img_src: "/projects/Openbanking.png",
    tags: ["Illustrator"],
  },
  {
    title: "Isometric Icons",
    year: "2017",
    img_src: "/projects/IsometricIcons.png",
    tags: ["Illustrator"],
  },
  {
    title: "Icons - Beer",
    year: "2017",
    img_src: "/projects/Icons_Beer.png",
    tags: ["Illustrator"],
  },
  {
    title: "Icons - Cocktail",
    year: "2017",
    img_src: "/projects/Icons_Cocktail.png",
    tags: ["Illustrator"],
  },
]

export default function Arts() {
  return (
    <ProjectGrid img_src="/icons/art.svg" title="Arts & Design" projects={ArtProjects} />
  );
}
