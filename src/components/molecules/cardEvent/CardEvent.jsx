import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const CardEvent = ({ title, image_url, date, hour, location, collection }) => {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString.trim() === '') {
      return 'Por determinar';
    } else {
      const dateObj = new Date(dateString);
      // Verifica si el resultado es un valor válido de fecha
      if (isNaN(dateObj.getTime())) {
        return 'Por determinar';
      } else {
        return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
      }
    }
  };

  const formatHour = (hourString) => {
    if (!hourString || hourString.trim() === '') {
      return 'Por determinar';
    } else {
      // Separar la hora y los minutos del string de la hora
      const [hourPart, minutePart] = hourString.split(':');
      // Devolver la hora formateada con minutos
      return `${hourPart}:${minutePart}`;
    }
  };

  const formattedDate = formatDate(date);
  const formattedHour = formatHour(hour);

 


  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4" style={shadowStyle}>
      <div className="flex flex-col md:flex-row">
        <img
          className="object-cover w-full md:w-1/2 h-72 md:h-auto max-h-80 cursor-pointer"
          src={image_url}
          alt=""
          onClick={handleImageClick}
        />
        <div className="flex flex-col justify-between p-4 w-full md:w-1/2 max-w-lg">
          <div className="text-center mb-4">
            <h5 className="text-xl mt-10 font-montserratBold text-darkBlue dark:text-white">{title}</h5>
          </div>
          <div className="mb-4">
            <div className="flex items-center my-2">
              <FaCalendarAlt className="w-6 h-6 mr-2 text-darkBlue" />
              <p className="font-montserratBold text-darkBlue dark:text-blue-950">Fecha: {formattedDate}</p>
            </div>
            <div className="flex items-center my-2">
              <FaClock className="w-6 h-6 mr-2 text-darkBlue" />
              <p className="font-montserratBold text-darkBlue dark:text-blue-950">Hora: {formattedHour}</p>
            </div>
            <div className="flex items-center my-2">
              <FaLocationDot className="w-6 h-6 mr-2 text-darkBlue" />
              <p className="font-montserratBold text-darkBlue dark:text-blue-950">Lugar: {location}</p>
            </div>
            {collection && collection !== '0' && (
              <div className="flex items-center justify-center my-2">
                <FaHandHoldingHeart className="w-10 h-10 mr-2 text-darkBlue" />
                <div className="font-montserratBold text-darkBlue dark:text-blue-950 flex flex-col items-center">
                  <p>Recaudación</p>
                  <p className="text-lg">{collection}€</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isZoomed && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <img
            className="object-contain max-h-full mx-auto"
            src={image_url}
            alt=""
            onClick={handleImageClick}
          />
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-gray-200"
            onClick={handleImageClick}
          >
            <IoCloseCircle className="w-8 h-8 mr-2 text-primaryBlue" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardEvent;