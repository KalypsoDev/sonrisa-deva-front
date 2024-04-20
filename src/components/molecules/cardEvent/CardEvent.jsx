import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const CardEvent = ({ event }) => {
  const { title, date, hour, location, collection, imageSrc } = event;
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const formatDate = (dateString) => {
    if (dateString.trim() === '') {
      return 'Por determinar';
    } else {
      const dateObj = new Date(dateString);
      return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
    }
  };

  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4 ">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none cursor-pointer"
        src={imageSrc}
        alt=""
        onClick={handleImageClick}
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="text-center mb-4">
          <h5 className="text-2xl justify-center font-bold text-darkBlue dark:text-white">
            {title}
          </h5>
        </div>
        <div className="mb-4">
          <div className="flex items-center my-2">
            <FaCalendarAlt className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Fecha: {formattedDate}</p>
          </div>
          <div className="flex items-center my-2">
            <FaClock className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Hora: {hour}</p>
          </div>
          <div className="flex items-center my-2">
            <FaLocationDot className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Lugar: {location}</p>
          </div>
          {collection && (
            <div className="flex items-center justify-center my-2">
              <FaHandHoldingHeart className="w-10 h-10 mr-2 text-darkBlue" />
              <div className="font-bold text-darkBlue dark:text-blue-950 flex flex-col items-center">
                <p>Recaudación</p>
                <p className="text-3xl">{collection}€</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {isZoomed && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50">
          <img
            className="object-contain fixed top-0 left-0 w-full h-full mx-auto"
            src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/mafalda.jpg"
            alt=""
            onClick={handleImageClick}
          />
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-gray-200"
            onClick={handleImageClick}
          >
            <IoCloseCircle className="w-8 h-6 mr-2 text-primaryBlue" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardEvent;


