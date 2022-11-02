import ProyectCard from '../ProjectCard/ProjectCard';
import proyectsData from '@/data/projects-data';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section
      data-aos='fade-up'
      className='flex min-h-screen p-5 w-full flex-col flex-wrap items-center justify-center gap-9 max-w-7xl m-auto '
    >
      <h2 className='text-cyan-300 text-4xl'>Mis Proyectos</h2>
      {proyectsData.map(proyect => (
        <ProyectCard key={proyect.title} {...proyect} />
      ))}

      <div className='text-center'>
        <p className='text-xs sm:text-sm text-white w-full'>
          Puedes ver mas codigo y bugs en mi github
        </p>
        <FaGithub
          onClick={() => window.open('https://github.com/Fran-Merce', '_blank')}
          className='text-center block  m-auto my-4 text-2xl text-cyan-600 hover:text-cyan-500 cursor-pointer hover:scale-125 transition-all'
        />
      </div>
    </section>
  );
};

export default Projects;
