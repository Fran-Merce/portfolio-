import { Description } from './Description';

export const AboutMe = () => {
  return (
    <div id='about'>
      <h2
        data-aos='fade-right'
        className='sm:pl-14 text-3xl md:text-5xl ml-4 text-cyan-300 mb-4 left-4 md:top-20 pt-11'
      >
        UN POCO SOBRE MI 🚀
      </h2>
      <section
        data-aos='fade-up'
        className='section md:justify-evenly md:p-8 flex-col-reverse md:flex-row relative md:items-center '
      >
        <Description />
      </section>
      <div id='skills'/>
    </div>
  );
};
