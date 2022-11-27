interface Navbar {
  text: string;
  href: string;
}

export interface IHero {
  welcome: string;
  name: string;
  job: string;
  btnContact: string;
  btnResume: string;
}

export interface IAboutMe {
  title: string;
  description: string[];
}

interface Skills {
  title: string;
}

export interface IProject {
  title: string;
  desc: string;
  techs: string[];
  link: string;
  github: string;
  img: string;
}

export interface IMyProjects {
  title: string;
  btn_code: string;
  btn_live: string;
  viewMore: string;
  projects: IProject[];
}

export interface IForm {
  name: string;
  email: string;
  message: string;
  submit: string;
}

interface Success {
  title: string;
  sendOther: string;
}

interface Contact {
  title: string;
  form: IForm;
  success: Success;
}

interface Footer {
  made: string;
}

export interface ILangData {
  navbar: Navbar[];
  hero: IHero;
  aboutMe: IAboutMe;
  skills: Skills;
  myProjects: IMyProjects;
  contact: Contact;
  footer: Footer;
}
