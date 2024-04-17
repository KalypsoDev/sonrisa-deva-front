import React from 'react'

const CardProduct = () => {
    return (
        <div className="max-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-40" src="src\assets\img\productBoli.jpg" alt="" />
            <div className="p-3">
                <h4 className="mb-2 text-lg font-bold tracking-tight text-darkBlue dark:text-white">Bolígrafos</h4>
                <div className='p-1'> 
                    <p className=" text-xs font-normal text-gray-700 dark:text-gray-400">Tallas s, m, l, xl</p>
                </div>
                <h5 className="mb-3 text-lg font-bold text-darkBlue dark:text-gray-400">DONATIVO: 5€</h5>
                <div className='flex justify-center'>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkBlue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Lo quiero
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProduct