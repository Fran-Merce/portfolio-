import { Layout } from './components/Layout/Layout';
import { AboutMe, Hero, Proyects } from './components/sections';
import ParticlesComponent from './components/UI/Particles/Particles';
import { Skills } from './components/sections/Skills/Skills';
import { Astronaut } from './components/UI/Astronaut';
import { ContactSection } from './components/sections/Contact';




const App = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Proyects />
        <ContactSection />
      </main>
      <ParticlesComponent />
      <Astronaut />
    </Layout>
  );
};

export default App;
