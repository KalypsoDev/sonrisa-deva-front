import React from 'react';
import deva9a from "../../../assets/img/deva9a.jpg";
import { FaPlusCircle } from "react-icons/fa";

const TherapiesCard = () => {
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl hover:bg-gray-100 m-6 mx-auto" style={shadowStyle}>

                <img className="w-full object-cover rounded-t-lg h-full md:h-auto md:w-56 md:rounded-none md:rounded-s-lg" src={deva9a} alt="Imagen Deva" />

                <div className="cardContent">
                    <h1 className="justify-center text-center text-2xl font-montserratBold text-primaryBlue my-4 tracking-tight">TERAPIAS</h1>

                    <div className="allTherapies font-montserratRegular text-base text-darkGrey">
                        <div className="md:flex flex-col-2">

                            <div className="text-darkGrey mb-1 flex flex-wrap">
                                <ul className="font-montserratRegular text-base">
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Fisioterapia</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia(miofuncional)</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Integración sensorial</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Psicología</li>
                                </ul>
                            </div>
                            <div className="text-darkGrey mb-2">
                                <ul className="">
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia (CAA)</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Hipoterapia</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Terapia ocupacional</li>
                                    <li className="flex pt-4 ml-4"><span className="text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Intensivo Fisioterapia Therasuit</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TherapiesCard