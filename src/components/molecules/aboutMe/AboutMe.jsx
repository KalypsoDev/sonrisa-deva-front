import React from 'react'
import deva8 from "../../../assets/img/deva8.jpg";

const AboutMe = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl m-6 mx-auto" style={shadowStyle}>
                <img className="w-full object-cover rounded-t-lg h-full md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" src={deva8} alt="Imagen Deva" />
                <div className="groupTherapies font-montserratRegular text-base text-darkGrey flex mx-6">
                    <div className="flex flex-col">

                        <h1 className="flex justify-center text-center font-montserratBold text-2xl text-darkGrey tracking-tight text-primaryBlue my-2">ACERCA DE MÍ</h1>

                        <p className="p-2">¡Hola! Me llamo Deva y nací un 27 de agosto de 2018. Solo un año más tarde me diagnosticaron síndrome de Angelman. Este diagnóstico, acompañado de un alto porcentaje de discapacidad y el grado más alto de dependencia cambiaría todos los planes que mi familia tenía para mí.</p>

                        <p className="p-2">Desde ese mismo día trabajo muy duro en distintas terapias para lograr derribar las barreras impuestas por un capricho genético.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
