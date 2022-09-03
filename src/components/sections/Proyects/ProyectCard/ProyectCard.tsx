import { ProyectCardContent } from './ProyectCardContent';
import { ProyectPreview } from './ProyectPreview';

export interface ProyectCardInterface {}

const ProyectCard: React.FC<ProyectCardInterface> = () => {
  return (
    <div
      data-aos='fade-up'
      className='flex gap-10 flex-col lg:flex-row items-center my-9 '
      data-duration='500'
    >
      <ProyectPreview />
      <ProyectCardContent />
    </div>
  );
};

export default ProyectCard;
