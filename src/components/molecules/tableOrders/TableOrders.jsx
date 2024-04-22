import React, { useState, useEffect } from 'react';
import LegendModal from '../../atoms/legendModal/LegendModal';
import { FaBoxOpen, FaBan, FaPaperPlane } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import Pagination from '../../atoms/pagination/Pagination';
import FetchApi from '../../../services/FetchApi';

const TableOrders = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const [iconToShow, setIconToShow] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await FetchApi.getOrderProduct(); // Llama a la función para obtener los pedidos desde la API
        setFilteredOrders(ordersData); // Almacena los pedidos en el estado local
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };

    fetchOrders(); // Llama a la función para obtener los pedidos al cargar el componente
  }, []);

  const indexOfLastOrder = currentPage * perPage;
  const indexOfFirstOrder = indexOfLastOrder - perPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleIconClick = (orderId) => {
    setIconToShow({ ...iconToShow, [orderId]: iconToShow[orderId] === 'box' ? 'plane' : 'box' });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LegendModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <div className="overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
        <div className="overflow-y-auto">
          <table className="w-full max-w-full text-sm text-center rtl:text-right text-darkGrey dark:text-gray-400">
            <thead className="text-xs text-white bg-primaryLila dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-8 py-3">
                  Acciones{' '}
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="text-white bg-primaryLila focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    {' '}
                    <FaCircleInfo className="ml-2" />
                  </button>
                </th>
                <th scope="col" className="px-8 py-3">
                  Nº Pedido
                </th>
                <th scope="col" className="px-8 py-3">
                  Producto
                </th>
                <th scope="col" className="px-8 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-8 py-3">
                  Precio
                </th>
                <th scope="col" className="px-8 py-3">
                  Email
                </th>
                <th scope="col" className="px-8 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-8 py-3">
                  Fecha compra
                </th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-10">
                    <a href="#" className="text-xl text-mustardBox dark:text-red-500 flex items-center justify-center" onClick={() => handleIconClick(order.number)}>
                      {iconToShow[order.number] === 'box' ? <FaBoxOpen /> : <FaPaperPlane className="text-primaryBlue" />}
                    </a>
                    <a href="#" className="text-xl text-redBin dark:text-red-500 flex items-center justify-center">
                      <FaBan />
                    </a>
                  </td>
                  <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">{order.number}</td>
                  <td className="px-4 py-2">{order.product}</td>
                  <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">{order.quantity}</td>
                  <td className="px-4 py-2">{order.price} €</td>
                  <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">{order.email}</td>
                  <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">{order.name}</td>
                  <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination currentPage={currentPage} perPage={perPage} totalItems={filteredOrders.length} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
};

export default TableOrders;

