import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Pagination from '../../atoms/pagination/Pagination';
import FetchApi from '../../../services/FetchApi';

const TableEvents = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await FetchApi.getEvents();
                const formattedEvents = eventsData.map(event => ({
                    ...event,
                    date: event.date ? formatDate(event.date) : '', // Formatear la fecha o devolver cadena vacía si no hay fecha
                }));
                setEvents(formattedEvents);
            } catch (error) {
                console.error('Error al obtener los eventos:', error);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return ''; // Si la fecha no es válida, devuelve una cadena vacía
        }
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
    };

    const indexOfLastEvent = currentPage * perPage;
    const indexOfFirstEvent = indexOfLastEvent - perPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg font-montserratRegular">
            <div className="overflow-y-auto">
                <table className="w-full max-w-full text-sm text-center rtl:text-right text-darkGrey dark:text-gray-400">
                    <thead className="text-xs text-white bg-primaryLila dark:bg-gray-700 dark:text-gray-400">
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
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-4 py-2 flex items-center justify-center space-x-4 mt-10">
                                    <a href="#" className="text-xl text-greenPen dark:text-red-500 flex items-center justify-center"><FaPencilAlt /></a>
                                    <a href="#" className="text-xl text-redBin dark:text-red-500 flex items-center justify-center"><FaTrashAlt /></a>
                                </td>
                                <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
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
                                <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                                    {event.collection} €
                                </td>
                                <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                                    {event.date}
                                </td>
                                <td className="px-4 py-2 font-semibold text-darkGrey dark:text-white">
                                    {event.hour}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    perPage={perPage}
                    totalItems={events.length}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default TableEvents;


