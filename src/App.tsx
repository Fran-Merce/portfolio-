import { Contact, Navbar } from './components';
import { Layout } from './components/Layout/Layout';
import { AboutMe, Hero, Proyects } from './components/sections';
import { useEffect } from 'react';
import ParticlesComponent from './components/UI/Particles/Particles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skills } from './components/sections/Skills/Skills';
import { Astronaut } from './components/UI/Astronaut';

const App = () => {
  useEffect(() => { AOS.init() }, []);
  return (
    <Layout>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Proyects />
      </main>
      <Contact />
      <ParticlesComponent />
      <Astronaut />
    </Layout>
  );
};

export default App;
