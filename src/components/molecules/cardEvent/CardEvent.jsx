import React from "react";

const CardEvent = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/mafalda.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="text-center mb-4">
          <h5 className="text-2xl font-bold text-blue-950 dark:text-white">
            Título del Evento
          </h5>
        </div>
        <div className="mb-4">
          <p className="font-bold text-blue-950 dark:text-blue-950">Fecha:</p>
          <p className="font-bold text-blue-950 dark:text-blue-950">Hora:</p>
          <p className="font-bold text-blue-950 dark:text-blue-950">Lugar:</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-blue-950 dark:text-blue-950">
            Recaudación
          </p>
          <p className="font-bold text-blue-950 dark:text-blue-950 text-3xl">
            2000€
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardEvent;
