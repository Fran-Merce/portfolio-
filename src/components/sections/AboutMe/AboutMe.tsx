import imgPerfil from '@/assets/imgPerfil.png';
import { Description } from './Description';
import { Marker } from './Marker';

export const AboutMe = () => {
  return (
    <div>
      <h2 data-aos='fade-right' className='text-3xl md:text-5xl ml-4 text-cyan-300 mb-4 left-4 md:top-20'>
        UN POCO SOBRE MI  🚀
      </h2>
      <section
        data-aos='fade-up'
        id='about'
        className='section md:justify-evenly md:p-8 flex-col-reverse md:flex-row relative md:items-center '
      >
        <Description />
      </section>
    </div>
  );
};
