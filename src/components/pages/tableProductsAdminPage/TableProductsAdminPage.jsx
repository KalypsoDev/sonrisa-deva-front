import React from 'react'
import TableProducts from '../../molecules/tableProducts/TableProducts'
import Sidebar from '../../molecules/sidebar/Sidebar'

const TableProductsAdminPage = () => {
  return (
    <>
  
    <div className="flex h-screen">
    <div className="sm:w-1/4 w-1/4">
    <Sidebar />
    </div>
    <div className="flex-1 md:mr-32 overflow-x-auto">
    <h5 className="text-2xl text-darkGrey text-center font-bold mt-2 mb-4 pt-8">GESTIÓN DE PRODUCTOS</h5>
   <TableProducts />
   </div>
   </div>
   </>
  )
}

export default TableProductsAdminPage