import imgPerfil from '@/assets/imgPerfil.png';
import { Marker } from './Marker';

export const AboutMe = () => {
  return (
    <div>
      <h2 data-aos='fade-right' className='text-3xl md:text-5xl ml-4 text-cyan-300 mb-4 left-4 md:top-20'>
        UN POCO SOBRE MI  🚀
      </h2>
      <section
        data-aos='fade-up'
        id='about'
        className='section md:justify-evenly md:p-8 flex-col-reverse md:flex-row relative md:items-center '
      >
        <div className='max-w-lg p-4'>
          <p className='md:max-w-md text-stone-300 '>
            Hola, soy <Marker>Franciso Merce</Marker> soy un desarrollador Frontend,
            autodidacta desde los 17 años, me gusta mucho el mundo de la programacion
            y el desarrollo web en especial, en 2021 decidi dar el paso de ingresar a
            un
            <Marker> bootcamp de desarrollo fullstack</Marker> para impulsar mis
            habilidades y conocimientos tambien tuve la oportunidad de realizar la
            aceleracion para obtener un perfil Job Ready en{' '}
            <Marker>
              <a
                href='https://assets.alkemy.org/certificates/google-oauth2%7C116984645150510441129/8e65ee7a-4d00-4ecc-87b9-fc8248847690.pdf'
                target={'_blank'}
                className='cursor-pointer hover:text-blue-600'
              >
                Alkemy
              </a>
            </Marker>
            .{''} Mi <Marker>objetivo</Marker> es seguir creciendo como desarrollador
            y poder trabajar en proyectos interesantes ya sean Frontend o Fullstack y
            obtener mi primer empleo it
          </p>
        </div>
        <div className='w-2/3  md:w-1/3 max-w-xs p-5 backdrop-blur-xl transition-colors'>
          <img
            className=' object-cover filter border-b-[1px] border-cyan-300 border-r-[1px] p-4 transition-all duration-500 backdrop-blur-md h-[90%] object-center opacity-15'
            src={imgPerfil}
            alt=''
          />
        </div>
      </section>
    </div>
  );
};
