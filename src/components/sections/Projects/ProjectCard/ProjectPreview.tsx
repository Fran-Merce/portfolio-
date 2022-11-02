

interface Props {
  img: string;
  link?: string;
}

export const ProjectPreview = ({ img, link }: Props) => {
  return (
    <div className='w-[280px] h-[280px] md:w-[400px] md:h-[400px] '>
      <a
        className='overflow-hidden h-full min-w-full block m-auto text-center rounded-full flex-1'
        href={link}
        target='_blank'
      >
        <img
          className='w-full h-full object-left scale-115  object-cover '
          src={img}
          alt=''
        />
      </a>
    </div>
  );
};
