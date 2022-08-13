import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, } from 'react';


import { loadFull } from 'tsparticles';
import { options } from './options';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: {} | undefined) => {}, []);
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
export default ParticlesComponent;
