import sonrisaDevaSmallLogo from "../../../assets/img/smallLogo.jpg";
import { FaRegEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white relative pt-4 drop-shadow-[0-6px_6px_rgba(0,130,202,0.3)]">
      <div className="flex flex-row justify-center mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-col text-center">
              <Link to="/aviso-legal" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Aviso legal</Link>
              <Link to="/politicas-privacidad" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Políticas de privacidad</Link>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 mb-4 sm:mt-0">
            <div className="flex justify-center items-center mx-auto pb-4">
                <img className="rounded-full w-24 h-24 border-2 border-primaryBlue" src={sonrisaDevaSmallLogo} alt="Sonrisa de Deva Logo" />
            </div>
            <p className="font-montserratRegular text-darkGrey text-md">Copyright © 2024 La Sonrisa de Deva</p>
          </div>
          <div className="flex flex-col justify-center mt-4 sm:mt-0">
            <div className="flex justify-center items-center mt-4 sm:mt-0">
                <a href="mailto:lasonrisadedeva@gmail.com">
                <FaRegEnvelope className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100087800295743" className="mx-1">
                <FaFacebookF className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
                <a href="https://www.instagram.com/lasonrisadedeva/?hl=es" className="mx-1">
                <FaInstagram className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
            </div>
            <Link to="/inicio-sesion-admin" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Acceso Administración</Link>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
