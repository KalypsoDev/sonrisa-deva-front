import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import Footer from '../../molecules/footer/Footer';

const LegalNoticePage = () => {

  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">AVISO LEGAL</h1>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
                <h2 className="font-montserratBold text-left">TITULAR DEL SITIO WEB</h2>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">DENOMINACIÓN SOCIAL</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                La Sonrisa de Deva
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">NIF</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                G-44662633
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">CONTACTO</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                lasonrisadedeva@gmail.com
                </p>
            </div>

            <div className="mb-4">
                <h2 className="font-montserratBold text-left">DATOS DE INSCRIPCIÓN</h2>
                <p className="text-sm md:text-lg font-montserratRegular text-left">
                Registro de Asociaciones del Principado de Asturias, Sección: 1ª /Número 13469
                </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LegalNoticePage;