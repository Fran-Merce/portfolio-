import { Layout } from './components/Layout/Layout';
import { AboutMe, Hero, Proyects } from './components/sections';
import ParticlesComponent from './components/UI/Particles/Particles';
import { Skills } from './components/sections/Skills/Skills';
import { Astronaut } from './components/UI/Astronaut';
import { ContactSection } from './components/sections/Contact';
import { ContactLeft } from './components';
import { useEffect } from 'react';
import ReactGA from "react-ga4";


const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-MNZHJ642P1");
    ReactGA.event({
      category: "your category",
      action: "your action",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true
    });
  },[])
  return (
    <Layout>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Proyects />
        <ContactSection />
      </main>
      <ContactLeft />
      <ParticlesComponent />
      <Astronaut />
    </Layout>
  );
};

export default App;
