import React from "react";
import Navbar from "../../molecules/navbar/Navbar";
import AboutMe from "../../molecules/aboutMe/AboutMe";
import Footer from "../../molecules/footer/Footer";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
      
        <div className="flex flex-col items-center">
          <div className="flex mt-2 md:mt-2 ">
          <Link to="/terapias">
          <FaCircleChevronLeft
              className="text-primaryLila text-3xl ml-2 cursor-pointer md:mt-2 mb-0"
            />
            </Link>
            <Link to="/terapias">
            <FaCircleChevronRight className="text-primaryLila text-3xl cursor-pointer md:mt-2 mb-0 ml-2" />
            </Link>
            </div>
            <div>
          <AboutMe />
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutMePage;
