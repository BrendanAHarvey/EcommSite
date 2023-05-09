import React, { useState, useEffect } from 'react';
import axios from 'axios';
import chanelSunglasses from '../assets/chanel_sunglasses.webp';
import celineSunglasses from '../assets/celine_sunglasses.jpg';
import burberySunglasses from '../assets/burberry-sunglasses.webp';
import versaceSunglasses from '../assets/Versace-Sunglasse.webp';
import offwhiteShoes from '../assets/OFF-WHITE-trainers.webp';
import clShoes from '../assets/christian-louboutin-loafers.jpg';
import houseofcbDress from '../assets/houseofcb-dress.png';
import maxmaraDress from '../assets/max-mara.jpeg';
import amDress from '../assets/alexander-mcqueen-dress.jpg';
import vwNecklace from '../assets/vivienne-westwood-necklace.webp';
import bouchreonRing from '../assets/boucheron-ring.png';
import fendiNecklace from '../assets/fendi-necklace.webp';
import yslShoes from '../assets/ysl-heels.jpg';
import alaiaDress from '../assets/alaia-Dress.webp';
import mizukiEarrings from '../assets/mizuki-earrings.webp';
import jordans from '../assets/jordans.webp';
// import { response } from 'express';




const Main = () => {

  const productImgs = {
    0: jordans,
    1: chanelSunglasses,
    2: celineSunglasses,
    3: burberySunglasses,
    4: versaceSunglasses,
    5: offwhiteShoes,
    6: clShoes,
    7: houseofcbDress,
    8: maxmaraDress,
    9: amDress,
    10: vwNecklace,
    11: bouchreonRing,
    12: fendiNecklace,
    13: yslShoes,
    14: alaiaDress,
    15: mizukiEarrings,
  };

  

  const productImgElements = Object.entries(productImgs).map(([key, value]) => (
    <img key={key} src={value} alt={`Product ${key}`} />
  ));

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });

  const API_URL = 'http://localhost:5000/api'

  useEffect(() => {
    api.get(`/products`).then((response) => {
      setProducts(response.data);
      console.log(products);
      console.log('server test')
    }).catch((err) => {
      console.error(err);
    });
  }, []);


  const handleProductSelect = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  // const handleProductSelect = (productId, quantity) => {
  //   if (quantity > 0) {
  //     api.post('/cart', { productId, quantity })
  //       .then((response) => {
  //         console.log(response.data);
  //         // Update the cart state in your React component
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     api.delete(`/cart/${productId}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         // Update the cart state in your React component
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  
  

  const renderProduct = (product) => {
    return (
      <div className='w-full shadow-md flex flex-col p-4 my-4 items-center justify-center rounded-lg hover:scale-105 duration-300'>
        <p>{productImgElements[product.id - 1]}</p>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={() => setQuantity(quantity - 1)}> - </button>
        <input type="text" className="h-10 w-10 border border-gray-300 px-2 py-1 my-5 rounded-lg text-center" value={quantity} readOnly/>
        <button onClick={() => setQuantity(quantity + 1)}> + </button>
      </div>
    );
  };


  const renderProductList = () => {
    return (
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 '>
        {products.map((product) => {
          return (
            <div key={product.id} className='cursor-pointer shadow-md hover:scale-105 duration-300' onClick={() => handleProductSelect(product.id)}>
              <p>{productImgElements[product.id - 1]}</p>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <button onClick={() => setQuantity(quantity - 1)}> - </button>
              <input type="text" className="h-10 w-10 border border-gray-300 px-2 py-1 my-5 rounded-lg text-center" value={quantity} readOnly/>
              <button onClick={() => setQuantity(quantity + 1)}> + </button>
            </div>
          );
        })}
      </div>
    );
  };
  

  return (
    <div name='skills' className='w-full h-50vh py-[10rem] px-4 bg-white'>
      {selectedProduct ? renderProduct(selectedProduct) : renderProductList() || !selectedProduct ? renderProductList() : renderProduct(selectedProduct)}
    </div>
  );
};


export default Main