import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchApi from '../../../services/FetchApi';
import Button from '../../atoms/button/Button';
import { Link } from "react-router-dom";
import useSweetAlerts from '../../../services/useSweetAlerts';
import { useNavigate } from 'react-router-dom';

const EditEventFormAdmin = ({ title }) => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate(); 
    const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await FetchApi.getEventId(id);
                setEvent({
                    title: eventData.data.title,
                    image_url: eventData.data.image_url,
                    location: eventData.data.location,
                    date: eventData.data.date,
                    hour: eventData.data.hour,
                    collection: eventData.data.collection,
                });
            } catch (error) {
                console.error('Error al obtener el evento:', error);
            }
        };

        fetchEvent();
    }, [id]);

    const formatHour = (time) => {
        const [hours, minutes] = time.split(':');
        return `${hours}:${minutes}`;
    };

    const convertDateFormat = (date) => {
        if (date.match(/^\d{2}-\d{2}-\d{4}$/)) {
            return date;
        }

        const parts = date.split('-');
        if (parts.length === 3) {
            return `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        return date;
    };

    const handleFieldChange = (fieldName, value) => {
        setEvent(prevEvent => ({
            ...prevEvent,
            [fieldName]: value
        }));
    };


    const handleImageChange = (e) => {
        const { name, files } = e.target;

        if (files && files.length > 0) {
            const selectedFile = files[0];

            const reader = new FileReader();
            reader.onload = function (event) {
                const fileUrl = event.target.result;

                setEvent(prevEvent => ({
                    ...prevEvent,
                    image: selectedFile,
                    image_url: fileUrl
                }));
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setEvent(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        showLoadingAlert("Actualizando Evento", "Por favor, espera...");

        try {
            if (!event) {
                console.error('El evento es undefined.');
                return;
            }

            const formattedEvent = {
                ...event,
                hour: formatHour(event.hour),
                date: convertDateFormat(event.date)
            };

            await FetchApi.updateEvent(id, formattedEvent);
            showSuccessAlert("¡Evento actualizado con éxito!", 
            "Aceptar",
            () => navigate('/admin/eventos'));
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
            showErrorAlert("¡Error al actualizar el evento!", 
            "Aceptar",
            () => navigate('/admin/eventos'));
        }
    };

    if (!event) {
        return <div className='text-center'>Cargando...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-primaryLila shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
            <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-1">{title}</h1>
            <hr className="w-full my-3 border-gray-300" />
            <div className="flex flex-col sm:flex-row w-full font-montserratRegular">
                <div className="flex flex-col w-full sm:w-2/3 justify-center">
                    <div className="mb-4 w-full sm:w-4/5 text-center">
                        <label htmlFor="title" className="block mb-1 text-lg text-white">Título del evento</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={event.title}
                            onChange={(e) => handleFieldChange('title', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-4/5 text-center">
                        <label htmlFor="location" className="block mb-1 text-lg text-white">Ubicación del evento</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={event.location}
                            onChange={(e) => handleFieldChange('location', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-4/5 text-center">
                        <label htmlFor="hour" className="block mb-1 text-lg text-white">Hora del evento</label>
                        <input
                            type="time"
                            id="hour"
                            name="hour"
                            value={event.hour}
                            onChange={(e) => handleFieldChange('hour', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-4/5 text-center relative">
                        <label htmlFor="date" className="block mb-1 text-lg text-white">Fecha del evento</label>
                        <div className="relative">
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={event.date}
                                onChange={(e) => handleFieldChange('date', e.target.value)}
                                className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                                required
                            />
                        </div>
                    </div>
                
                </div>
                <div className="flex flex-col w-full sm:w-1/2 items-center mb-1 sm:mb-0">
                    <h2 className="text-center text-lg text-white mb-1">Imagen</h2>
                    <img
                        className="w-full h-60 mb-5 rounded-lg"
                        src={event.image_url}
                        alt="Imagen de Evento"
                    />
                    <label htmlFor="image_url" className="block text-sm font-medium text-white text-center"></label>
                    <input
                        type="file"
                        id="image_url"
                        name="image_url"
                        onChange={handleImageChange}
                        className="block w-full mb-3 mt-2 text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-white border-gray-500 placeholder-gray-400"
                        accept="image/*"
                    />
                    <div className="mb-1 w-full text-center">
                        <label htmlFor="collection" className="block mb-1 text-lg text-white">Recaudación total</label>
                        <input
                            type="number"
                            id="collection"
                            name="collection"
                            value={event.collection}
                            onChange={(e) => handleFieldChange('collection', e.target.value)}
                            className="bg-white border border-opacity-20 border-gray-300 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
                        />
                    </div>
                </div>

            </div>
            <div>
                <Button
                    type="submit"
                    className="text-white font-montserratBold bg-darkBlue text-base focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-2 mt-5 mr-5"
                    text="Actualizar"
                />
                <Link to="/admin/eventos">
                    <Button
                        type="submit"
                        className="text-white font-montserratBold bg-redBin text-base focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-2 mt-5 mr-5"
                        text="Cancelar"
                    />
                </Link>
            </div>
        </form>
    );
}

export default EditEventFormAdmin;
