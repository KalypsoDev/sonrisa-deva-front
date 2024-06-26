import React from 'react';
import EventFormAdmin from '../../molecules/eventFormAdmin/EventFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';
import { useNavigate } from 'react-router-dom';

const NewEventAdminPage = ({ isAuthenticated }) => {

  const navigate = useNavigate(); 
  const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    showLoadingAlert("Agregando Evento", "Por favor, espera...");

    try {
      const newEvent = await FetchApi.createEvent(formData);
      console.log('Evento agregado con éxito:', newEvent);
      showSuccessAlert("¡Evento agregado con éxito!", 
      "Aceptar",
      () => navigate('/admin/eventos'));
    } catch (error) {
      console.error('Error al agregar el evento:', error);
      showErrorAlert("¡Error al agregar el evento!", 
      "Aceptar",
      () => navigate('/admin/agregar-evento'));
    }
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
