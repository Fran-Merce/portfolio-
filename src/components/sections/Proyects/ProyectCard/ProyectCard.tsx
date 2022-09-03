import { ProyectCardInterface } from './models/cardProyect';
import { ProyectCardContent } from './ProyectCardContent';
import { ProyectPreview } from './ProyectPreview';



const ProyectCard: React.FC<ProyectCardInterface> = (props) => {
  return (
    <div
      data-aos='fade-up'
      className='flex gap-10 flex-col lg:flex-row items-center my-9 '
      data-duration='500'
    >
      <ProyectPreview img={props.img} link={props.link}  />
      <ProyectCardContent {...props}   />
    </div>
  );
};

export default ProyectCard;
