import React from 'react';

const Item = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full shadow-md flex flex-col p-4 items-center justify-center rounded-lg hover:scale-105 duration-300'>
      <p>{product.name}</p>
      {/* Add the rest of the product details */}
    </div>
  );
};

export default Item;
