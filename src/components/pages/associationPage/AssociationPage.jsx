import React from 'react';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import Footer from '../../molecules/footer/Footer';
import AssociationCard from '../../molecules/associationCard/AssociationCard';
import { FaRibbon } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const AssociationPage = () => {
  return (
    <>
      <NavbarMolecule />
      <section className='bg-backgroundBlue pt-7 relative'>
        <div className="flex justify-items-center">
          <div className="flex flex-wrap md:flex-row md:justify-center">
            <div className="w-full md:w-1/2 flex justify-end relative">
              <AssociationCard
                icon={<FaRibbon className='text-6xl text-primaryBlue' />}
                title="Misión"
                description="La Asociación nace para dar solución a las necesidades económicas que sufre la familia de Deva debido a la cantidad y diversidad de terapias que necesita para lograr la mejor calidad de vida posible, a consecuencia de su pluridiscapacidad."
                additionalText="Pretende, asimismo, ser un espacio de acogida para familias que se encuentren en la misma situación, y una red de apoyo sólido y directo a la investigación del síndrome de Angelman."
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-start relative mb-28 md:mb-0">
              <AssociationCard
                icon={<FaHandHoldingHeart className='text-6xl text-primaryBlue' />}
                title="Valores"
                description="- Participación 
                       - Respeto
                       - Inclusión 
                       - Transparencia 
                       - Lucha
                       - Resiliencia
                       - Ayuda"
              />
            </div>
            <img src="src\assets\isotipo.jpg" alt="Isologo" className="rounded-full h-48 w-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="w-full md:w-1/2 flex justify-end relative mt-28 md:mt-0 text-center">
              <AssociationCard
                icon={<FaBullseye className='text-6xl text-primaryBlue' />}
                title="Valores"
                description="- Participación 
                       - Respeto
                       - Inclusión 
                       - Transparencia 
                       - Lucha
                       - Resiliencia
                       - Ayuda"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-start relative">
              <AssociationCard
                icon={<FaCalendarAlt className='text-6xl text-primaryBlue' />}
                title="Actividades"
                description="
              1. Difusión de las características del síndrome, evolución de la investigación científica y peculiaridades de Deva en redes sociales y medios de comunicación.
              2. Organización de eventos solidarios.
              3. Cooperación y colaboración con diversas entidades sin ánimo de lucro en el cumplimiento de sus fines (Fundación Fast España, Asociación Síndrome de Angelman España, y otras con fines similares y principios compatibles con los de LA SONRISA DE DEVA)."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AssociationPage;
