import React, { useState } from 'react';
import deva9a from "../../../assets/img/deva9a.jpg";
import { FaPlusCircle } from "react-icons/fa";
import AngelmanSyndromeModal from '../../atoms/angelmanSyndromeModal/AngelmanSyndromeModal';

const TherapiesCard = () => {
    const [selectedTherapy, setSelectedTherapy] = useState(null);

  const handlesTherapySelect = (modalTitle, modalDescription) => {
    setSelectedTherapy({ modalTitle, modalDescription });
  };
    
    const shadowStyle = {
        boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl m-6 mx-auto" style={shadowStyle}>

                <img className="w-full object-cover rounded-t-lg h-full md:h-auto md:w-56 md:rounded-none md:rounded-s-lg" src={deva9a} alt="Imagen Deva" />

                <div className="cardContent">
                    <h1 className="justify-center text-center text-2xl font-montserratBold text-primaryBlue my-4 tracking-tight">TERAPIAS</h1>

                    <div className="allTherapies font-montserratRegular text-base text-darkGrey">
                        <div className="md:flex flex-col-2">

                            <div className="text-darkGrey mb-1 flex flex-wrap">
                                <ul className="font-montserratRegular text-base">
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Fisioterapia', 'Me ayuda a mejorar mis capacidades físicas y la eficacia de mis movimientos. Uno de los objetivos principales es conseguir una marcha autónoma no solo funcional sino de calidad, controlando la postura y siendo capaz de actuar ante cualquier obstáculo.')}><FaPlusCircle /></span> Fisioterapia</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Logopedia(miofuncional)', 'Se centra en la musculatura orofacial con los objetivos de reducir la hipersensibilidad de la zona, mejorar el proceso de deglución, reducir el babeo y la ansiedad por llevar cosas a la boca.')}><FaPlusCircle /></span> Logopedia(miofuncional)</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Integración sensorial', 'Los niños con síndrome de Angelman solemos tener dificultades en gestionar e integrar ciertos estímulos. A través de distintos ambientes se generan nuevas experiencias a través de las cuales aprendo a tolerar, integrar y organizar distintas sensaciones.')}><FaPlusCircle /></span> Integración sensorial</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Psicología', 'Para estimular y mejorar mis habilidades cognitivas, perceptivas y comunicativas a través del juego y de mis preferencias (táctiles, visuales y auditivas)')}><FaPlusCircle /></span> Psicología</li>
                                </ul>
                            </div>
                            <div className="text-darkGrey mb-2">
                                <ul className="">
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Logopedia (CAA)', 'El objetivo principal es mejorar mis habilidades comunicativas, ayudándome en la implantación de un SAAC (sistema alternativo y aumentativo de comunicación) para que algún día pueda expresarme a través de mi iPad, ya que no se espera que vaya a tener lenguaje oral. En el proceso, y siempre a través del juego, mejoramos los tiempos de atención, espera y cognición.')}><FaPlusCircle /></span> Logopedia (CAA)</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Hipoterapia', 'El balanceo del caballo me ayuda en el equilibrio y el control postural. También influye positivamente en el desarrollo cognitivo, físico, emocional y social.')}><FaPlusCircle /></span> Hipoterapia</li>
                                    <li className="flex p-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Terapia ocupacional', 'El objetivo es ayudarme a desenvolverme de forma lo más autónoma posible en las distintas actividades básicas de la vida diaria (control de esfínteres, uso de cubiertos, vestido/desvestido, etc.)')}><FaPlusCircle /></span> Terapia ocupacional</li>
                                    <li className="flex pt-4 ml-4"><span className="text-primaryLila text-2xl px-1" onClick={() => handlesTherapySelect('Intensivo Fisioterapia Therasuit', 'Se realiza preferentemente cada 6 meses. Es una terapia intensiva de fisioterapia, ya que se realiza durante 3 horas diarias en un período de entre 2 y 4 semanas. El traje Therasuit ayuda a colocar correctamente las partes del cuerpo en los movimientos que buscan la funcionalidad y la máxima autonomía a nivel motor.')}><FaPlusCircle /></span> Intensivo Fisioterapia Therasuit</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div >
            <AngelmanSyndromeModal therapy={selectedTherapy} handleClose={() => setSelectedTherapy(null)} />
        </>
    )
}

export default TherapiesCard