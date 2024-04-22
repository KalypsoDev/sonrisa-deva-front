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
      <div className='mt-7'>
        <h1 className='font-montserratBold text-center text-2xl'>AGENDA DE EVENTOS</h1>
        <EventFormAdmin
          title="PLANIFICAR UN EVENTO"
          submitButtonText="Agregar"
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
};

export default NewEventAdminPage;
