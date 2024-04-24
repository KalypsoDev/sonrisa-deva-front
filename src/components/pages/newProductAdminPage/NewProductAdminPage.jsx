import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';

const NewProductAdminPage = ({ isAuthenticated }) => {
    const handleSubmit = async (formData) => {
        try {
            const newProduct = await FetchApi.createProduct(formData);
            console.log('Producto creado exitosamente:', newProduct);
        } catch (error) {
            console.error('Error al crear el producto:', error);
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
