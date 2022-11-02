import { ProjectCardInterface } from './models/cardProject';
import { ProjectCardContent } from './ProjectCardContent';
import { ProjectPreview } from './ProjectPreview';



const ProjectCard: React.FC<ProjectCardInterface> = (props) => {
  return (
    <div
      data-aos='fade-up'
      className='flex gap-10 flex-col lg:flex-row items-center my-9 '
      data-duration='500'
    >
      <ProjectPreview img={props.img} link={props.link}  />
      <ProjectCardContent {...props}   />
    </div>
  );
};

export default ProjectCard;
