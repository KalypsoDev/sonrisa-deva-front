import React from 'react'
import Navbar from '../../molecules/navbar/Navbar'
import TherapiesCard from '../../molecules/therapies/TherapiesCard'
import Footer from '../../molecules/footer/Footer'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const TherapiesPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
      <div className="flex flex-col items-center">
      <div className="flex mt-2 md:mt-2 ">
        <Link to="/acerca-de-mi">
          <FaCircleChevronLeft
              className="text-primaryLila text-3xl ml-2 cursor-pointer md:mt-2 mb-0"
            />
            </Link>
            <Link to="/acerca-de-mi">
            <FaCircleChevronRight className="text-primaryLila text-3xl cursor-pointer md:mt-2 mb-0 ml-2" />
            </Link>
            </div>
        <TherapiesCard />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TherapiesPage