import React from 'react';
import CardEvent from '../../molecules/cardEvent/CardEvent';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import { Footer } from '../../molecules/footer/Footer';

const EventPage = () => {
  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue flex flex-col min-h-screen">
        <h5 className="text-2xl text-primaryBlue text-center font-bold mb-4 mt-6">AGENDA DE EVENTOS</h5>
        <p className="text-xl text-primaryBlue text-center font-bold mb-8">Si quieres realizar un evento solidario en apoyo a nuestra causa</p>
        <p className="text-2xl text-primaryBlue font-bold mb-4 text-left pl-4">Próximos Eventos</p>
        <div className="flex justify-center w-full mb-8">
          <div className="w-full md:w-1/2 px-4"> 
            <CardEvent />
          </div>
          <div className="w-full md:w-1/2 px-4"> 
            <CardEvent />
          </div>
        </div>
        <p className="text-2xl text-primaryBlue font-bold mb-4 text-left pl-4">Eventos Anteriores</p>
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



