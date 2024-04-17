import React from 'react'

const ContactForm = () => {
  return (

    <div className="bg-greenPen dark:bg-gray-800 rounded-2xl shadow-lg p-4 max-w-screen-lg mx-auto my-8">
    <section className="bg-darkBlue dark:bg-gray-900">
  
        <form action="#">

          <div className="grid justify-items-center sm:grid-cols-2 gap-2 p-6">

            <div className="inputsRightSide">
              <div className="w-96 mb-4">
                <label htmlFor="name" className="block mb-4 text-sm font-medium text-white dark:text-white">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="w-96 mb-4">
                <label htmlFor="brand" className="block mb-4 text-sm font-medium text-white dark:text-white">Apellido</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Apellido"
                  required
                />
              </div>
              <div className="w-96 mb-4">
                <label for="email" class="block mb-4 text-sm font-medium text-white dark:text-white">Email</label>
                <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
              </div>
            </div >

            <div className="inputsLeftSide">
              <div className="w-96 mb-4">
                <label htmlFor="name" className="block mb-4 text-sm font-medium text-white dark:text-white">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div className="w-96">
                <label htmlFor="description" className="block mb-4 text-sm font-medium text-white dark:text-white">Mensaje (Requerido*)</label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Descríbenos aquí la razón por la que te comunicas con nosotros"
                ></textarea>
              </div>
            </div>
      
          </div>
          <div className="text-center mt-4">
              <button
              type="submit"
              className="inline-flex items-center ml-4 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-primaryBlue bg-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Enviar
                </button>
            </div>
        </form>
     
    </section>
    </div>

  )
}

export default ContactForm