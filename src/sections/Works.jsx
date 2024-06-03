/* eslint-disable react/no-children-prop */
import { Code } from "@chakra-ui/react";
import HoverCard from "../components/HoverCard";
import work1 from "../assets/works/work1.png";
import work2 from "../assets/works/work2.png";
import work3 from "../assets/works/work3.png";
import work4 from "../assets/works/work4.png";
import work5 from "../assets/works/work5.jpg";
import work6 from "../assets/works/work6.png";
import work7 from "../assets/works/work7.png";
import work8 from "../assets/works/work8.png";

const Works = () => {
  const worksData = [
    {
      image: work1,
      title: "e-Request System CITC",
      url: "https://github.com/lagriamj/eRequest-Capstone",
      technologies: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    },
    {
      image: work7,
      title: "iVisit Camiguin - Backend",
      url: "https://pos.poolreno.com/",
      technologies: ["VueJs", "Laravel", "PostgreSQL"],
    },
    {
      image: work3,
      title: "Solchat - UI",
      url: "https://github.com/lagriamj/solchat",
      technologies: ["React", "Tailwind Css"],
    },
    {
      image: work4,
      title: "DictioNorlax",
      url: "https://github.com/lagriamj/DictioNorlax",
      technologies: ["Laravel"],
    },
    {
      image: work5,
      title: "Dtracker",
      url: "https://github.com/lagriamj/DTracker",
      technologies: ["Flutter", "Firebase"],
    },
    {
      image: work6,
      title: "Sales and Inventory System",
      url: "",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      image: work2,
      title: "aniMark",
      url: "https://github.com/lagriamj/aniMark",
      technologies: ["React", "Tailwind Css", "Jikan API"],
    },
    {
      image: work8,
      title: "askMark",
      url: "https://github.com/lagriamj/chat-bot",
      technologies: ["React", "Tailwind Css", "Gemini API"],
    },

    // ... other work objects
  ];

  return (
    <div className="w-full h-auto bg-[#28292d] flex flex-col items-center pb-10">
      <Code
        children="My Works"
        className="my-10"
        style={{ fontSize: "2rem" }}
      />
      <div className="h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
        {worksData.map((work) => (
          <HoverCard
            key={work.title} // Use a unique key for each work item
            image={work.image}
            title={work.title}
            url={work.url}
            technologies={work.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
