import sonrisaDevaSmallLogo from "../../../assets/img/smallLogo.jpg";
import { FaRegEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white relative pt-4 drop-shadow-[0-6px_6px_rgba(0,130,202,0.3)]">
      <div className="container flex flex-row justify-evenly mx-auto px-6">
        <div className="flex justify-center sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-center sm:justify-start">
            <div className="flex flex-col text-center sm:text-left">
              <a href="#" className="font-montserratRegular text-darkGrey text-md hover:text-primaryBlue">Aviso legal</a>
              <a href="#" className="font-montserratRegular text-darkGrey text-md hover:text-primaryBlue">Políticas de privacidad</a>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 sm:mt-0">
            <a href="#" className="flex justify-center items-center mx-auto mb-4">
                <img className="rounded-full w-24 h-24 border-2 border-primaryBlue" src={sonrisaDevaSmallLogo} alt="Sonrisa de Deva Logo" />
            </a>
            <a href="#" className="font-montserratRegular text-darkGrey text-md hover:text-primaryBlue">Copyright © 2024 La Sonrisa de Deva</a>
          </div>
          <div className="flex flex-col justify-center sm:justify-end mt-4 sm:mt-0">
            <div className="flex items-center mt-4 sm:mt-0">
                <a href="#" className="mx-1">
                <FaRegEnvelope className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
                <a href="#" className="mx-1">
                <FaFacebookF className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
                <a href="#" className="mx-1">
                <FaInstagram className="text-lg text-darkGrey hover:text-primaryBlue" />
                </a>
            </div>
            <div className="flex flex-col items-center mt-4 sm:mt-0">
                <Link to="/inicio-sesion-admin" className="font-montserratRegular text-darkGrey hover:text-primaryBlue mt-2">Acceso Administración</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
