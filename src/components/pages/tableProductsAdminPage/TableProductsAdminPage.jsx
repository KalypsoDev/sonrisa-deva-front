import React from 'react'
import TableProducts from '../../molecules/tableProducts/TableProducts'
import Sidebar from '../../molecules/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Button from '../../atoms/button/Button'
const TableProductsAdminPage = () => {
  return (
    <>
  
    <div className="flex h-screen">
    <div className="sm:w-1/4 w-1/4">
    <Sidebar />
    </div>
    <div className="flex-1 md:mr-32 overflow-x-auto">
    <h1 className="font-montserratBold text-2xl text-darkGrey text-center font-bold mt-2 mb-4 pt-8">GESTIÓN DE PRODUCTOS</h1>
    <div className="flex flex-row justify-center">
          <Link to="/admin/agregar-producto" target="_blank">
                      <Button
                        text="Agregar producto"
                        type="button"
                        className="bg-primaryLila drop-shadow-xl text-white hover:bg-sky-700 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 mb-2 transition duration-300 ease-in-out md:px-8"
                      />
                    </Link>
                    </div>
   <TableProducts />
   </div>
   </div>
   </>
  )
}

export default TableProductsAdminPage