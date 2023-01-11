import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { useScroll } from "@/hooks/useScroll";
const iconStyle = "text-purple-500 opacity-[0.5] hover:opacity-100";

export const ContactLeft = () => {
  const footerSize = 138;
  const render = useScroll(footerSize);
  if (!render) return null;

  return (
    <ul className="flex-col hidden sm:flex fixed z-50 bottom-1 left-[3%] text-2xl gap-4">
      <li>
        <a href="https://github.com/Fran-Merce" target={"_blank"}>
          <FiGithub className={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/francisco-merce/"
          target={"_blank"}
        >
          <FiLinkedin className={iconStyle} />
        </a>
      </li>
      <li>
        <a href="mailto:franmerce11@gmail.com" target={"_blank"}>
          <GoMail className={iconStyle} />
        </a>
      </li>
      <div className=" w-[1px] h-[5rem] bg-purple-600/60 m-auto"></div>
    </ul>
  );
};
