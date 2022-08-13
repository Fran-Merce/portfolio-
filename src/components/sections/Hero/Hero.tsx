import '@/styles/btns.css';
import img from '@/assets/lofi2.png'


export const Hero = () => {
  return (
    <section className=' flex-col  text-white max-w-7xl m-auto   min-h-screen flex items-center justify-center md:justify-around md:flex-row'>
      <div className="p-2  gap-1 flex  justify-center align-center  flex-col  md:w-2/4" >
        <p className="pl-1 text-cyan-400 text-xl">Hola soy 👋 </p>
        <h1 className='text-4xl sm:text-7xl md:text-7xl  font-roboto  mb-1 tracking-widest text-start lg:text-8xl'>FRANCISCO</h1>
        <p className='pl-1 w-fit  text-cyan-500  text-2xl' >Frontend Developer</p>
        <div className="flex gap-6 mt-5  ">
          <button className="custom-btn btnAnimated1 "><span >Curriculm</span></button>
          <button className="custom-btn btnAnimated2 "><span>Sobre mi</span></button>
        </div>
      </div>
      <div className='w-1/4 h-1/4' >
        <img className=' w-full rounded-full  h-full hidden md:block' src={img} alt="" />
      </div>
    </section>
  );
};
