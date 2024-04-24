import React from 'react'
import Button from "../../atoms/button/Button"

const ContactForm = () => {
  return (
    <form className="bg-darkBlue font-montserratRegular rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-4">
      <div className="font-montserratRegular text-base text-darkGrey grid justify-items-center sm:grid-cols-2 gap-8 p-4">
        <div className="inputsRightSide w-full font-montserratRegular text-base">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-4 text-sm font-base text-white">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block mb-4 text-sm font-base text-white">Apellido</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Apellido"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-4 text-sm font-base text-white">Email</label>
            <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" />
          </div>
        </div >

        <div className="inputsLeftSide w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-4 text-sm font-base text-white">Asunto</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Asunto"
              required
            />
          </div>
          <div className="">
            <label htmlFor="description" className="block mb-4 text-sm font-base text-white">Mensaje (Requerido*)</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Déjamos aquí tu mensaje"
            ></textarea>
          </div>
        </div>

      </div>
      <div className="text-center">
        <Button type="submit" className="font-montserratBold inline-flex items-center ml-0 px-6 py-2.5 mt-0 sm:mt-0 text-sm font-base text-center text-primaryBlue bg-white rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800" text="Enviar" />
      </div>
    </form>
  )
}

export default ContactForm