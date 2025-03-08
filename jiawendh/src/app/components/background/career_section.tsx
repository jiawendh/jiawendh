import Timeline from "./timeline";
import { TimelineItemProps } from "./timeline_item";

const CareerItems: TimelineItemProps[] = [
  {
    current: true,
    year: "2024 - 2025",
    month: "May to current",
    slug: "jupiter",
    title: "SolanaFM (Acquired by Jupiter Aggregator/Exchange)",
    description: "University Final Year Internship | Software Engineer",
    tag: {
      title: "Internship",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Design and develop maintainable and reliable Web3 applications using Next.js",
          "Delivers polished site interface with improved SEO rankings and social media visibility",
          "Design and implement dynamic D1 database structure for efficient storage and retrieval of data",
          "Develop automated pre-deployment unit tests for Cloudflare Workers to ensure API reliability",
          "Implement data compression and parsing for data integrity, and middleware for protected endpoints",
          "Create detailed API documentation with Swagger UI and OpenAPI for enhanced developer accessibility",
          "Optimise components for reusability and develop tools to streamline update tracking within the team",
          "Work with UI/UX designers on tight deadlines for iterative changes and timely delivery"
        ],
      }
    ]
  },
  {
    current: true,
    year: "Since 2016",
    slug: "freelance",
    title: "Freelance",
    description: "Web & Game Developer",
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Design and develop responsive websites for clients",
          "Develop desktop games for clients",
          "Develop web applications for clients",
        ],
      },
      {
        title: "Previous Clients",
        items: [
          "Wizlearn Technologies Pte Ltd",
          "Jalan Journey Studio",
          "Singapore Institute of Technology",
          "Independent Game Developers",
          "Families & Friends",
          "And others!"
        ]
      }
    ]
  },
  {
    year: "2022",
    month: "May to August",
    slug: "empirecode",
    title: "Empire Code",
    description: "Programming Tutor",
    tag: {
      title: "Part Time",
      color: "bg-yellow-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Teach children aged 3-15 years old programming languages or concepts",
          "Introduce young kids to programming concepts with Scratch and MineCraft: Education Edition",
          "Guide students in building their own websites using HTML5, CSS and JavaScript",
          "Tutor students on the basics of Python and its libraries",
          "Create 3D models with Blender",
        ],
      }
    ],
  },
  {
    year: "2022",
    month: "April to August",
    slug: "immersification",
    title: "Centre for Immersification",
    description: "University First Year Summer Internship",
    tag: {
      title: "Internship",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Work with a Virtual Reality Commuting Simulator (VRCS) to investigate the viability of navigation that includes first and last mile (FMLM) pathways",
          "Formulate user stories and tasks required during sprint planning",
          "Collaboratively track sprint issues and progress within the team",
          "Propose and devise a timeline for different issues during the sprint",
          "Identify and plot points to develop pathways for the VR system",
        ],
      }
    ],
  },
  {
    year: "2021",
    month: "May to August",
    slug: "flexsolver",
    title: "Flex-Solver Pte Ltd",
    description: "Software Engineer",
    tag: {
      title: "Full Time",
      color: "bg-pink-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Develop web applications heavily reliant on Angular 12",
          "Collaborate with back-end developers and UAT testers to ensure application's quality",
          "Uses GitHub to collaboratively develop code and track changes in a large team",
        ],
      }
    ],
  },
  {
    year: "2019 - 2021",
    month: "July to April",
    slug: "anc",
    title: "A&C Atelier Pte Ltd",
    description: "UX Developer",
    tag: {
      title: "Full Time",
      color: "bg-pink-500/[.15]"
    },
    subsection: [
      {
        title: "Achievements",
        items: [
          "Average Google PageSpeed of >65-80 for mobile and >90 for desktop",
          "Pixel perfect quality for front-end development",
          "Passing the penetration test in 2 tries"
        ],
      },
      {
        title: "Role & Tasks",
        items: [
          "Develop with mobile-first approach",
          "Cross-browser testing with different platforms",
          "Create smooth page transitions with CSS animations and transitions",
          "Build responsive e-commerce sites with WordPress CMS and Drupal 8",
          "Create detailed CMS documentation for clients",
        ],
      }
    ]
  },
  {
    year: "2018 - 2019",
    month: "April to May",
    slug: "wizlearn",
    title: "Wizlearn Technologies Pte Ltd",
    description: "Interactive Developer",
    tag: {
      title: "Full Time",
      color: "bg-pink-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Build interactive and dynamic components for e-learning and training solutions",
        ],
      }
    ]
  },
  {
    year: "2017",
    month: "September to November",
    slug: "accenture",
    title: "Accenture Pte Ltd",
    description: "Polytechnic Final Year Internship | Design Intern",
    tag: {
      title: "Internship",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        title: "Role & Tasks",
        items: [
          "Design and develop wireframes and UI for product pages",
          "Design logos, icons, infographics and onboarding pages",
          "Design 3D wireframes for VR web application",
          "Works with SCRUM methodology",
        ],
      }
    ]
  },
]

export default function CareerSection() {
  return (
    <Timeline title="Career History" img_src="/icons/work.svg" timeline={CareerItems} tag="Available first Monday of May 2025 onwards!" />
  );
}
