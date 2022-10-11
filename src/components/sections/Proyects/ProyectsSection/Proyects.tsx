import React from 'react';
import ProyectCard from '../ProyectCard/ProyectCard';
import proyectsData from '@/data/proyects-data';
export interface ProyectsInterface {}

const Proyects: React.FC<ProyectsInterface> = () => {
  return (
    <section
  
      data-aos='fade-up'
      className='flex min-h-screen p-5 w-full flex-col flex-wrap items-center justify-center gap-9  max-w-7xl m-auto '
    >
      <h2 className='text-cyan-300 text-4xl'>Mis Proyectos</h2>
      {proyectsData.map(proyect => (
        <ProyectCard key={proyect.title} {...proyect} />
      ))}
    </section>
  );
};

export default Proyects;
