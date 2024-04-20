import React from 'react';

const CardProduct = ({ product, onAddToCart }) => {
    const { name, description, price, imageSrc } = product;
  
    const shadowStyle = {
      boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };
  
    return (
      <div className="max-w-64 bg-white border rounded-[20px] shadow-md mx-auto mb-4" style={shadowStyle}>
        <img className="rounded-t-lg w-full h-40" src={imageSrc} alt="Imagen de Producto" />
        <div className="p-3">
          <h4 className="text-lg font-bold text-darkBlue">{name}</h4>
          <div className='min-h-4'>
            <p className="text-xs mb-1 font-normal text-gray-700">{description}</p>
          </div>
          <h5 className="mb-3 text-lg font-bold text-darkBlue dark:text-gray-400">DONATIVO: {price}</h5>
          <div className='flex justify-center'>
            <button onClick={() => onAddToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkBlue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Lo quiero
            </button>
          </div>
        </div>
      </div>
    );
  };

export default CardProduct;
