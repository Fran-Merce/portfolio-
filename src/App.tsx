
import { Hero } from './components';
import { Layout } from './components/Layout/Layout';
import ParticlesComponent from './components/Particles/Particles';

function App() {
  return (
    <Layout>
      <Hero />
      <ParticlesComponent />
    </Layout>
  );
}

export default App;
