import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';

const LegalNoticePage = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="flex-grow bg-backgroundBlue">
          <div className="container flex flex-col items-center mx-auto p-4 h-full">
            <h1 className="text-2xl p-4 md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">AVISO LEGAL</h1>
            <div className="flex flex-col">
              <div className="m-4">
                  <h2 className="font-montserratBold text-left text-lg md:text-xl mb-2">Titular del sitio web</h2>
              </div>

              <div className="m-4">
                  <h2 className="font-montserratBold text-left text-lg md:text-xl mb-2">Denominación social</h2>
                  <p className="text-base md:text-lg font-montserratRegular text-left">
                  La Sonrisa de Deva
                  </p>
              </div>

              <div className="m-4">
                  <h2 className="font-montserratBold text-left text-lg md:text-xl mb-2">NIF</h2>
                  <p className="text-base md:text-lg font-montserratRegular text-left">
                  G-44662633
                  </p>
              </div>

              <div className="m-4">
                  <h2 className="font-montserratBold text-left text-lg md:text-xl mb-2">Contacto</h2>
                  <p className="text-base md:text-lg font-montserratRegular text-left">
                  lasonrisadedeva@gmail.com
                  </p>
              </div>

              <div className="m-4">
                  <h2 className="font-montserratBold text-left text-lg md:text-xl mb-2">Datos de inscripción</h2>
                  <p className="text-base md:text-lg font-montserratRegular text-left">
                  Registro de Asociaciones del Principado de Asturias, Sección: 1ª /Número 13469
                  </p>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LegalNoticePage;