import { ButtonLink } from '@/components/UI/Button';
import { ProyectCardInterface } from './models/cardProyect';

export const ProyectCardContent = ({
  title,
  link,
  github,
  desc,
  techs,
}: ProyectCardInterface) => {
  return (
    <div className='flex flex-col justify-center max-w-[450px] items-center lg:items-start'>
      <h2 className='text-4xl text-center xs:text-left  text-cyan-400'>{title}</h2>
      <ul className='flex justify-center flex-wrap gap-1 text-blue-600 my-2 lg:justify-start'>
        {techs.map((tech, index) => (
          <li key={tech}>
          {''}{tech.trim()}{techs.length - 1 !== index  && '|'}
          </li>
        ))}
      </ul>
      <p className='text-stone-300'>{desc}</p>
      <div className='my-5 flex gap-6 text-white'>
        <ButtonLink target='_blank' href={link} type='btn-primary' text='Deploy' />
        <ButtonLink
          target='_blank'
          href={github}
          type='btn-secondary'
          text='< Code />'
        />
      </div>
    </div>
  );
};
