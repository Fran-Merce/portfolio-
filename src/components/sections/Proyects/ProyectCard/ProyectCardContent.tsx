import { ButtonLink } from '@/components/UI/Button';


interface Props {
  title: string;
  description: string;
  techs: string[];
  link: string;
  github: string;
}

export const ProyectCardContent = () => {
  return (
    <div className='flex flex-col justify-center max-w-[400px] items-center lg:items-start' >
      <h2 className='text-4xl  text-cyan-300'>Fake Eccomerse</h2>
      <ul className='flex flex-wrap gap-1 text-blue-400 my-2 '>
        <li>React</li>
        <li>Typescript</li>
        <li>Redux</li>
        <li>Node</li>
      </ul>
      <p className='text-stone-300 text-center lg:text-left'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum! Lorem
        ipsum dolor sit amet
      </p>
      <div className='my-5 flex gap-6 text-white'>
        <ButtonLink href='#about' type='btn-primary' text='Deploy' />
        <ButtonLink href='#about' type='btn-secondary' text='Código' />
      </div>
    </div>
  );
};
