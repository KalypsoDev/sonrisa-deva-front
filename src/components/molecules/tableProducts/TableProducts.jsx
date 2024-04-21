import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import InputSearch from '../../atoms/inputSearch/InputSearch';
import Pagination from '../../atoms/pagination/Pagination';

const TableProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const sampleProducts = [
        { "name": "Producto 1", "image_url": "https://via.placeholder.com/250", "stock": 10, "price": 25.99 },
        { "name": "Producto 2", "image_url": "https://via.placeholder.com/250", "stock": 5, "price": 15.99 },
        { "name": "Producto 3", "image_url": "https://via.placeholder.com/250", "stock": 20, "price": 39.99 },
        { "name": "Producto 4", "image_url": "https://via.placeholder.com/250", "stock": 8, "price": 19.99 },
        { "name": "Producto 5", "image_url": "https://via.placeholder.com/250", "stock": 15, "price": 29.99 },
        { "name": "Producto 6", "image_url": "https://via.placeholder.com/250", "stock": 12, "price": 34.99 },
        { "name": "Producto 7", "image_url": "https://via.placeholder.com/250", "stock": 3, "price": 9.99 },
        { "name": "Producto 8", "image_url": "https://via.placeholder.com/250", "stock": 18, "price": 22.99 },
        { "name": "Producto 9", "image_url": "https://via.placeholder.com/250", "stock": 6, "price": 17.99 },
        { "name": "Producto 10", "image_url": "https://via.placeholder.com/250", "stock": 25, "price": 31.99 },
        { "name": "Producto 11", "image_url": "https://via.placeholder.com/250", "stock": 4, "price": 12.99 },
        { "name": "Producto 12", "image_url": "https://via.placeholder.com/250", "stock": 9, "price": 27.99 },
        ];

        useEffect(() => {
            // Simula carga de datos al montar el componente
            setProducts(sampleProducts);
          }, []);
        
          // Función para manejar el cambio de página
          const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
          };
        
          // Cálculo de índices para los productos a mostrar en la página actual
          const indexOfLastProduct = currentPage * productsPerPage;
          const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
          const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        
          return (
            <div className="overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
              <InputSearch />
              <table className="w-full max-w-full text-sm text-center rtl:text-right text-darkGrey dark:text-gray-400">
                {/* Encabezado de la tabla */}
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
                {/* Cuerpo de la tabla */}
                <tbody>
                  {currentProducts.map((product, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      {/* Celdas de cada fila */}
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
              
              {/* Renderiza el componente de paginación */}
              <Pagination
                currentPage={currentPage}
                perPage={productsPerPage}
                totalItems={products.length}
                onPageChange={handlePageChange}
              />
            </div>
          );
        };
        
        export default TableProducts;