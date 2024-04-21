import React from 'react'
import TableEvents from '../../molecules/tableEvents/TableEvents'
import Sidebar from '../../molecules/sidebar/Sidebar'
import InputSearch from '../../atoms/inputSearch/InputSearch'

const TableEventsAdminPage = () => {
  return (
    <>
    <div className="flex h-screen">
    <div className="sm:w-1/4 w-1/4">
    <Sidebar />
    </div>
    <div className="flex-1 md:mr-16 overflow-x-auto">
    <h1 className=" font-montserratBold text-2xl text-darkGrey text-center mt-2 mb-4 pt-8">AGENDA DE EVENTOS</h1>
    <InputSearch />
    <TableEvents />
    </div>
   </div>
    </>
  )
}

export default TableEventsAdminPage