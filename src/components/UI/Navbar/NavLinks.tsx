export const NavLinks = () => {

  return (
    <ul className='text-lg absolute h-96 backdrop-blur-sm bg-black/60  w-full top-24 right-0 flex flex-col items-center justify-center gap-10 md:static md:flex-row md:h-fit md:w-fit md:bg-transparent md:gap-3'>
      <li>
        <a className='text-cyan-400 hover:text-cyan-500 ' href=''>
          Sobre mi
        </a>
      </li>
      <li>
        <a className='text-cyan-400 hover:text-cyan-500' href=''>
          Proyectos
        </a>
      </li>
      <li>
        <a className='text-cyan-400 hover:text-cyan-500' href=''>
          Habilidades
        </a>
      </li>
      <li>
        <a className='text-cyan-400 hover:text-cyan-500' href=''>
          contacto
        </a>
      </li>
    </ul>
  );
};
