import React from 'react';

const CardProduct = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <div className="max-w-64 bg-white border rounded-[20px] shadow-md" style={shadowStyle}>
            <img className="rounded-t-lg w-full h-40" src="src\assets\img\productBoli.jpg" alt="Imagen de Producto" />
            <div className="p-3">
                <h4 className="text-lg font-bold text-darkBlue">Bolígrafos</h4>
                <div className='min-h-4'>
                    <p className="text-xs mb-1 font-normal text-gray-700">Tallas s, m, l, xl</p>
                </div>
                <h5 className="mb-3 text-lg font-bold text-darkBlue dark:text-gray-400">DONATIVO: 5€</h5>
                <div className='flex justify-center'>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkBlue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Lo quiero
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;
