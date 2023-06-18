import React from 'react'
import heropic from '../assets/heropic.jpg'

const Hero = () => {
  return (
    <div name='hero' id='hero' className='text-black'>
      <div className="bg-cover bg-center h-screen object-fixed text-center flex flex-col justify-center" style={{ backgroundImage: `url(${heropic})`}} >
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white hover:scale-105 duration-300'>Shop stylish and sustainable fashion for all at</h1>
      <div className='flex justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
      </div>
      </div>
    </div>
  )
}

export default Hero
