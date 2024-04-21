import React from 'react'
import InvestigationCard from '../../molecules/investigationCard/InvestigationCard'
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule'
import { Footer } from '../../molecules/footer/Footer'

const InvestigationPage = () => {
    return (
        <>
            <NavbarMolecule />
            <section className="bg-backgroundBlue">
                <InvestigationCard />
            </section>
            <Footer />
        </>
    )
}

export default InvestigationPage