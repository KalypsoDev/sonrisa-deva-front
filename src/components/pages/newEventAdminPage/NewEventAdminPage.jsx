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
    
          <div className='flex flex-row'>
    <div className="w-1/4 md:w-1/4">
      <Sidebar />
      </div>
    
          <div className="w-3/4 md:w-3/4 mr-16">
          <h1 className=" font-montserratBold text-2xl text-darkGrey text-center mt-2 mb-4 pt-8">
            AGENDA DE EVENTOS
          </h1>
        <EventFormAdmin
          title="PLANIFICAR UN EVENTO"
          submitButtonText="Agregar"
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
         </div>
         </div>
    
    </>
  );
};

export default NewEventAdminPage;
