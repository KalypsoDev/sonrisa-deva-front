import React from 'react'
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule";
import { Footer } from "../../molecules/footer/Footer";
import CardProduct from '../../molecules/cardProduct/CardProduct';
import Pagination from '../../atoms/pagination/Pagination';


const ProductPage = () => {
  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <CardProduct />
        <Pagination />
      </section>
      <Footer />
    </>
  )
}

export default ProductPage