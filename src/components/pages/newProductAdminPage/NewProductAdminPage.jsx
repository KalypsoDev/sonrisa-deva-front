import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';

const NewProductAdminPage = () => {
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
        <div className='flex flex-row'>
        <div className="w-1/4 md:w-1/4">
            <Sidebar />
            </div>
            <div className="w-3/4 md:w-3/4">
            <ProductFormAdmin
                title="AGREGAR PRODUCTO"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
            </div>
            </div>
           
        </>
    );
};

export default NewProductAdminPage;
