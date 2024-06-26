import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';
import { useNavigate } from 'react-router-dom';

const NewProductAdminPage = ({ isAuthenticated }) => {

    const navigate = useNavigate(); 
    const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        showLoadingAlert("Agregando Producto", "Por favor, espera...");

        try {
            const newProduct = await FetchApi.createProduct(formData);
            console.log('Producto agregado con éxito:', newProduct);
            showSuccessAlert("¡Producto agregado con éxito!", 
            "Aceptar",
            () => navigate('/admin/productos'));
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            showErrorAlert("¡Error al agregar el producto!", 
            "Aceptar",
            () => navigate('/admin/agregar-producto'));
        }
    };

    return (
        <>
            {isAuthenticated ? (
                <section>
                    <div className='flex flex-row'>
                        <div className="w-1/4 md:w-1/4">
                            <Sidebar />
                        </div>
                        <div className="w-3/4 md:w-3/4 mr-16">
                            <ProductFormAdmin
                                title="AGREGAR PRODUCTO"
                                onSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </section>
            ) : (
                <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
                    No estás autorizado para acceder a esta página.
                </div>
            )}
        </>
    );
};

export default NewProductAdminPage;
