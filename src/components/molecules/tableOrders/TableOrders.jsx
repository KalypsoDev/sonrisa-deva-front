import React, { useState } from 'react';
import LegendModal from '../../atoms/legendModal/LegendModal';

const TableOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Leyenda
      </button>
      <LegendModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default TableOrders;
