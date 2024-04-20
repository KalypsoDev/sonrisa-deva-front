import React, { useState, useEffect } from 'react';

const EventFormAdmin = ({ title, onSubmit, onCancel, event }) => {
    const [formData, setFormData] = useState({
        title: '',
        image_url: null,
        location: '',
        date: '',
        hour: '',
        collection: '',
        description: '',
    });

    useEffect(() => {
        if (event) {
            setFormData({
                title: event.title || '',
                image_url: event.image_url || null,
                location: event.location || '',
                date: event.date || '',
                hour: event.hour || '',
                collection: event.collection || '',
                description: event.description || '',
            });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'image_url' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
            <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-1">{title}</h1>
            <hr className="w-full my-3 border-gray-300" />
            <div className="flex flex-col sm:flex-row w-full font-montserratRegular">
                <div className="flex flex-col w-full sm:w-2/3 justify-center">
                    <div className="mb-1 w-full sm:w-4/5 text-center">
                        <label htmlFor="title" className="block mb-1 text-lg text-white">Título del evento</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-1 w-full sm:w-4/5 text-center">
                        <label htmlFor="location" className="block mb-1 text-lg text-white">Ubicación del evento</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-1 w-full sm:w-4/5 text-center">
                        <label htmlFor="hour" className="block mb-1 text-lg text-white">Hora del evento</label>
                        <input
                            type="time"
                            id="hour"
                            name="hour"
                            value={formData.hour}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-1 w-full sm:w-4/5 text-center relative">
                        <label htmlFor="date" className="block mb-1 text-lg text-white">Fecha del evento</label>
                        <div className="relative">
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="mb-1 w-full sm:w-4/5 text-center">
                        <label htmlFor="description" className="block mb-1 text-lg text-white">Descripción del evento</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full sm:w-1/2 items-center mb-1 sm:mb-0">
                    <h2 className="text-center text-lg text-white mb-1">Imagen</h2>
                    <img
                        className="w-full h-60 mb-5 rounded-lg"
                        src={formData.image_url ? URL.createObjectURL(formData.image_url) : 'https://via.placeholder.com/250'}
                        alt="Imagen de Evento"
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
                    <div className="mb-1 w-full text-center">
                        <label htmlFor="collection" className="block mb-1 text-lg text-white">Recaudación total</label>
                        <input
                            type="number"
                            id="collection"
                            name="collection"
                            value={formData.collection}
                            onChange={handleChange}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                </div>
                
            </div>
            <div>
                <button type="submit" className="text-white bg-darkBlue hover:bg-primaryBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-montserratBold rounded-lg text-lg px-6 py-2 mt-5 mr-5">{title === 'AGREGAR EVENTO' ? 'Agregar' : 'Editar'}</button>
                <button type="button" onClick={onCancel} className="text-primaryLila bg-white hover:text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-montserratBold rounded-lg text-lg px-6 py-2 mt-5">Cancelar</button>
            </div>
        </form>
    );
};

export default EventFormAdmin;
