import React from 'react'
import TableProducts from '../../molecules/tableProducts/TableProducts'
import Sidebar from '../../molecules/sidebar/Sidebar'
import InputSearch from '../../atoms/inputSearch/InputSearch'

const TableProductsAdminPage = ({isAuthenticated}) => {
  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen">
          <div className="sm:w-1/4 w-1/4">
            <Sidebar />
          </div>
          <div className="flex-1 md:mr-32 overflow-x-auto">
            <h5 className="text-2xl text-darkGrey text-center font-bold mt-2 mb-4 pt-8">GESTIÓN DE PRODUCTOS</h5>
            <InputSearch />
            <TableProducts />
          </div>
        </div>
      ) : (
        <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
          No estás autorizado para acceder a esta página.
        </div>
      )}
    </>
  )
}

export default TableProductsAdminPage