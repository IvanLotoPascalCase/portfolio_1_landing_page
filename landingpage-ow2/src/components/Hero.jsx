import React from 'react'
import tracerUp from '../assets/main-tracer.png'


const Hero = () => {
  return (
    // SECCIÓN HERO
    <section className='relative h-[70vh] grid grid-cols-1 md:grid-cols-8 bg-slate-100'>
      
      <div className='md:col-span-4 flex items-center justify-center ml-8'>
        
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold flex flex-col gap-2 xl:text-7xl'>OVERWATCH 2:<span className='text-2xl text-primaryalt xl:p-4 xl:border-8 border-primaryalt rounded-lg xl:text-6xl'>Acción en Equipo • Gratis</span></h1>
          <p>by: <span className='text-primaryalt'>Iván "Loto"</span> </p>
          <p>Overwatch 2 es un juego de acción en equipo gratuito ambientado en un futuro optimista en el que todas las partidas presentan una <span className='text-primaryalt'>refriega definitiva 5c5.</span></p>
          <button className='bg-primaryalt w-80 rounded xl:w-[50%]'> Conocer más... </button>
        </div>
      </div>
      <div className='md:col-span-4 flex items-center justify-center'>
        <img className='w-[80%]' src={tracerUp} alt="cheersLads" />
      </div>
     
      {/*  <div className="z-[-1] absolute inset-0 bg-secondaryalt w-100 xl:h-[63%] xl:mt-[7%] shadow-xl"></div> */}

    </section>
  )
}

export default Hero