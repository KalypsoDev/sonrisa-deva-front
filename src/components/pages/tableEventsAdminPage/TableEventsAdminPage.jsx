import React from "react";
import TableEvents from "../../molecules/tableEvents/TableEvents";
import Sidebar from "../../molecules/sidebar/Sidebar";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";

const TableEventsAdminPage = ({isAuthenticated}) => {
  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen">
          <div className="sm:w-1/4 w-1/4">
            <Sidebar />
          </div>
          <div className="flex-1 md:mr-16 overflow-x-auto">
            <h1 className=" font-montserratBold text-2xl text-darkGrey text-center mt-2 mb-4 pt-8">
              AGENDA DE EVENTOS
            </h1>
            <div className="flex flex-row justify-center">
              <Link to="/admin/agregar-evento" target="_blank">
                <Button
                  text="Crear evento"
                  type="button"
                  className="bg-primaryLila drop-shadow-xl text-white hover:bg-sky-700 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 mb-2 transition duration-300 ease-in-out md:px-8"
                />
              </Link>
            </div>
            <TableEvents />
          </div>
        </div>
      ) : (<div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
        No estás autorizado para acceder a esta página.
      </div>
      )}
    </>
  );
};

export default TableEventsAdminPage;
