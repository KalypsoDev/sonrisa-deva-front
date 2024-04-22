import React from 'react';
import EventFormAdmin from '../../molecules/eventFormAdmin/EventFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';

const NewEventAdminPage = () => {
    const handleSubmit = async (formData) => {
        try {
            const newEvent = await FetchApi.createEvent(formData);
            console.log('Evento creado exitosamente:', newEvent);
        } catch (error) {
            console.error('Error al crear el evento:', error);
        }
    };

    const handleCancel = () => {
        console.log('Creación de evento cancelada');
    };

    return (
        <>
            <Sidebar />
            <EventFormAdmin
                title="AGREGAR EVENTO"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </>
    );
};

export default NewEventAdminPage;
