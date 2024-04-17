import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const CardEvent = () => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4" 
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg hover:scale-150"
        src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/mafalda.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="text-center mb-4">
          <h5 className="text-2xl justify-center font-bold text-darkBlue dark:text-white">
            Título del Evento
          </h5>
        </div>
        <div className="mb-4">
          <div className="flex items-center my-2">
            <FaCalendarAlt className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Fecha:</p>
          </div>
          <div className="flex items-center my-2">
            <FaClock className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Hora:</p>
          </div>
          <div className="flex items-center my-2">
            <FaLocationDot className="w-8 h-6 mr-2 text-darkBlue" />
            <p className="font-bold text-darkBlue dark:text-blue-950">Lugar:</p>
          </div>
          <div className="flex items-center justify-center my-2">
            <FaHandHoldingHeart className="w-10 h-10 mr-2 text-darkBlue" />
            <div className="font-bold text-darkBlue dark:text-blue-950 flex flex-col items-center">
              <p>Recaudación</p>
              <p className="text-3xl">2000€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
