import React, { useState, useEffect } from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import { Footer } from '../../molecules/footer/Footer';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const EventPage = () => {
  const events = [
    { id: 1, title: 'Evento 1', date: '', hour: '12:00', location: 'Avilés', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Evento 2', date: '2024-05-17', hour: '12:00', location: 'León', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 3, title: 'Evento 3', date: '2024-01-20', hour: '12:00', location: 'Oviedo', collection: '1100', imageSrc: 'https://picsum.photos/200/300' },
    { id: 4, title: 'Evento 4', date: '2024-02-14', hour: '12:00', location: 'Gijón', collection: '2000', imageSrc: 'https://picsum.photos/200/300' },
    { id: 5, title: 'Evento 5', date: '2024-02-15', hour: '12:00', location: 'Gijón', collection: '2000', imageSrc: 'https://picsum.photos/200/300' },
    { id: 6, title: 'Evento 6', date: '', hour: '12:00', location: 'Avilés', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 7, title: 'Evento 7', date: '2024-03-17', hour: '12:00', location: 'León', collection: '700', imageSrc: 'https://picsum.photos/200/300' },
    { id: 8, title: 'Evento 8', date: '2024-10-20', hour: '12:00', location: 'Oviedo', collection: '', imageSrc: 'https://picsum.photos/200/300' },
    { id: 9, title: 'Evento 9', date: '2024-02-22', hour: '12:00', location: 'Gijón', collection: '2000', imageSrc: 'https://picsum.photos/200/300' },
    { id: 10, title: 'Evento 10', date: '2024-07-23', hour: '12:00', location: 'Gijón', collection: '', imageSrc: 'https://picsum.photos/200/300' }
  ];

  const [visibleUpcomingEvents, setVisibleUpcomingEvents] = useState([]);
  const [visiblePastEvents, setVisiblePastEvents] = useState([]);
  const [upcomingIndex, setUpcomingIndex] = useState(0);
  const [pastIndex, setPastIndex] = useState(0);

  useEffect(() => {
    const today = new Date();

    // Filtrar eventos próximos
    const upcoming = events.filter(event => {
      if (!event.date) {
        return true; // Evento sin fecha (por determinar)
      } else {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      }
    });

    // Filtrar eventos pasados
    const past = events.filter(event => {
      if (!event.date) {
        return false; // Evento sin fecha (no considerado en eventos pasados)
      } else {
        const eventDate = new Date(event.date);
        return eventDate < today;
      }
    });

    setVisibleUpcomingEvents(upcoming);
    setVisiblePastEvents(past);
  }, [events]); // Actualizar cuando cambian los eventos

  const renderUpcomingEvents = () => {
    const slicedUpcoming = visibleUpcomingEvents.slice(upcomingIndex, upcomingIndex + 2);
    return slicedUpcoming.map(event => (
      <div key={event.id} className="w-full md:w-1/2 px-4"> 
        <CardEvent event={event} />
      </div>
    ));
  };

  const renderPastEvents = () => {
    const slicedPast = visiblePastEvents.slice(pastIndex, pastIndex + 2);
    return slicedPast.map(event => (
      <div key={event.id} className="w-full md:w-1/2 px-4"> 
        <CardEvent event={event} />
      </div>
    ));
  };

  const handleUpcomingNext = () => {
    if (upcomingIndex < visibleUpcomingEvents.length - 2) {
      setUpcomingIndex(prevIndex => prevIndex + 2);
    }
  };

  const handleUpcomingPrev = () => {
    if (upcomingIndex > 0) {
      setUpcomingIndex(prevIndex => prevIndex - 2);
    }
  };

  const handlePastNext = () => {
    if (pastIndex < visiblePastEvents.length - 2) {
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
      <section className="bg-backgroundBlue">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">AGENDA DE EVENTOS</h1>
          <p className="text-sm md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">Si quieres realizar un evento solidario en apoyo a nuestra causa</p>
        </div>
        
        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-montserratBold">Próximos Eventos</p>
          <div className="flex items-center">
            <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2 cursor-pointer" onClick={handleUpcomingPrev} />
            <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2 cursor-pointer" onClick={handleUpcomingNext} />
          </div>
        </div>
        <div className="flex justify-center w-full mb-8">
          {renderUpcomingEvents()}
        </div>

        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-montserratBold">Eventos Anteriores</p>
          <div className="flex items-center">
            <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2 cursor-pointer" onClick={handlePastPrev} />
            <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2 cursor-pointer" onClick={handlePastNext} />
          </div>
        </div>
        <div className="flex justify-center w-full">
          {renderPastEvents()}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventPage;

