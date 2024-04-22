import React from 'react'
import deva8a from "../../../assets/img/deva8a.jpg";
import { FaPlusCircle } from "react-icons/fa";

const TherapiesCard = () => {
  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (
    <>
    <div className="flex flex-col md:flex-row mx-auto bg-white border-gray-200 rounded-lg shadow-md md:max-w-4xl m-6" style={shadowStyle}>
                <div className="flex flex-col items-center w-fit rounded-t-lg md:rounded-l-lg h-72 md:h-auto md:w-80 md:flex-none md:justify-center">
                    <img className="w-full md:h-auto" src={deva8a} alt="Deva Therapies" />
                </div>
                <div className="flex flex-col w-full justify-evenly p-4 leading-normal">
                    <div className="text-center">
                        <h1 className="text-2xl font-montserratBold text-primaryBlue">
                            TERAPIAS
                        </h1>
                    </div>
                    <div className="flex flex-col-2 w-full justify-center">
                        <div className="text-darkGrey mb-1 p-2">
                            <ul className="">
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Fisioterapia</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia(miofuncional)</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Integración sensorial</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Psicología</li>
                            </ul>
                        </div>

                        <div className="text-darkGrey mb-2 p-2">
                            <ul className="">
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Logopedia (CAA)</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Hipoterapia</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Terapia ocupacional</li>
                                <li className="font-montserratRegular"><span className="font-montserratRegular text-primaryLila text-2xl px-1"><FaPlusCircle /></span> Intensivo Fisioterapia Therasuit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default TherapiesCard