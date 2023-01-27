import React from 'react'

// - IMPORT ICONS -
import {AiOutlineArrowDown} from 'react-icons/ai'

const MainDivisor = () => {
  return (
    <section>
        {/* DIVISOR SIGUIENTE SECCIÓN */}
        <div className="w-100 flex items-center justify-center">
            <button className='bg-primaryalt rounded-lg w-80 xl:h-[10%] xl:w-[20%] flex items-center justify-center mt-8 mb-8 p-4'><span><AiOutlineArrowDown /></span></button>
        </div>
    </section>
    
  
  )
}

export default MainDivisor