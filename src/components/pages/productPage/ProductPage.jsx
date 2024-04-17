import React from 'react'
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule";
import { Footer } from "../../molecules/footer/Footer";
import CardProduct from '../../molecules/cardProduct/CardProduct'


const ProductPage = () => {
  return (
    <>
      <NavbarMolecule />
      <CardProduct />
      <CardProduct />
      <Footer />
    </>
  )
}

export default ProductPage