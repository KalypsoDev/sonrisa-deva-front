import React from 'react'
import AngelmanSyndrome from '../../molecules/angelmanSyndrome/AngelmanSyndrome'
import Navbar from '../../molecules/navbar/Navbar'
import Footer from '../../molecules/footer/Footer'

const AngelmanSyndromePage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
        <AngelmanSyndrome />
      </section>
      <Footer />
    </>
  )
}

export default AngelmanSyndromePage