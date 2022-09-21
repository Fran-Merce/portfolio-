import { Marker } from './Marker';
import imgPerfil from '@/assets/imgPerfil.png';
export const Description = () => {
  return (
    <>
      <div className='max-w-lg p-2'>
        <div className=' text-stone-300 '>
          <p>Desarrollador Frontend autodidacta desde los 17 años.</p>
          <p>Apasionado de la programación y el desarrollo web en especial.</p>
          <p>
            En 2021 decidí dar el paso de ingresar a un{' '}
            <Marker> bootcamp de desarrollo fullstack</Marker> para impulsar mis
            habilidades y conocimientos.
          </p>
          <p>
            Tuve la oportunidad de realizar la aceleración para obtener un perfil Job
            Ready en{' '}
            <Marker color='text-blue-700'>
              <a
                href='https://assets.alkemy.org/certificates/google-oauth2%7C116984645150510441129/8e65ee7a-4d00-4ecc-87b9-fc8248847690.pdf'
                target={'_blank'}
                className='cursor-pointer hover:text-blue-400'
              >
                Alkemy.
              </a>
            </Marker>
          </p>
          <p>
            Mi <Marker>Objetivo</Marker> es seguir creciendo como desarrollador y
            poder trabajar en proyectos interesantes ya sean Frontend o Fullstack
          </p>
        </div>
      </div>
      <div className='w-2/3  md:w-1/3 max-w-xs p-5 backdrop-blur-xl transition-colors'>
        <img
          className=' object-cover filter border-b-[1px] border-cyan-300 border-r-[1px] p-4 transition-all duration-500 backdrop-blur-md h-[90%] object-center opacity-15'
          src={imgPerfil}
          alt=''
        />
      </div>
    </>
  );
};
