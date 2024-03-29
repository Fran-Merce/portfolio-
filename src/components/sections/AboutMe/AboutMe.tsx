import { Icon } from "@/components/UI/Icon";
import { useLangContext } from "@/context/lang.context";
import { Description } from "./Description";

export const AboutMe = () => {
  const {
    langContextData: { aboutMe },
  } = useLangContext();
  return (
    <div id="about">
      <h2
        data-aos="fade-right"
        className="sm:pl-14 text-3xl md:text-5xl ml-4 text-purple-500 mb-4 left-4 md:top-20 pt-11 uppercase"
      >
        {aboutMe.title}
        <Icon
          src="/rocket.gif"
          alt="rocket animated gif"
          size="la"
          className="ml-2"
        />
      </h2>
      <section
        data-aos="fade-up"
        className="section md:justify-evenly md:p-8 flex-col-reverse md:flex-row relative md:items-center "
      >
        <Description description={aboutMe.description} />
      </section>
      <div id="skills" />
    </div>
  );
};
