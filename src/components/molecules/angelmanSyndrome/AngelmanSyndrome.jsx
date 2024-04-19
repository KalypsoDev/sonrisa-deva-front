import React from 'react'
import deva7 from "../../../assets/img/deva7.png";
import { FaPlusCircle } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaDna } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

const AngelmanSyndrome = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-20">
        <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={deva7} alt="" />

        <div className="flex flex-col justify-between p-4 leading-normal">

          <h5 className="mb-2 text-2xl font-montserratBold tracking-tight text-gray-900 dark:text-white">Síndrome de Angelman</h5>
          <div>

            <div>
              <div className="text-4xl text-primaryLila">
                <FaChartPie />
              </div>
              <div className="flex justify-center sm:items-center">
                <a href="#" className=" text-2xl font-montserratRegular text-primaryBlue text-md hover:text-primaryBlue">
                <FaPlusCircle />
                </a>
                <p>Enfermedad rara (baja prevalencia)</p>
              </div>
             
            </div>

            <div>
              <div className="text-4xl text-primaryLila">
                <FaDna />
              </div>

              <a href="#" className="font-montserratRegular text-primaryBlue text-md hover:text-primaryBlue">
                <FaPlusCircle />
                <p>Alteración genética</p>
              </a>
            </div>

            <div>
              <div className="text-4xl text-primaryLila">
                <FaBrain />
              </div>

              <a href="#" className="font-montserratRegular text-primaryBlue text-md hover:text-primaryBlue">
                <FaPlusCircle />
                <p>Trastorno del neurodesarrollo</p>
              </a>
            </div>

            <div>
              <div className="text-4xl text-primaryLila">
                <FaPencil />
              </div>

              <a href="#" className="font-montserratRegular text-primaryBlue text-md hover:text-primaryBlue">
                <FaPlusCircle />
                <p>Dificultad motora, de aprendizaje y de comunicación</p>
              </a>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default AngelmanSyndrome