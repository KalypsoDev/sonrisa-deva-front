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

          <div className="cardContent">

            <h5 className="flex justify-center text-lg font-montserratBold  mb-2 tracking-tight text-primaryBlue dark:text-white">¿QUÉ ES EL SÍNDROME DE ANGELMAN?</h5>
           
            <div className="groupTherapies">
              
              <div className="flex p-3">
                <div className="text-4xl text-primaryLila">
                  <FaChartPie />
                </div>
                <div className="flex justify-center sm:items-center ml-6">
                  <div>
                    <a href="#" className="text-primaryBlue text-md hover:text-primaryBlue">
                      <FaPlusCircle />
                    </a>
                  </div>
                  <p className="text-base font-montserratRegular ml-2">Enfermedad rara (baja prevalencia)</p>
                </div>
              </div>

              <div className="flex p-3">
                <div className="text-4xl text-primaryLila">
                  <FaDna />
                </div>
                <div className="flex justify-center sm:items-center ml-6">
                  <div>
                    <a href="#" className="text-primaryBlue text-md hover:text-primaryBlue">
                      <FaPlusCircle />
                    </a>
                  </div>
                  <p className="text-base font-montserratRegular ml-2">Alteración genética</p>
                </div>
              </div>

              <div className="flex p-3">
                <div className="text-4xl text-primaryLila">
                  <FaBrain />
                </div>
                <div className="flex justify-center sm:items-center ml-6">
                  <div>
                    <a href="#" className="text-primaryBlue text-md hover:text-primaryBlue">
                      <FaPlusCircle />
                    </a>
                  </div>
                  <p className="text-base font-montserratRegular ml-2">Trastorno del neurodesarrollo</p> 
                </div>            
              </div>

              <div className="flex p-3">
                <div className="text-4xl text-primaryLila">
                  <FaPencil />
                </div>
                <div className="flex justify-center sm:items-center ml-6">
                  <div>
                    <a href="#" className="text-primaryBlue text-md hover:text-primaryBlue">
                      <FaPlusCircle />
                    </a>
                  </div> 
                  <p className="text-base font-montserratRegular ml-2">Dificultad motora, de aprendizaje y de comunicación</p>  
                </div>         
              </div>

            </div>
          </div>
        </div>
     </>
  )
}

export default AngelmanSyndrome