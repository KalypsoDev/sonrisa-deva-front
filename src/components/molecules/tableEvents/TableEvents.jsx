import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Pagination from '../../atoms/pagination/Pagination';


const TableEvents = () => {
    const events = [
        {title: 'Evento 1', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 1', date: '25-04-2024', hour: '10:00', collection: '500',  description: 'Descripción del Evento 1', },
        {title: 'Evento 2', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 2', date: '26-04-2024', hour: '15:00', collection: '800',  description: 'Descripción del Evento 2', },
        {title: 'Evento 3', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 3', date: '27-04-2024', hour: '18:00', collection: '1000',  description: 'Descripción del Evento 3', },
        {title: 'Evento 4', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 4', date: '28-04-2024', hour: '12:00', collection: '1200',  description: 'Descripción del Evento 4', },
        {title: 'Evento 5', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 5', date: '29-04-2024', hour: '16:00', collection: '1500',  description: 'Descripción del Evento 5', },
        {title: 'Evento 6', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 6', date: '30-04-2024', hour: '12:00', collection: '1700',  description: 'Descripción del Evento 6', },
        {title: 'Evento 7', image_url: 'https://via.placeholder.com/150', location: 'Ubicación 7', date: '01-05-2024', hour: '16:00', collection: '1900',  description: 'Descripción del Evento 7', },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    // Lógica para calcular los eventos a mostrar en la página actual
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
