import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Cart = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  }

  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });


  useEffect(() => {
    api.get('/cart').then((response) => {
      setCart(response.data);
      console.log(cart);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await api.post('/login', { email, password });
  //     const { isAuthenticated } = response.data;

  //     if (isAuthenticated) {
  //       setIsAuthenticated(true);
  //       navigate('/');
  //     } else {
  //       setError('Invalid email or password');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setError('Server error');
  //   };
  // };



  return (
    <div className="flex h-screen">


      <button onClick={handleCartToggle}>Cart Icon</button>
      
      {cartOpen && (

        <div className="w-64 h-full bg-white text-black rounded-lg shadow-md flex flex-col p-4 items-center justify-center hover:scale-105 duration-300">
            
          <h1>Cart Items:</h1>
            {cart.map((item) => (
              <div className="bg-black" key={item.product_id}>
                <h1>Product ID: {item.product_id}</h1>
                <h1>Quantity: {item.quantity}</h1>
                <h1>Total Price: {item.total_price}</h1>
          
              </div>
            ))} 

        </div>
      )}

      {cartOpen && (
        <div className="flex justify-center">
          <button className="bg-[#F2CD5C] hover:bg-[#f0bc23] w-full text-white font-bold py-2 px-4 rounded hover:scale-105 duration-300">
            Checkout
          </button>
        </div>
      )}
      
    </div>  
  );
};

export default Cart