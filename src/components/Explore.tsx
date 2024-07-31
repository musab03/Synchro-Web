'use client'
import React from 'react'
import Image from 'next/image'
import explorepic from '../../public/images/exploreTag.svg'


const Explore = () => {
  return (
    <div className='bg-white'>

    <div className='container mx-auto  flex flex-col-reverse md:flex-row items-center justify-between text-white'>
        <div className=' bg-slate-950 w-full rounded-xl mt-32 mb-8 py-16 flex flex-col-reverse md:flex-row items-center justify-between text-white'>
           <div className='ml-16 text-white justify-start p-6 text-xl md:text-2xl lg:text-4xl mb-6 w-full md:w-1/3 font-light md:font-bold mt-4 md:mt-8'>
               Every tool you need to power your buisness.
           <button className="bg-black text-sm text-white mt-16  md:px-6 md:py-3 rounded-full font-semibold border outline-8b outline-white">
          Explore all service 
        </button>
           </div>
    <div className="relative w-full max-w-lg mt-8 md:mt-0 ">
        <div className="relative ">
          <Image src={explorepic} alt="Main Image" className=" w-full h-96 rounded-lg" />
        </div>        
        </div>
    </div>
    </div>
    </div>
  )
}
 
export default Explore;