import React from 'react';

const TableProducts = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            Acciones <span className="sr-only">Action</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Imagen</span>
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
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            Apple Watch
                        </td>
                        <td className="p-4">
                            <img src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/principito.jpg" className="w-16 md:w-32 max-w-full max-h-full mx-auto rounded-lg" alt="Apple Watch" />
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center justify-center">
                                <div>1</div>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            $599
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableProducts;

