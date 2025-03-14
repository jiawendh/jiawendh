import Timeline from "./timeline";
import { TimelineItemProps } from "./timeline_item";

const HobbyItems: TimelineItemProps[] = [
  {
    current: true,
    year: "2022 - 2025",
    month: "May to current",
    slug: "peer",
    title: "Peer Tutor",
    description: "Singapore Institute of Technology",
    tag: {
      title: "Interests",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        items: [
          "Conduct one-on-one and group tutoring sessions to assist students in brainstorming, structuring, and refining their written pitches and essays",
          "Offer constructive feedback on clarity, coherence, and language use to help students communicate their ideas more effectively",
          "Provide guidance on argument development, thesis development, logical flow, and assignment prompts analysis",
          "Ensure proper citations (APA/MLA) and report formating",
          "Assist students in improving persuasive writing techniques for pitches, ensuring their arguments are compelling and well-supported",
          "Guide students in paraphrasing, summarizing, and refining their writing through grammar, syntax, and vocabulary enhancement",
          "Encourage critical thinking and effective revision strategies so students can refine their work independently in the future"
        ],
      }
    ]
  },
  {
    year: "2022",
    month: "June",
    slug: "tiktok",
    title: "Web Development and Android Application Development",
    description: "TikTok Youth Camp",
    tag: {
      title: "Qualifications",
      color: "bg-pink-500/[.15]"
    },
    subsection: [
      {
        items: [
          "7 days crash course for frontend & client side development",
          "Learn the building blocks of the web & android application ecosystem: HTML, CSS, Java & React",
          "Developed a web application of the game hang man in a group of 5",
        ],
      }
    ]
  },
  {
    year: "2022",
    month: "April",
    slug: "gameengine",
    title: "Game Engine Development",
    description: "Singapore Institute of Technology",
    tag: {
      title: "Interests",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        items: [
          "Took part in a Summer workshop",
          "Learn basics of the Unity Game Engine and the basic architecture of making our own game engine",
        ],
      }
    ],
  },
  {
    year: "2020",
    month: "February",
    slug: "diving",
    title: "Open-Water Diving",
    description: "Malaspacua",
    tag: [
      {
        title: "Interests",
        color: "bg-green-500/[.15]"
      },
      {
        title: "Achievements",
        color: "bg-yellow-500/[.15]"
      },
    ],
    subsection: [
      {
        items: [
          "Took an open-water diving course in Malaspacua",
          "Certified as an autonomous level 2 open water diver",
        ],
      }
    ],
  },
  {
    year: "2015 - 2018",
    month: "April to March",
    slug: "mentoring",
    title: "Mentoring Club",
    description: "Nanyang Polytechnic CCA",
    tag: {
      title: "Interests",
      color: "bg-green-500/[.15]"
    },
    subsection: [
      {
        items: [
          "Weekly visits to Yishun Secondary School to mentor students on their weaker subjects",
          "Help students who signed up for the free mentorship program with their homework or assessments",
          "Organise and schedule events as part of the planning community",
          "Tutor kids at the NKF dialysis centre while their caregiver or family member is undergoing dialysis",
        ],
      }
    ],
  },
  {
    year: "2013",
    title: "EAGLES award",
    description: "Woodlands Ring Secondary School",
    tag: {
      title: "Achievements",
      color: "bg-yellow-500/[.15]"
    },
  }
]

export default function HobbySection() {
  return (
    <Timeline title="Other Achievements & Interests" img_src="/icons/hobby.svg" timeline={HobbyItems} />
  );
}
