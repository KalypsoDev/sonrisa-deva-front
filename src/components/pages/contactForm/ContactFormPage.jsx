import React from 'react'
import ContactForm from '../../molecules/contactForm/ContactForm'
import Navbar from '../../molecules/navbar/Navbar'
import Footer from '../../molecules/footer/Footer'

const ContactFormPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="bg-backgroundBlue p-1.5 pb-8 pt-6">
      <h1 className="text-2xl font-montserratBold text-primaryBlue text-center p-4'">CONTACTO</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  )
}

export default ContactFormPage