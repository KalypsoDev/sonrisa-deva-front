import React from 'react'
import Navbar from '../../molecules/navbar/Navbar'
import AboutMe from '../../molecules/aboutMe/AboutMe'
import Footer from '../../molecules/footer/Footer'

const AboutMePage = () => {
  return (
    <>
    <Navbar />
    <section className="bg-backgroundBlue p-1.5">
      <AboutMe />
    </section>
    <Footer />
  </>
  )
}

export default AboutMePage