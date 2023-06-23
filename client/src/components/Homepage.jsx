import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Main from './Main';




const HomePage = () => {
  return (
    <div name='home' className=''>
      <Hero />
      <About />
      <Main />
    </div>
  )
}

export default HomePage