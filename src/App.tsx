import { Hero, Navbar } from './components';
import { Layout } from './components/Layout/Layout';
import ParticlesComponent from './components/UI/Particles/Particles';


function App() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <ParticlesComponent />

    </Layout>
  );
}

export default App;
