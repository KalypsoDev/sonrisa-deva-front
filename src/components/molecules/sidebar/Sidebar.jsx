import React from 'react'
import sonrisaDevaSmallLogo from "../../../assets/img/smallLogo.jpg";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

                <div className="h-full px-2 py-3 overflow-y-auto bg-primaryLila">

                    <div className="flex justify-center p-3">
                        <h2 className="flex items-center p-3 text-white font-montserratBold text-lg">
                            <span className="flex flex-col items-center">
                                <span className="whitespace-nowrap">Panel de</span>
                                <span className="whitespace-nowrap">Administración</span>
                            </span>
                        </h2>
                    </div>

                    <Link to="/admin" className="flex justify-center mb-6">
                        <img className="rounded-full w-24 h-24 border-2 border-primaryBlue" src={sonrisaDevaSmallLogo} alt="Sonrisa de Deva Logo" />
                    </Link>

                    <div>
                        <Link to="/admin" className="flex items-center mb-2 p-2 text-white font-montserratRegular text-base">
                            <MdOutlineDashboard />
                            <span className="flex-1 ms-2 whitespace-nowrap">Gestión de la página</span>
                        </Link>
                    </div>

                    <ul className="font-montserratRegular text-sm">

                        <li>
                            <Link to="/admin/productos-solicitados" className="flex items-center p-1 text-white">
                                <span className="flex-1 ms-8 whitespace-nowrap">Productos solicitados</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/eventos" className="flex items-center p-1 text-white">
                                <span className="flex-1 ms-8 whitespace-nowrap">Agenda de eventos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/agregar-producto" className="flex items-center p-1 text-white">
                                <span className="flex-1 ms-8 whitespace-nowrap">Agregar productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/productos" className="flex items-center p-1 text-white">
                                <span className="flex-1 ms-8 whitespace-nowrap">Gestión de productos</span>
                            </Link>
                        </li>

                    </ul>

                    <div>
                        <Link to="/" target="_blank" className="flex items-center mt-2 p-2 text-white font-montserratRegular text-base">
                            <FaGlobe />
                            <span className="flex-1 ms-2 whitespace-nowrap">Ir a mi página</span>
                        </Link>
                    </div>

                    <div className="flex justify-center">
                        <button type="button" className="text-white font-montserratBold text-sm bg-darkBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Cerrar sesión
                        </button>
                    </div>

                </div>

            </aside>
        </>
    )
}

export default Sidebar