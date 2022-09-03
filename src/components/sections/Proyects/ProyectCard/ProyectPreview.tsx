import { useResize } from '@/hooks/useResize';

export const ProyectPreview = () => {
  const isPhone = useResize(768);
  return (
    <div className='w-[280px] h-[280px] md:w-[400px] md:h-[400px] '>
        <a className='overflow-hidden  h-full min-w-full block m-auto text-center rounded-full flex-1' href=''>
          <img
            className={`w-full h-full scale-115 hover:scale-100 md:hover:grayscale-0 transition-all duration-200 object-cover ${!isPhone && 'grayscale'} `}
            src='/fake Eccomerse.png'
            alt=''
          />
        </a>
      </div>
  )
}
