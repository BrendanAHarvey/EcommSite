import React from 'react'

const Navbar = () => {
  return (
    <div className='flex fixed justify-between items-center h-24 w-full mx-auto px-4 text-white bg-black'>
      <a href="/">
          <h1 className='w-full text-3xl font-bold text-[#ebd244] hover:scale-105 duration-300'>NINETY3</h1>
        </a>
        
        <input type="text" placeholder=' search the lastest items ' className='hidden md:flex rounded-full hover:scale-105 duration-300 text-black'/>

        <ul className='hidden md:flex '>
            <li className='p-4 hover:scale-105 duration-300'>Home</li>
            <li className='p-4 hover:scale-105 duration-300'>About</li>
            <li className='p-4 hover:scale-105 duration-300'>Feature</li>
            <li className='p-4 hover:scale-105 duration-300'>Products</li>
            <li className='p-4 hover:scale-105 duration-300'>Contacts</li>
        </ul>
    </div>
  )
}

export default Navbar