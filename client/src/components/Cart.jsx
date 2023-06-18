import React, {useState} from 'react'

const Cart = () => {

  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  }



  return (
    <div className="flex h-screen">


      <button onClick={handleCartToggle}>Cart Icon</button>
      
      {cartOpen && (
        <div className="w-64 bg-white rounded-lg">

          <div className="flex items-center justify-center h-16 text-black">
          <a href="/">
          <div className='flex'>
            <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
            <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
          </div>
          </a>
            <span className="text-xl text-black font-semibold">Your Brand</span>
          </div>
          
        </div>
      )}
      
    </div>  
  )
}

export default Cart