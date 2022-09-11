import { useState, useEffect, useRef } from 'react';
import { Marker } from '../sections/AboutMe/Marker';

export const Astronaut = () => {
  const [hovered, setHoverd] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (clicked && !hovered) setTimeout(() => setClicked(false), 4500);
  }, [clicked, hovered]);

  useEffect(() => {
    if (refVideo.current) refVideo.current.volume = 0.7;
    if (clicked && refVideo.current) refVideo.current.play();
  }, [clicked]);

  return (
    <div className='bottom-0 fixed astronaut-animation  right-[40px]  w-fit sm:max-w-[100px]  '>
      <img
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
        onClick={() => setClicked(true)}
        className='transition-all duration-700 max-w-[100px] cursor-pointer '
        style={{ transform: hovered ? 'translateY(-25px)' : 'translateY(0px)' }}
        src='/astronaut.gif'
        alt='astronaut pixel-art image'
      />
      <audio ref={refVideo} src='/audio-astronaut.mp3' />
      {clicked && (
        <p className='text-white text-xs  absolute min-w-[150px] left-0 top-[-80px] font-firaCode font-semibold  '>
          Do you know where I parked my {''}
          <Marker color='text-cyan-300'>Rocket</Marker>?
          <Marker color='text-red-700'>HEY!!</Marker> you speak english?
        </p>
      )}
    </div>
  );
};
