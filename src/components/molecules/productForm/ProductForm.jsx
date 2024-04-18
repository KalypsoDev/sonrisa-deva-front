import React from 'react';

const ProductForm = () => {
  return (
    <div className="bg-darkBlue font-montserratRegular dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-8">
      <div className="p-4">
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
            <div className="w-full">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="apellido" className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="direccion" className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">Dirección</label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Dirección"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="telefono" className="block mb-2 mt-2 text-sm font-medium text-white dark:text-white">Teléfono</label>
              <input
                type="number"
                name="telefono"
                id="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Teléfono"
                required
              />
            </div>
            </div>
            <div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="mensaje" className="block mb-2 mt-8 text-sm font-medium text-white dark:text-white">Mensaje (Requerido)</label>
              <textarea
                id="mensaje"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Especifica talla o color del producto seleccionado según sea el caso"
              ></textarea>
            </div>
            </div>
          </div>
          <div className="text-center mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-redBin rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Volver
          </button>
          <button
            type="submit"
            className="inline-flex items-center ml-4 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-primaryBlue bg-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Enviar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
