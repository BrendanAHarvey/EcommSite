import React from 'react';
import Cart from './Cart';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex fixed justify-between items-center h-24 w-full mx-auto px-4 text-white bg-black z-10'>
      <Link to="home" smooth={true} duration={500}>
        <div className='flex'>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
        </div>
      </Link>

      <input
        type="text"
        placeholder=' search the latest items '
        className='hidden md:flex rounded-full hover:scale-105 duration-300 text-black'
      />

      <ul className='hidden md:flex'>
        <li className='p-4 hover:scale-105 duration-300'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='p-4 hover:scale-105 duration-300'><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className='p-4 hover:scale-105 duration-300'>Feature</li>
        <li className='p-4 hover:scale-105 duration-300'><Link to="main" smooth={true} duration={500}>Product</Link></li>
        <li className='p-4 hover:scale-105 duration-300'>Contacts</li>
      </ul>

      <Cart />
    </div>
  );
};

export default Navbar;
