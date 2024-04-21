import sonrisaDevaSmallLogo from "../../../assets/img/smallLogo.jpg";
import { FaRegEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white relative pt-4 pb-4 drop-shadow-[0-6px_6px_rgba(0,130,202,0.3)]">
      <div className="container flex flex-wrap flex-row justify-center md:justify-between max-w-screen-xl mx-auto">
        <div className="flex flex-col text-center justify-center mb-2 md:mb-0 md:justify-evenly justify-items-center">
          <Link to="/aviso-legal" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Aviso legal</Link>
          <Link to="/politicas-privacidad" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Política de privacidad</Link>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-center mx-auto pb-4">
              <img className="rounded-full w-24 h-24 border-2 border-primaryBlue" src={sonrisaDevaSmallLogo} alt="Sonrisa de Deva Logo" />
          </div>
          <p className="font-montserratRegular text-darkGrey text-md">Copyright © 2024 La Sonrisa de Deva</p>
        </div>
        <div className="flex flex-col text-center justify-evenly justify-items-center mt-4">
          <div className="flex justify-evenly items-center mb-2 md:mb-0">
              <a href="mailto:lasonrisadedeva@gmail.com">
              <FaRegEnvelope className="text-3xl text-darkGrey hover:text-primaryBlue" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100087800295743">
              <FaFacebookF className="text-3xl text-darkGrey hover:text-primaryBlue" />
              </a>
              <a href="https://www.instagram.com/lasonrisadedeva/?hl=es">
              <FaInstagram className="text-3xl text-darkGrey hover:text-primaryBlue" />
              </a>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/inicio-sesion-admin" className="font-montserratRegular text-darkGrey hover:text-primaryBlue">Acceso Administración</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
