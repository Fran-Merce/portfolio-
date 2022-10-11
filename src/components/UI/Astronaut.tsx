import { dataAstronaut } from '@/data/atronaut- phrases';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Marker } from '../sections/AboutMe/Marker';

export const Astronaut = () => {
  const [hovered, setHoverd] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [reprodusing, setReprodusing] = useState<boolean>(false);
  const refVideo = useRef<HTMLVideoElement>(null);
  const [phrase, setPhrase] = useState({});
  const randomPhrases = () => {
    const numRand = Math.floor(Math.random() * dataAstronaut.length);
    setPhrase(dataAstronaut[numRand]);
  };
  // Todo delete any type
  const { phrase: phraseData, word1, word2, word3 } = phrase as any

  useEffect(() => {
    if(reprodusing) return
    if (refVideo.current) refVideo.current.volume = 0.7;
    if (clicked && refVideo.current) {
      randomPhrases()
      refVideo.current.play();
      setReprodusing(true);
    }
  }, [clicked]);

  useEffect(() => {
    if (clicked && !hovered) setTimeout(() => {
      setClicked(false)
      setReprodusing(false)
    }, 6000);
  }, [clicked, hovered]);

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
          {phraseData}
          <Marker color='text-cyan-300'>{word1}</Marker>
          <Marker color='text-red-700'>{word2}</Marker> {word3}
        </p>
      )}
    </div>
  );
};
