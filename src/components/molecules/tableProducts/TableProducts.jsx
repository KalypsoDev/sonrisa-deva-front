import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import InputSearch from '../../atoms/inputSearch/InputSearch';

const TableProducts = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
            <InputSearch />
            <table className="w-full max-w-full text-sm text-center rtl:text-right text-darkGrey dark:text-gray-400">
                <thead className="text-xs text-white bg-primaryLila dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-8 py-3">
                            Acciones
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Nombre Producto
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Imagen
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Precio Ud.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-10">
                                <a href="#" className="text-xl text-greenPen dark:text-red-500 flex items-center justify-center"><FaPencilAlt /></a>
                                <a href="#" className="text-xl text-redBin dark:text-red-500 flex items-center justify-center"><FaTrashAlt /></a>
                            </td>
                            <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                                {product.name}
                            </td>
                            <td className="py-2">
                                <img
                                    src={product.image_url || 'https://via.placeholder.com/250'}
                                    className="object-cover w-24 h-24 md:w-32 max-w-full max-h-full mx-auto rounded-lg"
                                    alt={product.name}
                                />
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center justify-center">
                                    <div>{product.stock}</div>
                                </div>
                            </td>
                            <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                                ${product.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableProducts;


