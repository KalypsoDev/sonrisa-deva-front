import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Pagination from '../../atoms/pagination/Pagination';
import InputSearch from '../../atoms/inputSearch/InputSearch';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';
import { useNavigate } from 'react-router-dom';

const TableEvents = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;
    const navigate = useNavigate(); 
    const { showConfirmationAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await FetchApi.getEvents();
                const formattedEvents = eventsData.map(event => ({
                    ...event,
                    date: event.date ? formatDate(event.date) : '', 
                }));
                setEvents(formattedEvents);
                setFilteredEvents(formattedEvents); 
            } catch (error) {
                console.error('Error al obtener los eventos:', error);
            }
        };
        fetchEvents();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return ''; 
        }
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
    };

    const handleDeleteEvent = async (eventId) => {

        const confirmed = await showConfirmationAlert(
            "¿Quieres eliminar este evento?");

        if (confirmed) {

            try {
        
            await FetchApi.deleteEvent(eventId);

            showSuccessAlert("¡Evento eliminado con éxito!", "Aceptar", () => navigate('/admin/eventos'));


            const updatedEvents = events.filter(event => event.id !== eventId);
            setEvents(updatedEvents);
            setFilteredEvents(updatedEvents);
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
            showErrorAlert("¡Error al borrar el evento!",
            "Aceptar",
            () => navigate('/admin/eventos'));
        }
    } else {
        navigate('/admin/eventos');
      }
    };

    const handleDataFiltered = (filteredData) => {
        setFilteredEvents(filteredData);
    };

    const indexOfLastEvent = currentPage * perPage;
    const indexOfFirstEvent = indexOfLastEvent - perPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <InputSearch
                data={events}
                onDataFiltered={handleDataFiltered}
                searchField="title"
            />

            <div className="overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
                <div className="overflow-y-auto">
                    <table className="w-full max-w-full text-sm text-center rtl:text-right text-darkGrey">
                        <thead className="text-xs text-white bg-primaryLila">
                            <tr>
                                <th scope="col" className="px-8 py-3">
                                    Acciones
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Título del Evento
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Descripción
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Imagen
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Ubicación
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Recaudación
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Fecha
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Hora
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEvents.map((event, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-10">
                                        <Link to={`/admin/editar-evento/${event.id}`} target="_blank" className="text-xl text-greenPen flex items-center justify-center"><FaPencilAlt /></Link>
                                        <a href="#" className="text-xl text-redBin flex items-center justify-center" onClick={() => handleDeleteEvent(event.id)}><FaTrashAlt /></a>
                                    </td>
                                    <td className="px-4 py-2 font-semibold text-darkGrey">
                                        {event.title}
                                    </td>
                                    <td className="px-4 py-2">
                                        {event.description}
                                    </td>
                                    <td className="py-2">
                                        <img
                                            src={event.image_url}
                                            className="object-cover w-24 h-24 md:w-32 max-w-full max-h-full mx-auto rounded-lg"
                                            alt={event.title}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        {event.location}
                                    </td>
                                    <td className="px-4 py-2 font-semibold text-darkGrey">
                                        {event.collection} €
                                    </td>
                                    <td className="px-4 py-2 font-semibold text-darkGrey">
                                        {event.date}
                                    </td>
                                    <td className="px-4 py-2 font-semibold text-darkGrey">
                                        {event.hour}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        perPage={perPage}
                        totalItems={filteredEvents.length}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default TableEvents;




