import React from 'react';

const ProductForm = () => {
  return (
    <div className="bg-darkBlue dark:bg-gray-800 rounded-2xl shadow-lg p-4 max-w-screen-lg mx-auto my-8">
    <section className="bg-darkBlue dark:bg-gray-900">
      <div className="p-4">
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2">
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
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
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
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-white dark:text-white">Apellido</label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-white dark:text-white">Teléfono</label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-white dark:text-white">Dirección</label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Dirección"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-white dark:text-white">Mensaje (Requerido)</label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Especifica talla o color deseado"
              ></textarea>
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
    </section>
    </div>
  );
};

export default ProductForm;
