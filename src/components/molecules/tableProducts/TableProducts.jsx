import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const TableProducts = () => {
    return (
        <div className="w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
            <table className="w-full text-sm text-center rtl:text-right text-darkGrey dark:text-gray-400">
                <thead className="text-xs text-white bg-primaryLila dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            Acciones
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Imagen
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio Ud.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-16">
                            <a href="#" className="text-xl text-greenPen dark:text-red-500 flex items-center justify-center"><FaPencilAlt /></a>
                            <a href="#" className="text-xl text-redBin dark:text-red-500 flex items-center justify-center"><FaTrashAlt /></a>
                        </td>
                        <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                            Apple Watch
                        </td>
                        <td className="py-2">
                            <img
                                src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/principito.jpg"
                                className="w-12 md:w-32 max-w-full max-h-full mx-auto rounded-lg"
                                alt="Apple Watch"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex items-center justify-center">
                                <div>1</div>
                            </div>
                        </td>
                        <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                            $599
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-16">
                            <a href="#" className="text-xl text-greenPen dark:text-red-500 flex items-center justify-center"><FaPencilAlt /></a>
                            <a href="#" className="text-xl text-redBin dark:text-red-500 flex items-center justify-center"><FaTrashAlt /></a>
                        </td>
                        <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                            Apple Watch
                        </td>
                        <td className="py-2">
                            <img
                                src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/principito.jpg"
                                className="w-12 md:w-32 max-w-full max-h-full mx-auto rounded-lg"
                                alt="Apple Watch"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex items-center justify-center text-darkGrey">
                                <div>1</div>
                            </div>
                        </td>
                        <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                            $599
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableProducts;

