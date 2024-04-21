import React from 'react'
import ProductForm from '../../molecules/productForm/ProductForm'
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule'
import  Footer  from '../../molecules/footer/Footer'

const ProductFormPage = () => {
  return (
    <>
    <NavbarMolecule />
    <section className='bg-backgroundBlue pb-8 pt-6'>
      <h1 className='text-2xl font-montserratBold text-primaryBlue text-center p-4'>ADQUIERE ESTE PRODUCTO SOLIDARIO</h1>
      <p className="font-montserratRegular text-primaryBlue text-center leading-tight max-w-[90%] sm:max-w-[60%] lg:max-w-[46%] mx-auto p-2">
    Por favor, completa el formulario con tus datos especificando talla y color del producto y nos pondremos en contacto contigo para coordinar la entrega
</p>
    <ProductForm />
    </section>
    <Footer />
    </>
  )
}

export default ProductFormPage