import React from 'react'
import Navbar from '../../molecules/navbar/Navbar'
import TherapiesCard from '../../molecules/therapies/TherapiesCard'
import Footer from '../../molecules/footer/Footer'


const TherapiesPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
        <TherapiesCard />
      </section>
      <Footer />
    </>
  )
}

export default TherapiesPage