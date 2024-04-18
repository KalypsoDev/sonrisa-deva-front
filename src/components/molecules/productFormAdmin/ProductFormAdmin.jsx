import React from 'react';

const ProductFormAdmin = () => {
    return (
        <div>
            <form className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
                <h1 className="text-center text-3xl font-semibold text-white rounded-lg p-3">AGREGAR PRODUCTO</h1>
                <hr className="w-full my-3 border-gray-300" />
                <div className="flex flex-col sm:flex-row w-full">
                    <div className="flex flex-col w-full sm:w-2/3 justify-center ">
                        <div className="mb-8 w-full sm:w-4/5">
                            <label htmlFor="name" className="block mb-2 text-lg text-white">Nombre</label>
                            <input type="text" id="name" name="name" className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg" required />
                        </div>
                        <div className="mb-8 w-full sm:w-4/5">
                            <label htmlFor="stock" className="block mb-2 text-lg text-white">Cantidad</label>
                            <input type="number" id="stock" name="stock" className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg" required />
                        </div>
                        <div className="mb-8 w-full sm:w-4/5">
                            <label htmlFor="price" className="block mb-2 text-lg text-white">Precio</label>
                            <input type="number" id="price" name="price" className="bg-white border border-opacity-20 border-gray-300 text-dark text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg" required />
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2 items-center mb-8 sm:mb-0">
                        <h2 className="text-center text-lg text-white mb-2">Imagen</h2>
                        <img className="w-full h-60 mb-5" src="https://picsum.photos/200/300" alt="Imagen de Producto" />
                        <label htmlFor="image_url" className="block text-sm font-medium text-white text-center"></label>
                        <input type="file" id="image_url" name="image_url" className="block w-full mb-3 mt-2 text-sm  border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-white border-gray-600 placeholder-gray-400" />
                    </div>
                </div>
                <div >
                    <button type="submit" className="text-white bg-darkBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5 mr-5">Agregar</button>
                    <button type="submit" className="text-primaryLila bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default ProductFormAdmin;
