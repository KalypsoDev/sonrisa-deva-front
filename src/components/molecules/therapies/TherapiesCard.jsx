import React from 'react';
import deva9 from "../../../assets/img/deva9.jpg";
import { FaPlusCircle } from "react-icons/fa";

const TherapiesCard = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl hover:bg-gray-100 m-20 mx-auto" style={shadowStyle}>

                <div className="flex flex-col items-center w-fit rounded-t-lg md:rounded-l-lg h-72 md:h-auto md:w-80 md:flex-none md:justify-center">
                    <img className="rounded-lg w-full md:h-auto" src={deva9} alt="Deva Therapies" />
                </div>

                <div className="flex flex-col w-full justify-evenly md:pb-4 leading-normal">
                    <div className="text-center mb-14">
                        <h1 className="text-2xl font-montserratBold text-primaryBlue">TERAPIAS</h1>
                    </div>

                    <div className="md:flex flex-col-2 w-full justify-center">
                        <div className="text-darkGrey mb-1 p-2">
                            <ul className="font-montserratRegular text-base">
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Fisioterapia</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia(miofuncional)</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Integración sensorial</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Psicología</li>
                            </ul>
                        </div>
                        <div className="text-darkGrey mb-2 p-2">
                            <ul className="">
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia (CAA)</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Hipoterapia</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Terapia ocupacional</li>
                                <li className="flex pb-8"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Intensivo Fisioterapia Therasuit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TherapiesCard