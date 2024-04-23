import React from 'react'
import deva8 from "../../../assets/img/deva8.jpg";
import { FaPlusCircle } from "react-icons/fa";

const AboutMe = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl hover:bg-gray-100 m-20 mx-auto" style={shadowStyle}>

                <div className="flex flex-col items-center w-fit rounded-t-lg md:rounded-l-lg h-72 md:h-auto md:w-80 md:flex-none md:justify-center">
                    <img className="rounded-lg w-full md:h-auto" src={deva8} alt="Deva Therapies" />
                </div>

                <div className="flex flex-col w-full justify-evenly md:pb-4 leading-normal">
                    <div className="text-center mb-14">
                        <h1 className="text-2xl font-montserratBold text-primaryBlue">ACERCA DE Mí</h1>
                    </div>

                    <div className="md:flex flex-col-2 w-full justify-center">
                        <div className="text-darkGrey mb-1 p-2">
                            <p>¡Hola! Me llamo Deva y nací un 27 de agosto de 2018. Solo un año más tarde me diagnosticaron síndrome de Angelman. Este diagnóstico, acompañado de un alto porcentaje de discapacidad y el grado más alto de dependencia cambiaría todos los planes que mi familia tenía para mí.</p>
                        </div>
                        <div className="text-darkGrey mb-2 p-2">
                            <p>Desde ese mismo día trabajo muy duro en distintas terapias para lograr derribar las barreras impuestas por un capricho genético.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutMe