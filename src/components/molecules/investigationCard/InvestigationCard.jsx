import React, { useState } from 'react';
import fastSpainLogo from "../../../assets/img/FastSpainLogo.png";
import { FaCoins } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";

const InvestigationCard = () => {
    const [isHoveredCoin, setIsHoveredCoin] = useState(false);
    const [isHoveredHospital, setIsHoveredHospital] = useState(false);

    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col md:flex-row mx-auto bg-white border-gray-200 rounded-lg shadow-md md:max-w-4xl m-6" style={shadowStyle}>
                <div className="flex flex-col items-center justify-center bg-darkBlue rounded-t-lg md:rounded-l-lg h-72 md:h-auto md:w-56 md:flex-none md:justify-center">
                    <div className="w-44 flex items-center justify-center mb-5">
                        <img className="w-full md:h-auto" src={fastSpainLogo} alt="Logo Fast Spain" />
                    </div>
                    <p className="text-white font-montserratRegular text-center px-4 py-2 md:text-left">FAST es una fundación, sin ánimo de lucro, que trabaja para curar el síndrome de Angelman. Su objetivo es llevar un tratamiento seguro y eficaz a la práctica médica actual lo más rápido posible.</p>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="text-center mb-4">
                        <h5 className="text-2xl justify-center font-montserratBold text-primaryBlue">
                            INVESTIGACIÓN
                        </h5>
                    </div>

                    <div className="flex flex-col w-full">
                        <div className="text-darkGrey mb-4 p-2">
                            <p className="font-montserratRegular text-lg mb-2">Actualmente hay <span className="font-montserratRegular text-3xl px-1">24</span> programas de investigación en curso:</p>
                            <ul className="">
                                <li className="font-montserratRegular mb-2">
                                    <div className='flex items-center'>
                                        <span className="font-montserratRegular text-3xl w-6 md:w-8 text-end">4</span>
                                        <span className="ml-4">son ya ensayos clínicos en marcha con humanos</span>
                                    </div>
                                </li>
                                <li className="font-montserratRegular mb-2">
                                    <div className='flex items-center'>
                                        <span className="font-montserratRegular text-3xl w-6 md:w-8 text-end">10</span>
                                        <span className="ml-4">están en fases avanzadas de estudios con animales u organoides (neuronas desarrolladas a partir de muestras de pacientes)</span>
                                    </div>
                                </li>

                                <li className="font-montserratRegular mb-2">
                                    <div className='flex items-center'>
                                        <span className="font-montserratRegular text-3xl w-6 md:w-8 text-end">7</span>
                                        <span className="ml-4">están en etapas intermedias</span>
                                    </div>
                                </li>

                                <li className="font-montserratRegular mb-2">
                                    <div className='flex items-center'>
                                        <span className="font-montserratRegular text-3xl w-6 md:w-8 text-end">3</span>
                                        <span className="ml-4">están en la etapa inicial de exploración básica</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    <div className="flex justify-evenly">
                        <div className="flex justify-center mr-3">
                            <div className={`bg-darkBlue dark:bg-blue-800 text-white border border-gray-200 rounded-lg shadow-md w-full p-5 flex flex-col items-center hover:transform hover:scale-100 transition-transform ${isHoveredCoin ? 'w-96' : ''}`} onMouseEnter={() => setIsHoveredCoin(true)} onMouseLeave={() => setIsHoveredCoin(false)}>
                                <div className="flex items-center justify-center mb-4 px-3 sm:px-14">
                                    {isHoveredCoin ? null : <FaCoins className='text-5xl' />}
                                </div>
                                <div className="flex w-full relative">
                                    {isHoveredCoin ? null : <span className="text-white text-2xl px-2 absolute bottom-[-10px] right-[-5px]">+</span>}
                                </div>
                                {isHoveredCoin && (
                                    <p className="text-white font-montserratRegular text-center px-4 text-sm">
                                        De todos estos programas, 13 de ellos cuentan con la financiación de FAST
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center ml-3">
                            <div className={`bg-darkBlue dark:bg-blue-800 text-white border border-gray-200 rounded-lg shadow-md w-full p-5 flex flex-col items-center hover:transform hover:scale-100 transition-transform ${isHoveredHospital ? 'w-96' : ''}`} onMouseEnter={() => setIsHoveredHospital(true)} onMouseLeave={() => setIsHoveredHospital(false)}>
                                <div className="flex items-center justify-center mb-4 px-3 sm:px-14">
                                    {isHoveredHospital ? null : <FaHospital className='text-5xl' />}
                                </div>
                                <div className="flex w-full relative">
                                    {isHoveredHospital ? null : <span className="text-white text-2xl px-2 absolute bottom-[-10px] right-[-5px]">+</span>}
                                </div>
                                {isHoveredHospital && (
                                    <p className="text-white font-montserratRegular text-center px-4 text-xs">
                                        En apenas cinco años se espera no solo que ya haya tres potenciales tratamientos aprobados por la FDA (Agencia americana del medicamento), sino hasta doce ensayos clínicos en curso para otros posibles tratamientos del síndrome de Angelman.
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="text-darkGrey  font-montserratRegular p-2 mt-4">
                        <p className="text-lg">Desde la Asociación <span className='text-primaryBlue'>La Sonrisa de Deva</span> apoyamos el avance de la investigación para lograr la tan ansiada cura. Si quieres saber lo que llevamos donado a FAST en el año vigente, <a href="https://www.cureangelman.es/donations/deva-diaz-rodriguez" target="_blank" className='underline font-montserratBold hover:text-primaryBlue'>clica aquí</a>.</p>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default InvestigationCard;
