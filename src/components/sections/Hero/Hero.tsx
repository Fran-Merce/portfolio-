import { useLangContext } from "../../../context/lang.context";
import { Icon } from "../../UI/Icon";
import img from "@/assets/hero.gif";
import { ButtonLink } from "@/components/UI/ButtonLink";
import { IHero } from "@/context/types";
import "@/styles/btns.css";

export const Hero = () => {
  const {
    langContextData: { hero },
  } = useLangContext();
  const { welcome, btnContact, job, name, btnResume }: IHero = hero;

  return (
    <section className="section  justify-evenly relative">
      <div
        data-aos-duration="1300"
        data-aos="fade-right"
        className="p-2 min-w-fit gap-1 flex  justify-center align-center  flex-col"
      >
        <p className="pl-1 text-purple-600 text-x">{welcome}</p>
        <h1 className="text-4xl sm:text-7xl md:text-7xl  font-roboto  mb-1 tracking-wider text-start lg:text-8xl uppercase">
          {name}
        </h1>
        <p className="pl-1 w-fit  text-purple-500  text-2xl">
          {job} <Icon src="/rocket2.gif" size="la" />
        </p>
        <div className="flex gap-6 mt-5   ">
          <ButtonLink
            href="https://drive.google.com/file/d/1dVM7mbboQykMZtf3ocoq6AKJHdlr9kTT/view?usp=sharing"
            type="btn-primary"
            target="_blank"
            text={`${btnResume}`}
          />
          <ButtonLink
            href="#contact-form"
            type="btn-secondary"
            text={`${btnContact}`}
          />
        </div>
      </div>
      <img
        className=" w-full max-w-xs  h-full hidden md:block"
        src={img}
        data-aos="fade-up-left"
        data-aos-duration="1000"
      />
    </section>
  );
};
