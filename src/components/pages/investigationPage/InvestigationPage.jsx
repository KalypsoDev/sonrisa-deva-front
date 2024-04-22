import React from 'react'
import InvestigationCard from '../../molecules/investigationCard/InvestigationCard'
import Navbar from '../../molecules/navbar/Navbar'
import Footer from '../../molecules/footer/Footer'

const InvestigationPage = () => {
    return (
        <>
            <Navbar/>
            <section className="bg-backgroundBlue p-1.5">
                <InvestigationCard />
            </section>
            <Footer />
        </>
    )
}

export default InvestigationPage