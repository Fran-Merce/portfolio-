import ProjectCard from "../ProjectCard/ProjectCard";

import { FaGithub } from "react-icons/fa";
import { useLangContext } from "@/context/lang.context";

import { IMyProjects, IProject } from "@/context/types";

const Projects = () => {
  const {
    langContextData: { myProjects },
  } = useLangContext();
  const { title, viewMore, projects }: IMyProjects = myProjects;

  return (
    <section
      data-aos="fade-up"
      className="flex min-h-screen p-5 w-full flex-col flex-wrap items-center justify-center gap-9 max-w-7xl m-auto "
    >
      <h2 className="text-white text-4xl">{title}</h2>
      {projects?.map((project: IProject) => (
        <ProjectCard key={project.title} {...project} />
      ))}

      <div className="text-center">
        <p className="text-xs sm:text-sm text-white w-full">{viewMore}</p>
        <a
          href="https://github.com/Fran-Merce"
          className="w-fit"
          target="_blank"
        >
          <FaGithub className="text-center block  m-auto my-4 text-2xl text-purple-600 hover:text-purple-500 cursor-pointer hover:scale-125 transition-all" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
