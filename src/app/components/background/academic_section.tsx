import Timeline from "./timeline";
import { TimelineItemProps } from "./timeline_item";

const AcademicItems: TimelineItemProps[] = [
  {
    current: true,
    year: "2021-2025",
    month: "September to April",
    slug: "imgd",
    title: "Bachelor of Science with Honours in Computer Science in Interactive Media & Game Development",
    description: "DigiPen Institute of Technology Singapore",
    subsection: [
      {
        title: "Project Spotlight",
        items: [
          "Led and managed a team of 8 (5 programmers, 2 designers, 1 artist) as the product manager",
          "Designed and developed an exploration and storybased desktop game in 24 weeks",
          "Utilised object-oriented programming in our custom built game engine",
          "Core programmer for .NET Mono Project implementation and the debugging and scripting system",
          "Attained A+ grade"
        ],
      }
    ]
  },
  {
    year: "2020",
    month: "January to February",
    slug: "uxdm",
    title: "Specialist Diploma in User Experience Design & Management",
    description: "Nanyang Polytechnic",
  },
  {
    year: "2015-2018",
    month: "April to March",
    slug: "ixd",
    title: "Diploma in Interaction Design",
    description: ["Nanyang Polytechnic",
      "Director's List for Year 2 Semester 1 & 2 (2016/2017)"
    ],
    subsection: [
      {
        title: "Final Year Project",
        items: [
          "Designed and built a Kinect SDK interactive installation for NEA",
          "Showcased four traditional dishes (Chicken Rice, Satay, Hamburger, Prata) from Singapore's four main ethnic groups",
          "Developed with Unity3D in a team of 4 in 12 weeks",
          "Deployed installation in 2 major community events on 26th Aug 2018",
          "Attained A grade",
        ],
      }
    ],
  }
]

export default function AcademicSection() {
  return (
    <Timeline title="Education" img_src="/icons/school.svg" timeline={AcademicItems} />
  );
}
