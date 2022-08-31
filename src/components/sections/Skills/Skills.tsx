
import { FaJsSquare, FaHtml5, FaReact, FaCss3 } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
} from 'react-icons/si';
import { SkillCard } from './SkillCard';
const iconStyle = 'text-cyan-500 hover:text-cyan-600 max-w-[120px]';

export const Skills = () => {
  return (
    <div className='min-h-[50vh] container m-auto md:w-[700px] w-full mt-20 p-4'>
      <h2 className='text-gray-300 text-center mb-20 text-3xl'>Trabajo con </h2>
      <div className='container flex-col text-9xl w-full  flex flex-wrap items-center  sm:justify-between gap-7 sm:flex-row'>
        <SkillCard text='HTML5' icon={<FaHtml5 className={iconStyle} />} />
        <SkillCard text='CSS3' icon={<FaCss3 className={iconStyle} />} />
        <SkillCard text='JavaScript' icon={<FaJsSquare className={iconStyle} />} />
        <SkillCard text='Typescript' icon={<SiTypescript className={`${iconStyle}`} />} />
        <SkillCard text='React' icon={<FaReact className={iconStyle} />} />
        <SkillCard text='Redux' icon={<SiRedux className={iconStyle} />} />
        <SkillCard text='Tailwind CSS' icon={<SiTailwindcss className={iconStyle} />} />
        <SkillCard text='Styled Components' icon={<SiStyledcomponents className={iconStyle} />} />
      </div>
    </div>
  );
};
