import { Navbar } from './components';
import { Layout } from './components/Layout/Layout';
import { AboutMe, Hero } from './components/sections';
import { useEffect } from 'react';
import ParticlesComponent from './components/UI/Particles/Particles';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
      <ParticlesComponent />
    </Layout>
  );
}

export default App;
