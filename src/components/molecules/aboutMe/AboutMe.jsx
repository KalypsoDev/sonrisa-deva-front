import React from 'react'
import deva8 from "../../../assets/img/deva8.jpg";
import { FaPlusCircle } from "react-icons/fa";

const AboutMe = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl hover:bg-gray-100 m-20 mx-auto" style={shadowStyle}>
                <img className="w-full object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={deva8} alt="Imagen Deva" />
                <div className="cardContent">

                    <h1 className="flex justify-center text-center text-lg font-montserratBold mt-4 mb-2 tracking-tight text-primaryBlue">ACERCA DE MÍ</h1>

                    <div className="flex groupTherapies">

                        <div className="flex p-3">
                            <p>¡Hola! Me llamo Deva y nací un 27 de agosto de 2018. Solo un año más tarde me diagnosticaron síndrome de Angelman. Este diagnóstico, acompañado de un alto porcentaje de discapacidad y el grado más alto de dependencia cambiaría todos los planes que mi familia tenía para mí.</p>

                            <p>Desde ese mismo día trabajo muy duro en distintas terapias para lograr derribar las barreras impuestas por un capricho genético.</p>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default AboutMe
