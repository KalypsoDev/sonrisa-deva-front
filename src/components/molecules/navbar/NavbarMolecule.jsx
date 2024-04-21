import React, { useState, useEffect } from "react";
import Isotipo from "../../../assets/isologo.png";
import { Button } from "../../atoms/button/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import "../../../../src/index.css";

export function NavbarMolecule() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    setActiveSection(currentPath);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 font-montserratRegular drop-shadow-[0px_6px_6px_rgba(0,130,202,0.3)]">
        <div className="flex flex-wrap items-center justify-start md:justify-between mx-auto p-4 relative">
          <div className="flex flex-row justify-around items-center md:flex-row md:justify-between w-full xl:flex xl:flex-row">
            <div className="order-1 md:order-0 isologo">
              <Link to="/">
                <img
                  src={Isotipo}
                  alt="La Sonrisa de Deva Isologo"
                  className="h-24"
                />
              </Link>
            </div>
            <div className="order-0 md:order-1 hamburguerMenu md:w-4/5 w-auto text-md md:text-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } w-full md:block md:w-auto absolute top-full left-0 z-20 bg-white md:relative md:mt-0 md:bg-transparent`}
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:items-center text-sm md:text-xs lg:text-base xl:text-lg md:justify-between">
                  <li>
                    <Link
                      to="/quienSoy"
                      onClick={() => setActiveSection("quienSoy")}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-color ${
                        activeSection === "quienSoy"
                          ? "active-text-color underline"
                          : ""
                      }`}
                      aria-current="page"
                    >
                      ¿Quién soy?
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sindromeAngelman"
                      onClick={() => setActiveSection("sindromeAngelman")}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-color ${
                        activeSection === "sindromeAngelman"
                          ? "active-text-color underline"
                          : ""
                      }`}
                    >
                      Síndrome de Angelman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/investigacion"
                      onClick={() => setActiveSection("investigacion")}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-color ${
                        activeSection === "investigacion"
                          ? "active-text-color underline"
                          : ""
                      }`}
                    >
                      Investigación
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/eventos"
                      onClick={() => setActiveSection("eventos")}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-color ${
                        activeSection === "eventos"
                          ? "active-text-color underline"
                          : ""
                      }`}
                    >
                      Eventos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/formulario-contacto"
                      onClick={() => setActiveSection("contacto")}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-color ${
                        activeSection === "contacto"
                          ? "active-text-color underline"
                          : ""
                      }`}
                    >
                      Contacto
                    </Link>
                  </li>
                  <Link to="/tienda-solidaria">
                    <Button
                      text="Colabora"
                      className="button-color drop-shadow-xl text-white hover:bg-sky-700 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-2 transition duration-300 ease-in-out"
                    />
                  </Link>
                </ul>
              </div>
            </div>
            <div className="order-2 md:order-2 md:ml-4 cart">
              <FaShoppingCart className="text-2xl " />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
