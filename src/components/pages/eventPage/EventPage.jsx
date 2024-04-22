import React, { useState, useEffect } from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import Footer from '../../molecules/footer/Footer';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import FetchApi from '../../../services/FetchApi';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingIndex, setUpcomingIndex] = useState(0);
  const [pastIndex, setPastIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await FetchApi.getEvents();
        console.log('Eventos obtenidos:', eventsData);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
    if (error.response && error.response.data && error.response.data.error) {
      // Mostrar mensaje de error específico al usuario
      alert(`Error al obtener eventos: ${error.response.data.error}`);
    } else {
      // Mostrar mensaje genérico de error
      alert('Error al obtener eventos. Por favor, inténtalo de nuevo más tarde.');
    }
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const today = new Date();
      const upcoming = events.filter(event => {
        const eventDate = event.date ? new Date(event.date) : null;
        // Mostrar eventos sin fecha definida ("Por determinar") como próximos eventos
        return !eventDate || eventDate >= today;
      });

      const past = events.filter(event => {
        const eventDate = event.date ? new Date(event.date) : null;
        return eventDate && eventDate < today;
      });

      setUpcomingEvents(upcoming);
      setPastEvents(past);
    }
  }, [events]);

  const handleUpcomingNext = () => {
    if (upcomingIndex < upcomingEvents.length - 2) {
      setUpcomingIndex(prevIndex => prevIndex + 2);
    }
  };

  const handleUpcomingPrev = () => {
    if (upcomingIndex > 0) {
      setUpcomingIndex(prevIndex => prevIndex - 2);
    }
  };

  const handlePastNext = () => {
    if (pastIndex < pastEvents.length - 2) {
      setPastIndex(prevIndex => prevIndex + 2);
    }
  };

  const handlePastPrev = () => {
    if (pastIndex > 0) {
      setPastIndex(prevIndex => prevIndex - 2);
    }
  };

  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">
            AGENDA DE EVENTOS
          </h1>
          <p className="text-sm md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">
            Si quieres realizar un evento solidario en apoyo a nuestra causa
          </p>
        </div>

        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-montserratBold">Próximos Eventos</p>
          <div className="flex items-center">
            <FaCircleChevronLeft
              className="text-primaryBlue text-3xl ml-2 cursor-pointer"
              onClick={handleUpcomingPrev}
            />
            <FaCircleChevronRight
              className="text-primaryBlue text-3xl ml-2 cursor-pointer"
              onClick={handleUpcomingNext}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mb-8">
          {upcomingEvents.slice(upcomingIndex, upcomingIndex + 2).map(event => (
            <div key={event.id} className="w-full sm:w-1/2 px-4 mb-4">
              <CardEvent
                title={event.title}
                date={event.date || 'Por determinar'} // Mostrar "Por determinar" si no hay fecha
                hour={event.hour}
                location={event.location}
                collection={event.collection}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-montserratBold">Eventos Pasados</p>
          <div className="flex items-center">
            <FaCircleChevronLeft
              className="text-primaryBlue text-3xl ml-2 cursor-pointer"
              onClick={handlePastPrev}
            />
            <FaCircleChevronRight
              className="text-primaryBlue text-3xl ml-2 cursor-pointer"
              onClick={handlePastNext}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mb-8">
          {pastEvents.slice(pastIndex, pastIndex + 2).map(event => (
            <div key={event.id} className="w-full sm:w-1/2 px-4 mb-4">
              <CardEvent
                title={event.title}
                date={event.date}
                hour={event.hour}
                location={event.location}
                collection={event.collection}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventPage;