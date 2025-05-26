import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, category, imageSrc, href }) => {
  return (
    <Link href={href} className="block rounded-lg">
      <div className="overflow-hidden rounded-lg mb-3 md:mb-4 lg:mb-6">
        <Image
          src={imageSrc}
          width={592}
          height={500}
          alt={`${title} Project`}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="px-1">
        <h4 className="text-lg md:text-xl font-medium leading-[140%] tracking-[-1%]">
          {title}
        </h4>
        <p className="text-lg md:text-xl font-normal leading-[140%] tracking-[-1%]">
          {category}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
