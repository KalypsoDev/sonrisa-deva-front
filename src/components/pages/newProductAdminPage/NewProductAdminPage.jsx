import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';

const NewProductAdminPage = ({ isAuthenticated }) => {
    const handleSubmit = async (formData) => {
        try {
            await FetchApi.createProduct(formData);
        } catch (error) {
            console.error('Error al crear el producto:', error);
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
