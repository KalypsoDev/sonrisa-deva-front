import React, { useState, useEffect } from 'react';

const ProductFormAdmin = ({ title, onSubmit, onCancel, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        stock: '',
        price: '',
        image_url: null,
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                stock: product.stock || 0,
                price: product.price || 0,
                image_url: product.image_url || null,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'image_url' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e, formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
            <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">{title}</h1>
            <hr className="w-full my-3 border-gray-300" />
            <div className="flex flex-col sm:flex-row w-full">
                <div className="flex flex-col w-full sm:w-2/3 justify-center">
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="name" className="block mb-2 text-lg text-white text-center font-montserratRegular">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="stock" className="block mb-2 text-lg text-center text-white font-montserratRegular">Cantidad</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="price" className="block mb-2 text-lg text-center text-white font-montserratRegular">Precio</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-dark text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>

                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="description" className="block mb-2 text-lg text-center text-white font-montserratRegular">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg resize-none"
                            required
                        />
                    </div>

                </div>
                <div className="flex flex-col w-full sm:w-1/2 items-center mb-3 sm:mb-0">
                    <h2 className="text-center text-lg text-white mb-2 font-montserratRegular">Imagen</h2>
                    <img
                        className="w-full h-60 mb-5 rounded-lg"
                        src={formData.image_url ? URL.createObjectURL(formData.image_url) : 'https://via.placeholder.com/250'}
                        alt="Imagen de Producto"
                    />
                    <label htmlFor="image_url" className="block text-sm font-medium text-white text-center"></label>
                    <input
                        type="file"
                        id="image_url"
                        name="image_url"
                        onChange={handleChange}
                        className="block w-full mb-3 mt-2 text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-white border-gray-500 placeholder-gray-400"
                        accept="image/*"
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="text-white font-montserratBold bg-darkBlue hover:bg-primaryBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5 mr-5">{title === 'AGREGAR PRODUCTO' ? 'Agregar' : 'Editar'}</button>
                <button type="button" onClick={onCancel} className="text-primaryLila font-montserratBold bg-white hover:text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5">Cancelar</button>
            </div>
        </form>
    );
};

export default ProductFormAdmin;
