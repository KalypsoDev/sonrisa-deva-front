import React from 'react'
import NavbarMolecule from '../../molecules/navbar/NavbarMolecule'
import ContactForm from '../../molecules/contactForm/ContactForm'
import Footer from '../../molecules/footer/Footer'

const ContactFormPage = () => {
  return (
    <section>
      <NavbarMolecule />
      <h1>CONTACTO</h1>
      <ContactForm />
      <Footer />
    </section>    
  )
}

export default ContactFormPage