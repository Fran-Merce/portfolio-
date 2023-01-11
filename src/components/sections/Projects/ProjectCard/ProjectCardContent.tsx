import { ButtonLink } from "@/components/UI/ButtonLink";
import { ProjectCardInterface } from "./models/cardProject";

export const ProjectCardContent = ({
  title,
  link,
  github,
  desc,
  techs,
}: ProjectCardInterface) => {
  return (
    <div className="flex flex-col justify-center max-w-[450px] items-center lg:items-start">
      <h2 className="text-4xl text-center  md:text-left text-white">{title}</h2>
      <ul className="flex justify-center flex-wrap gap-1 text-purple-600 my-2 lg:justify-start">
        {techs.map((tech, index) => (
          <li key={tech}>
            {""}
            {tech.trim()}
            {techs.length - 1 !== index && "|"}
          </li>
        ))}
      </ul>
      <p className="text-stone-300 text-center lg:text-left">{desc}</p>
      <div className="my-5 flex gap-6 text-white">
        {link ? (
          <ButtonLink
            target="_blank"
            href={link}
            type="btn-primary"
            text="Deploy"
            customClass="text-purple-600"
          />
        ) : (
          <ButtonLink
            disabled={true}
            type="btn-primary"
            customClass="text-purple-600"
            text="No Deploy"
          />
        )}
        <ButtonLink
          target="_blank"
          href={github}
          type="btn-secondary"
          text="< Code />"
          customClass="text-purple-600"
        />
      </div>
    </div>
  );
};
