import React from 'react';
import ProyectCard from '../ProyectCard/ProyectCard';

export interface ProyectsInterface {}

const Proyects: React.FC<ProyectsInterface> = () => {
  return (
    <section data-aos='fade-up' className='flex min-h-screen p-5 w-full flex-col flex-wrap items-center justify-center gap-9  max-w-7xl m-auto '>
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
    </section>
  );
};

export default Proyects;
