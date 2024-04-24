import React, { useState } from 'react';
import deva7 from "../../../assets/img/deva7.png";
import { FaPlusCircle } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaDna } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import AngelmanSyndromeModal from '../../atoms/angelmanSyndromeModal/AngelmanSyndromeModal';

const AngelmanSyndrome = () => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handlesSymptomSelect = (modalTitle, modalDescription) => {
    setSelectedSymptom({ modalTitle, modalDescription });
  };

  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (
    <>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-2xl m-6 mx-auto" style={shadowStyle}>
        <img className="w-full object-cover rounded-t-lg h-full md:h-auto md:w-56 md:rounded-none md:rounded-s-lg" src={deva7} alt="Imagen Deva" />
        <div className="cardContent">
          <h1 className="flex justify-center text-center text-2xl font-montserratBold text-primaryBlue mt-4 mb-2 tracking-tight ">¿QUÉ ES EL SÍNDROME DE ANGELMAN?</h1>

          <div className="groupTherapies">
            <div className="flex p-3" onClick={() => handlesSymptomSelect('Enfermedad rara (baja prevalencia)', 'Por su baja prevalencia, el Síndrome de Angelman está considerado como enfermedad rara (su prevalencia es de 1/15000 nacimientos).')}>
              <div className="text-4xl text-primaryLila"><FaChartPie /></div>
              <div className="flex justify-center sm:items-center ml-6">
                <div>
                  <a href="#" className="text-primaryBlue text-md hover:text-primaryBlue">
                    <FaPlusCircle />
                  </a>
                </div>
                <p className="text-base font-montserratRegular ml-2">Enfermedad rara (baja prevalencia)</p>
              </div>
            </div>

            <div className="flex p-3" onClick={() => handlesSymptomSelect('Alteración genética', '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.')}>
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

            <div className="flex p-3" onClick={() => handlesSymptomSelect('Trastorno del neurodesarrollo', '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.')}>
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

            <div className="flex p-3" onClick={() => handlesSymptomSelect('Dificultad motora, de aprendizaje y de comunicación', '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor')}>
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
      <AngelmanSyndromeModal therapyOrSymptom={selectedSymptom} handleClose={() => setSelectedSymptom(null)} />
    </>
  )
}

export default AngelmanSyndrome