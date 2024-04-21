import React from 'react';
import TableOrders from '../../molecules/tableOrders/TableOrders';

const OrderedProductsAdminPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PÁGINA DE PRODUCTOS SOLICITADOS</h1>
      <TableOrders />
    </div>
  );
};

export default OrderedProductsAdminPage;
