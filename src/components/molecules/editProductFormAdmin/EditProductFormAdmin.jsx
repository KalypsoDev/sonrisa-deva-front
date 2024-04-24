import React, { useState, useEffect } from 'react';
import FetchApi from '../../../services/FetchApi';
import { useParams } from 'react-router-dom';
import Button from '../../atoms/button/Button';

const EditProductFormAdmin = (tu ) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await FetchApi.getProductId(id);
                setProduct({
                    name: productData.data.name,
                    stock: productData.data.stock,
                    price: productData.data.price,
                    description: productData.data.description,
                    image_url: productData.data.image_url
                });
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleFieldChange = (fieldName, value) => {
        setProduct({ ...product, [fieldName]: value });
    };


    const handleImageChange = (e) => {
        const { name, files } = e.target;

        if (files && files.length > 0) {
            const selectedFile = files[0];

            const reader = new FileReader();
            reader.onload = function (event) {
                const fileUrl = event.target.result;

                setProduct(prevProduct => ({
                    ...prevProduct,
                    image: selectedFile,
                    image_url: fileUrl
                }));
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {

                console.log(product);
                await FetchApi.updateProduct(id, product);
            } else {
                console.error('El objeto product es undefined.');
            }
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    if (!product) {
        return <div className='text-center'>Cargando...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
            <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">Editar Producto</h1>
            <hr className="w-full my-3 border-gray-300" />
            <div className="flex flex-col sm:flex-row w-full">
                <div className="flex flex-col w-full sm:w-2/3 justify-center">
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="name" className="block mb-2 text-lg text-white text-center font-montserratRegular">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={(e) => handleFieldChange('name', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-darkGrey text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="stock" className="block mb-2 text-lg text-center text-white font-montserratRegular">Cantidad</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={product.stock}
                            onChange={(e) => handleFieldChange('stock', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-darkGrey text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="price" className="block mb-2 text-lg text-center text-white font-montserratRegular">Precio</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={(e) => handleFieldChange('price', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-darkGrey text-dark text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-3 w-full sm:w-4/5">
                        <label htmlFor="description" className="block mb-2 text-lg text-center text-white font-montserratRegular">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={(e) => handleFieldChange('description', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-darkGrey text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg resize-none"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full sm:w-1/2 items-center mb-3 sm:mb-0">
                    <h2 className="text-center text-lg text-white mb-2 font-montserratRegular">Imagen</h2>
                    <img
                        className="w-full h-60 mb-5 rounded-lg"
                        src={product.image_url}
                        alt="Imagen de Producto"
                    />
                    <label htmlFor="image_url" className="block text-sm font-medium text-white text-center"></label>
                    <input
                        type="file"
                        id="image_url"
                        name="image_url"
                        onChange={handleImageChange}
                        className="block w-full mb-3 mt-2 text-sm border rounded-lg cursor-pointer text-darkGrey focus:outline-none bg-white border-gray-500 placeholder-gray-400"
                        accept="image/*"
                    />
                </div>
            </div>
            <div>

                <Button
                    type="submit"
                    className="text-white font-montserratBold bg-darkBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5 mr-5"
                    text="Editar" />
                <Link to="/admin/productos">
                    <Button
                        type="submit"
                        className="text-white font-montserratBold bg-redBin focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5 mr-5"
                        text="Cancelar"
                        />
                </Link>
                {/* <button type="submit" className="text-white font-montserratBold bg-darkBlue hover:bg-primaryBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5 mr-5">Guardar Cambios</button> */}
                {/* <button type="button" onClick={onCancel} className="text-primaryLila font-montserratBold bg-white hover:text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 mt-5">Cancelar</button> */}
            </div>
        </form>
    );
}

export default EditProductFormAdmin;
