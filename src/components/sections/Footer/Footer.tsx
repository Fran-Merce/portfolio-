import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const hover = 'cursor-pointer hover:text-stone-400';
  return (
    <footer
      id='footer'
      className=' text-white h-28 border-t-[1px] w-full flex-col text-center items-center justify-center gap-2 flex  md:flex-row md:justify-between md:px-6 '
    >
      <a href='mailto:franmerce11@gmail.com' target={'_blank'} className={hover}>
        Franmerce11@gmail.com
      </a>
      <div className='flex  text-3xl gap-2 justify-center'>
        <a href='https://github.com/Fran-Merce' target='blank'>
          <FaGithub className={hover} />
        </a>
        <a href='https://wa.me/542478472887' target='blank'>
          <FaWhatsapp className={hover} />
        </a>
        <a href='https://www.linkedin.com/in/francisco-merce/' target='blank'>
          <FaLinkedin className={hover} />
        </a>
      </div>
      <p>Hecho con ❤️ Por Francisco Merce </p>
    </footer>
  );
};
