import React from 'react';
import EventFormAdmin from '../../molecules/eventFormAdmin/EventFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';

const NewEventAdminPage = () => {

  const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    showLoadingAlert("Agregando Evento", "Por favor, espera...");

    try {
      const newEvent = await FetchApi.createEvent(formData);
      console.log('Evento agregado con éxito:', newEvent);
      showSuccessAlert("¡Evento agregado con éxito!");
    } catch (error) {
      console.error('Error al agregar el evento:', error);
      showErrorAlert("¡Error al agregar el evento!");
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
