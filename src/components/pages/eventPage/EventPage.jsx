import React from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import { Footer } from '../../molecules/footer/Footer';
import { FaCircleChevronLeft } from 'react-icons/fa6';
import { FaCircleChevronRight } from 'react-icons/fa6';

const EventPage = () => {
  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <h5 className="text-2xl text-primaryBlue text-center font-bold mt-2 mb-4 pt-8">AGENDA DE EVENTOS</h5>
        <p className="text-xl text-primaryBlue text-center font-bold mb-8">Si quieres realizar un evento solidario en apoyo a nuestra causa</p>
        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-bold">Próximos Eventos</p>
          <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2" />
          <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2" />
        </div>
        <div className="flex justify-center w-full mb-8">
          <div className="w-full md:w-1/2 px-4"> 
            <CardEvent />
          </div>
          <div className="w-full md:w-1/2 px-4"> 
            <CardEvent />
          </div>
        </div>

        <div className="flex justify-start items-center mb-4 pl-4 ml-4">
          <p className="text-2xl text-primaryBlue font-bold">Eventos Anteriores</p>
          <FaCircleChevronLeft className="text-primaryBlue text-3xl ml-2" />
          <FaCircleChevronRight className="text-primaryBlue text-3xl ml-2" />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-1/2 px-4"> 
            <CardEvent />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventPage;




