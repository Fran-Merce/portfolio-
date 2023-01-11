import { useLangContext } from "@/context/lang.context";
import { FaJsSquare, FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiMysql,
} from "react-icons/si";

import { SkillCard } from "./SkillCard";

const iconStyle = "text-purple-600 hover:text-purple-500 max-w-[110px]";
export const Skills = () => {
  const {
    langContextData: { skills },
  } = useLangContext();
  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      className="min-h-screen m-auto md:w-[700px] w-full mt-20 p-4"
    >
      <h2 className="text-center mb-20 text-3xl md:text-5xl text-white">
        {skills.title}
      </h2>
      <div className=" flex-1 justify-center text-9xl w-full  flex flex-wrap items-center  sm:justify-around gap-8 sm:flex-row">
        <SkillCard text="HTML5" icon={<FaHtml5 className={iconStyle} />} />
        <SkillCard text="CSS3" icon={<FaCss3 className={iconStyle} />} />
        <SkillCard
          text="JavaScript"
          icon={<FaJsSquare className={iconStyle} />}
        />
        <SkillCard
          text="Typescript"
          icon={<SiTypescript className={`${iconStyle}`} />}
        />
        <SkillCard text="React" icon={<FaReact className={iconStyle} />} />
        <SkillCard text="Node" icon={<SiNodedotjs className={iconStyle} />} />
        <SkillCard text="Nest" icon={<SiNestjs className={iconStyle} />} />
        <SkillCard text="Express" icon={<SiExpress className={iconStyle} />} />
        <SkillCard text="Mongodb" icon={<SiMongodb className={iconStyle} />} />
        <SkillCard text="Sql" icon={<SiMysql className={iconStyle} />} />
      </div>

      <div id="proyects" />
    </section>
  );
};
