import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLock  } from "react-icons/fa";


const LoginFormAdmin = () => {
    return (
    <form className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-darkBlue shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
        <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">ACCEDE COMO ADMINISTRADOR</h1>
        <hr className="w-full my-3 border-gray-300" />

        <div className="flex flex-col w-full sm:w-2/3 font-montserratRegular text-darkGrey p-8">
        <label className="block mb-5 text-sm text-white text-center">Email</label>
            <div className="relative mb-5 w-full sm:w-5/4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaEnvelope />
                </div>
                    <input type="text" id="AddressIcon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Email" />
            </div>
            <label className="block mb-5 text-sm text-white text-center">Contraseña</label>
            <div className="relative mb-5 w-full sm:w-5/4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaLock />
                </div>
                    <input type="text" id="lockIcon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Contraseña" />
            </div>
        </div>
        
        <div>
            <button type="submit" className="text-darkBlue bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-montserratBold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
        </div>
    </form > 
    )
}

export default LoginFormAdmin