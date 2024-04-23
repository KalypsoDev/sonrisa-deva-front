import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button/Button';

const ProductForm = () => {
  return (
    <div className="bg-darkBlue font-montserratRegular dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-4">
      <div className="p-4">
        <form action="#">
          <div className="font-montserratRegular text-base text-darkGrey grid gap-4 sm:grid-cols-2">
            <div>
            <div className="w-full">
              <label htmlFor="name" className="block mb-2 text-sm font-base text-white">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="apellido" className="block mb-2 mt-2 text-sm font-base text-white">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="direccion" className="block mb-2 mt-4 text-sm font-base text-white">Dirección</label>
              <textarea
                type="text"
                name="direccion"
                id="direccion"
                rows="2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Dirección"
                required
              />
            </div>
            </div>
            <div>
            <div className="w-full">
              <label htmlFor="telefono" className="block mb-2 text-sm font-base text-white">Teléfono</label>
              <input
                type="number"
                name="telefono"
                id="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Teléfono"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 mt-2 text-sm font-base text-white">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="mensaje" className="block mb-2 mt-2 text-sm font-base text-white">Mensaje (Requerido)</label>
              <textarea
                id="mensaje"
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Especifica talla o color del producto seleccionado según sea el caso"
              ></textarea>
            </div>
            </div>
          </div>
          <div className="text-center mt-6">
          <Link to="/tienda-solidaria">
          <Button type="button" className="font-montserratBold inline-flex items-center ml-0 px-6 py-2.5 mt-0 sm:mt-0 text-sm font-base text-center text-white bg-redBin rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800" text="Volver" />
          </Link>
          <Button type="submit" className="font-montserratBold inline-flex items-center ml-0 px-6 py-2.5 mt-0 sm:mt-0 text-sm font-base text-center text-primaryBlue bg-white rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 ml-4" text="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
