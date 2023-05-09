import React from 'react'
import aboutimg from '../assets/about-img.jpg'

const About = () => {
  return (
    <div name='about' className='w-full bg-[#D9D9D9] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
               <p className='hover:scale-105 duration-300'>
               Welcome to where sophistication meets style. Our curated selection features the latest trends from the world's top designers. 
               From chic and timeless to bold and daring, 
               we offer a range of pieces that will elevate your wardrobe and help you make a statement with every outfit.
                </p>
            </div>
            <img className='w-[500px] mx-auto my-4 shadow-2xl rounded-lg hover:scale-105 duration-300' src={ aboutimg } alt='aboutimage'/>
        </div>
    </div>
  )
}

export default About