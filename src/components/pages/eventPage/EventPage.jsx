import React from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import { Footer } from '../../molecules/footer/Footer';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const EventPage = () => {
  const events = [
    { id: 1, title: 'Evento 1', date: '', hour: '12:00', location: 'Avilés', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Evento 2', date: '2024-05-17', hour: '12:00', location: 'León', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 3, title: 'Evento 3', date: '2024-01-20', hour: '12:00', location: 'Oviedo', collection: '1100', imageSrc: 'https://picsum.photos/200/300' },
    { id: 4, title: 'Evento 4', date: '2024-02-14', hour: '12:00', location: 'Gijón', collection: '2000', imageSrc: 'https://picsum.photos/200/300' }
  ];

  const today = new Date(); // Fecha actual

  // Filtrar eventos según si son próximos o anteriores a la fecha actual
  const upcomingEvents = events.filter(event => {
    // Verificar si la fecha está vacía o es una fecha válida
    if (!event.date) {
      return true; // Si la fecha está vacía, se considera "por determinar"
    } else {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    }
  });

  const pastEvents = events.filter(event => {
    // Verificar si la fecha está vacía o es una fecha válida
    if (!event.date) {
      return false; // Si la fecha está vacía, no se considera en eventos pasados
    } else {
      const eventDate = new Date(event.date);
      return eventDate < today;
    }
  });

  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">AGENDA DE EVENTOS</h1>
          <p className="text-sm md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">Si quieres realizar un evento solidario en apoyo a nuestra causa</p>
        </div>
        
        {/* Sección de Próximos Eventos */}
        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-bold">Próximos Eventos</p>
          <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2" />
          <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2" />
        </div>
        <div className="flex justify-center w-full mb-8">
          {upcomingEvents.map(event => (
            <div key={event.id} className="w-full md:w-1/2 px-4"> 
              <CardEvent event={event} />
            </div>
          ))}
        </div>

        {/* Sección de Eventos Anteriores */}
        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-bold">Eventos Anteriores</p>
          <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2" />
          <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2" />
        </div>
        <div className="flex justify-center w-full">
          {pastEvents.map(event => (
            <div key={event.id} className="w-full md:w-1/2 px-4"> 
              <CardEvent event={event} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventPage;








