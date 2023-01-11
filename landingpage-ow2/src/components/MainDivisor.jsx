import React from 'react'

// - IMPORT ICONS -
import {AiOutlineArrowDown} from 'react-icons/ai'

const MainDivisor = () => {
  return (
    <section>
        {/* DIVISOR SIGUIENTE SECCIÓN */}
        <div className="w-100 grid grid-cols-10 gap-4 flex items-center justify-center">
            <div className='bg-secondaryalt col-span-2 w-100 bg-primaryalt'></div>
            <div className='bg-primaryalt col-span-6 rounded-lg xl:h-[10%] xl:w-[70%] flex items-center justify-center mt-8 p-4'> <button><span><AiOutlineArrowDown /></span></button> </div>
            <div className='bg-secondaryalt col-span-2 w-[90%] bg-primaryalt'></div>
        </div>
    </section>
    
  
  )
}

export default MainDivisor