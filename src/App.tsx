import { Contact, Navbar } from './components';
import { Layout } from './components/Layout/Layout';
import { AboutMe, Hero, Proyects } from './components/sections';
import { useEffect } from 'react';
import ParticlesComponent from './components/UI/Particles/Particles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skills } from './components/sections/Skills/Skills';
import { Astronaut } from './components/UI/Astronaut';
import { ContactSection } from './components/sections/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Proyects />
        <ContactSection />
      </main>
      <Contact />
      <ParticlesComponent />
      <Astronaut />
      <ToastContainer
        theme='dark'
        autoClose={3000}
        position='top-center'
        limit={3}
        className='w-full text-sm font-firaCode grid place-content-center my-0 mx-auto'
      />
    </Layout>
  );
};

export default App;
