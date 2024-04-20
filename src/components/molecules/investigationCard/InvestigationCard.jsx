import React from 'react'
import { FaCoins } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";

const InvestigationCard = () => {
    return (
        <>
            <div class="flex flex-col md:flex-row mx-auto bg-white border-gray-200 rounded-lg shadow-md md:max-w-4xl m-4">
                <div class="flex flex-col items-center justify-center bg-darkBlue rounded-t-lg md:rounded-l-lg h-96 md:h-auto md:w-56 md:flex-none md:justify-center">
                    <div class="w-44 flex items-center justify-center mb-5">
                        <img class="w-full md:h-auto" src="src\assets\img\FastSpain 1.png" alt="Fast Spain Logo" />
                    </div>
                    <p class="text-white font-montserratRegular text-center px-4 py-2 md:text-left">FAST es una fundación, sin ánimo de lucro, que trabaja para curar el síndrome de Angelman. Su objetivo es llevar un tratamiento seguro y eficaz a la práctica médica actual lo más rápido posible.</p>
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal w-full">
                    <div class="text-center mb-4">
                        <h5 class="text-2xl justify-center font-montserratBold text-primaryBlue">
                            INVESTIGACIÓN
                        </h5>
                    </div>
                    <div class="flex flex-col w-full">
                        <div class="text-darkGrey mb-4 p-2">
                            <p class="font-montserratRegular text-lg mb-2">Actualmente hay <span class="font-montserratRegular text-3xl px-1">24</span> programas de investigación en curso:</p>
                            <ul class="">
                                <li class="font-montserratRegular"><span class="font-montserratRegular text-3xl px-1">4</span> son ya ensayos clínicos en marcha con humanos</li>
                                <li class="font-montserratRegular"><span class="font-montserratRegular text-3xl px-1">10</span> están en fases avanzadas de estudios con animales u organoides (neuronas desarrolladas a partir de muestras de pacientes)</li>
                                <li class="font-montserratRegular"><span class="font-montserratRegular text-3xl px-1">7</span></li>
                                <li class="font-montserratRegular"><span class="font-montserratRegular text-3xl px-1">3</span> están en la etapa inicial de exploración básica</li>
                            </ul>
                        </div>
                        <div class="flex justify-between">
                            <div class="bg-darkBlue dark:bg-blue-800 text-white border border-gray-200 rounded-lg shadow-md w-1/2 p-2">
                                <div class="flex items-center justify-center mb-2">
                                    <FaCoins className='text-5xl' />
                                </div>
                            </div>
                            <div class="bg-darkBlue dark:bg-blue-800 text-white border border-gray-200 rounded-lg shadow-md w-1/2 p-2 ml-2">
                                <div class="flex items-center justify-center mb-2">
                                    <FaHospital className='text-5xl' />
                                </div>
                            </div>
                        </div>
                        <div class="text-darkGrey  font-montserratRegular p-2 mt-4">
                            <p class="text-lg">Desde la Asociación La Sonrisa de Deva apoyamos el avance de la investigación para lograr la tan ansiada cura. Si quieres saber lo que llevamos donado a FAST en el año vigente, <a href="https://www.cureangelman.es/donations/deva-diaz-rodriguez" target="_blank" className='underline font-montserratBold'>clica aquí</a>.</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default InvestigationCard