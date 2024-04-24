import React, { useState, useEffect } from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import Navbar from '../../molecules/navbar/Navbar';
import Footer  from '../../molecules/footer/Footer';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import FetchApi from '../../../services/FetchApi';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button/Button';

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
        setEvents(eventsData);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
    if (error.response && error.response.data && error.response.data.error) {
      alert(`Error al obtener eventos: ${error.response.data.error}`);
    } else {
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
      <Navbar />
      <section className="bg-backgroundBlue min-h-screen">
        <div className="container flex flex-col justify-center items-center mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">
            AGENDA DE EVENTOS
          </h1>
          <p className="text-sm md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">
            Si quieres realizar un evento solidario en apoyo a nuestra causa
          </p>
          <span>
          <Link to="/formulario-contacto">
                      <Button
                        text="¡Contáctanos!"
                        type="button"
                        className="font-montserratBold bg-white drop-shadow-xl text-primaryBlue hover:bg-sky-700 hover:shadow-2xl hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-2 transition duration-300 ease-in-out"
                      />
                    </Link>
                    </span>
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
                date={event.date || 'Por determinar'}
                image_url={event.image_url}
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
                image_url={event.image_url}
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