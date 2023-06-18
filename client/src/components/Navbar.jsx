import React from 'react';
import Cart from './Cart';

const Navbar = () => {
  return (
    <div className='flex fixed justify-between items-center h-24 w-full mx-auto px-4 text-white bg-black z-10'>
      <a href="/">
        <div className='flex'>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
        </div>
      </a>

      <input
        type="text"
        placeholder=' search the latest items '
        className='hidden md:flex rounded-full hover:scale-105 duration-300 text-black'
      />

      <ul className='hidden md:flex'>
        <li className='p-4 hover:scale-105 duration-300'>Home</li>
        <li className='p-4 hover:scale-105 duration-300'>About</li>
        <li className='p-4 hover:scale-105 duration-300'>Feature</li>
        <li className='p-4 hover:scale-105 duration-300'>Products</li>
        <li className='p-4 hover:scale-105 duration-300'>Contacts</li>
      </ul>

      <Cart />
    </div>
  );
};

export default Navbar;
