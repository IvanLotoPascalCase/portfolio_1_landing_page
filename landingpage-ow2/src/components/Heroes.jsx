import React from 'react'

import hanamura from '../assets/hanzo.png'
import eichenwalde from '../assets/reinhardt.png'
import typeecho from '../assets/echo.png'
import bestheroever from '../assets/doomfist.png'
import bobdosomething from '../assets/ashe.png'

const Heroes = () => {
  return (
    <section>
      <div className='bg-slate-200 w-100 h-[70vh] flex items-center justify-center'>
        <div className='bg-white h-[80%] w-[80%] rounded-lg grid grid-cols-5'>
          <div className='col-span-5 flex justify-center mt-8'>
            <h1 className='text-bold text-xl'> 
              <span className='xl:border-4 border-primaryalt rounded-sm p-2'>Héroes</span> 
            </h1>
          </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg xl:col-span-1 col-span-5 m-4">
              <img src={eichenwalde} alt="Image" class="w-full"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Reinhardt</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="px-6 py-4">
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg xl:col-span-1 col-span-5 m-4">
              <img src={hanamura} alt="Image" class="w-full"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Hanzo</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="px-6 py-4">
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg xl:col-span-1 col-span-5 m-4">
              <img src={typeecho} alt="Image" class="w-full"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Echo</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="px-6 py-4">
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg xl:col-span-1 col-span-5 m-4">
              <img src={bestheroever} alt="Image" class="w-full"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Doomfist</div>
                <p class="text-gray-700 text-base">
                  Best Overwatch Hero, no discussion on this one.
                </p>
              </div>
              <div class="px-6 py-4">
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg xl:col-span-1 col-span-5 m-4">
              <img src={bobdosomething} alt="Image" class="w-full"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Ashe and Bob</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="px-6 py-4">
              </div>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Heroes