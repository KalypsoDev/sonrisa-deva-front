import React from 'react';
import TableOrders from '../../molecules/tableOrders/TableOrders';

const OrderedProductsAdminPage = ({ isAuthenticated }) => {
  return (
    <>
      {
        isAuthenticated ? (
          <div className="p-4" >
            <h1 className="text-2xl font-bold mb-4">PÁGINA DE PRODUCTOS SOLICITADOS</h1>
            <TableOrders />
          </div >
        ) : (
          <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
            No estás autorizado para acceder a esta página.
          </div>
        )}
    </>
  );
};

export default OrderedProductsAdminPage;
