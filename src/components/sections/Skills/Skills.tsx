import { FaJsSquare, FaHtml5, FaReact, FaCss3 } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

import { SkillCard } from './SkillCard';

const iconStyle = 'text-cyan-500 hover:text-cyan-600 max-w-[110px]';
export const Skills = () => {
  return (
    <section
      data-aos='fade-right'
      data-aos-duration='1000'
      className='min-h-screen m-auto md:w-[700px] w-full mt-20 p-4'
    >
      <h2 className='  text-center mb-20 text-3xl md:text-5xl text-cyan-300'>
        Trabajo con
      </h2>
      <div className=' flex-1 justify-center text-9xl w-full  flex flex-wrap items-center  sm:justify-around gap-7 sm:flex-row'>
        <SkillCard text='HTML5' icon={<FaHtml5 className={iconStyle} />} />
        <SkillCard text='CSS3' icon={<FaCss3 className={iconStyle} />} />
        <SkillCard text='JavaScript' icon={<FaJsSquare className={iconStyle} />} />
        <SkillCard
          text='Typescript'
          icon={<SiTypescript className={`${iconStyle}`} />}
        />
        <SkillCard text='React' icon={<FaReact className={iconStyle} />} />
        <SkillCard text='Redux' icon={<SiRedux className={iconStyle} />} />
        <SkillCard
          text='Tailwind CSS'
          icon={<SiTailwindcss className={iconStyle} />}
        />
        <SkillCard text='Firebase' icon={<SiFirebase className={iconStyle} />} />
        <SkillCard text='Node' icon={<SiNodedotjs className={iconStyle} />} />
        <SkillCard text='Express' icon={<SiExpress className={iconStyle} />} />
        <SkillCard text='Mongodb' icon={<SiMongodb className={iconStyle} />} />
      </div>

      <div id='proyects' />
    </section>
  );
};
