import '@/styles/btns.css';
import img from '@/assets/hero.gif';
import { Contact } from '../../UI/contact/contact';
import { ButtonLink } from '@/components/UI/Button';

export const Hero = () => {
  return (
    <section className='section  justify-evenly relative'>
      <div
        data-aos-duration='1300'
        data-aos='fade-right'
        className='p-2 min-w-fit gap-1 flex  justify-center align-center  flex-col'
      >
        <p className='pl-1 text-cyan-400 text-xl'>Hola soy 👋 </p>
        <h1 className='text-4xl sm:text-7xl md:text-7xl  font-roboto  mb-1 tracking-wider text-start lg:text-8xl'>
          FRANCISCO
        </h1>
        <p className='pl-1 w-fit  text-cyan-500  text-2xl'>Frontend Developer🚀</p>
        <div className='flex gap-6 mt-5   '>
          <ButtonLink
            href='https://drive.google.com/file/d/1WhmF117tA9MTAEiMuYpHbM_ga6SpKx5p/view?usp=sharing'
            type='btn-primary'
            target='_blank'
            text='Curriculum'
          />

          <ButtonLink
            href='https://drive.google.com/file/d/1WhmF117tA9MTAEiMuYpHbM_ga6SpKx5p/view?usp=sharing'
            type='btn-secondary'
            text='Contacto'
          />
        </div>
      </div>
      <img
        className=' w-full max-w-xs  h-full hidden md:block'
        src={img}
        data-aos='fade-up-left'
        data-aos-duration='1000'
      />
      <Contact />
    </section>
  );
};
