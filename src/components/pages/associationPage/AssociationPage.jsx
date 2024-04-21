import React from 'react'
import {NavbarMolecule} from '../../molecules/navbar/NavbarMolecule'
import AssociationCard from '../../molecules/associationCard/AssociationCard'
import { FaAccusoft } from "react-icons/fa6";

const AssociationPage = () => {
  return (
    <>
    <NavbarMolecule/>
    <div className="flex">
      <div className="w-1/2 pr-2">
        <AssociationCard
          icon={<FaAccusoft className='text-6xl text-primaryBlue' />}
          iconPosition="left"
          title="Misión"
          description="La Asociación nace para dar solución a las necesidades económicas que sufre la familia de Deva debido a la cantidad y diversidad de terapias que necesita para lograr la mejor calidad de vida posible, a consecuencia de su pluridiscapacidad."
          additionalText="Pretende, asimismo, ser un espacio de acogida para familias que se encuentren en la misma situación, y una red de apoyo sólido y directo a la investigación del síndrome de Angelman."
        />
      </div>
      <AssociationCard
        iconPosition="left"
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
    </>
  )
}

export default AssociationPage