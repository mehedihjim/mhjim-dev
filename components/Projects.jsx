import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./ui/ProjectCard";

const demoProjects = [
  {
    title: "Saadhu",
    category: "E-Commerce",
    imageSrc: "/Saadhu-phone.png",
    href: "/projects/saadhu",
  },
  {
    title: "Saadhu",
    category: "E-Commerce",
    imageSrc: "/Saadhu-phone.png",
    href: "/projects/saadhu",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-16 lg:pb-[75px]">
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
          <div>
            <h2 className="text-5xl font-medium leading-[120%] tracking-[-1%] pb-[10px] md:pb-[18px] lg:pb-[40px]">
              Projects~
            </h2>
            <p className="w-full md:w-[492px] text-xl leading-[140%] tracking-[-1%]">
              Building your dream brand starts with thoughtful design and
              user-friendly solutions. As a dev, I’m here to help turn your
              vision into a seamless digital reality.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex gap-1 items-end justify-end text-xl font-medium leading-[120%] tracking-[-1%] hover:border-b border-black dark:border-white transition-all duration-100"
          >
            More <FaArrowRightLong />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {demoProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
