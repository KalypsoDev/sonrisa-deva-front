import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';

const NewProductAdminPage = ({ isAuthenticated }) => {

    const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        showLoadingAlert("Agregando Producto", "Por favor, espera...");

        try {
            const newProduct = await FetchApi.createProduct(formData);
            console.log('Producto agregado con éxito:', newProduct);
            showSuccessAlert("¡Producto agregado con éxito!");
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            showErrorAlert("¡Error al agregar el producto!");
        }
    };

    const handleCancel = () => {
        console.log('Creación de producto cancelada');
    };

    return (
        <>
            {isAuthenticated ? (
                <section>
                    <Sidebar />
                    <ProductFormAdmin
                        title="AGREGAR PRODUCTO"
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    />
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
