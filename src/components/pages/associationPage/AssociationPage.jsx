import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import AssociationCard from '../../molecules/associationCard/AssociationCard';
import { FaRibbon } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const AssociationPage = () => {
  return (
    <>
      <Navbar />
      <section className='bg-backgroundBlue relative'>
        <h1 className='text-primaryBlue text-center font-montserratBold text-xl pt-5 md:text-2xl'>LA ASOCIACION LA SONRISA DE DEVA</h1>
        <div className="flex justify-items-center">
          <div className="flex flex-wrap md:flex-row md:justify-center">
            <div className="w-full md:w-1/2 flex justify-end relative text-start">
              <AssociationCard
                icon={<FaRibbon className='text-6xl text-primaryBlue' />}
                title="Misión"
                description="La Asociación nace para dar solución a las necesidades económicas que sufre la familia de Deva debido a la cantidad y diversidad de terapias que necesita para lograr la mejor calidad de vida posible, a consecuencia de su pluridiscapacidad."
                additionalText="Pretende también ser un espacio de acogida para familias que se encuentren en la misma situación, y una red de apoyo sólido y directo a la investigación del síndrome de Angelman."
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-start relative mb-56 md:mb-0 text-end">
              <AssociationCard
                icon={<FaBullseye className='text-6xl text-primaryBlue' />}
                title="Objetivos"
                description={[
                  <span><strong>1.</strong> <strong>Visibilizar</strong> y concienciar sobre el síndrome de Angelman</span>,
                  <span><strong>2.</strong> Recaudar <strong>fondos para investigar</strong> su tratamiento</span>,
                  <span><strong>3.</strong> <strong>Financiar</strong> el acceso a <strong> terapias y/o aparatos ortoprotésicos</strong> que mejoren la calidad de vida de Deva y/o otros niños en su situación.</span>,
                  <span><strong>4.</strong> Fomentar la <strong>inclusión</strong> de personas con diversidad funcional en todos los ámbitos de la sociedad.</span>
                ]}
              />

            </div>
            <img src="src\assets\img\asociacion-deva.png" alt="Imagen Deva" className="border-4 border-primaryBlue rounded-full h-48 w-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="w-full md:w-1/2 flex justify-end relative mt-28 md:mt-0 text-start">
              <AssociationCard
                icon={<FaHandHoldingHeart className='text-6xl text-primaryBlue' />}
                title="Valores"
                description={[
                  "- Participación",
                  "- Respeto",
                  "- Inclusión",
                  "- Transparencia",
                  "- Lucha",
                  "- Resiliencia",
                  "- Ayuda"
                ]}
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-start relative text-end">
              <AssociationCard
                icon={<FaCalendarAlt className='text-6xl text-primaryBlue' />}
                title="Actividades"
                description={[
                  <span><strong>1.</strong> <strong>Difusión</strong> en redes sociales y medios de comunicación de los rasgos del síndrome, investigación y peculiaridades de Deva.</span>,
                  <span><strong>2.</strong> Organización y divulgación de diversos <strong> eventos solidarios.</strong></span>,
                  <span><strong>3.</strong> <strong>Cooperación y colaboración</strong> con entidades sin ánimo de lucro en el cumplimiento de sus fines (Fundación Fast España, Asociación Síndrome de Angelman España, y otras con fines similares y principios compatibles con los de LA SONRISA DE DEVA).</span>
                ]}
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
