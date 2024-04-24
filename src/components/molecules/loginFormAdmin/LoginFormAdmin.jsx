import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaLock  } from "react-icons/fa";
import Button from "../../atoms/button/Button"
import FetchApi from '../../../services/FetchApi';

const LoginFormAdmin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await FetchApi.login(formData);
            console.log('Usuario logueado correctamente:', response);

            setTimeout(() => {
              navigate("/admin");
            }, 100);

        } catch (error) {
            console.error('Error al loguear usuario:', error);
            setErrorMessage('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

    return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-darkBlue shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
        <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">ACCEDE COMO ADMINISTRADOR</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <hr className="w-full my-3 border-gray-300" />

        <div className="flex flex-col w-full sm:w-2/3 font-montserratRegular text-darkGrey p-8">
        <label htmlFor="email" className="block mb-5 text-sm text-white text-center">Email</label>
            <div className="relative mb-5 w-full sm:w-5/4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaEnvelope />
                </div>
                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Email" required />
            </div>
            <label htmlFor="password" className="block mb-5 text-sm text-white text-center">Contraseña</label>
            <div className="relative mb-5 w-full sm:w-5/4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaLock />
                </div>
                    <input type="password" id="password" name='password' value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Contraseña" required />
            </div>
        </div>
        
        <div className="text-center">
        <Button type="submit" className="font-montserratBold inline-flex items-center ml-0 px-6 py-2.5 mt-0 sm:mt-0 text-sm font-base text-center text-primaryBlue bg-white rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800" text="Iniciar sesión" />
      </div>
    </form > 
    )
}

export default LoginFormAdmin
