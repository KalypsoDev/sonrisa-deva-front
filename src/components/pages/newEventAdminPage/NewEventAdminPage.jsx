import React from 'react';
import EventFormAdmin from '../../molecules/eventFormAdmin/EventFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';

const NewEventAdminPage = ({isAuthenticated}) => {
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
      {isAuthenticated ? (
        <section>
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
        </section>
      ) : (
        <div className='text-white bg-red-600 p-10 text-center font-montserratBold font'>
          No estás autorizado para acceder a esta página.
        </div>
      )}
    </>
  );
};

export default NewEventAdminPage;
