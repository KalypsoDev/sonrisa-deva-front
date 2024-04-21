import React, { useState } from 'react';
import { NavbarMolecule } from '../../molecules/navbar/NavbarMolecule';
import Footer from '../../molecules/footer/Footer';
import CardProduct from '../../molecules/cardProduct/CardProduct';
import Pagination from '../../atoms/pagination/Pagination';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: '10€', description: 'Descripción del Producto 1', imageSrc: 'https://picsum.photos/200/300' },
    { id: 2, name: 'Producto 2', price: '15€', description: 'Descripción del Producto 2', imageSrc: 'https://picsum.photos/200/300' },
    { id: 3, name: 'Producto 3', price: '20€', description: 'Descripción del Producto 3', imageSrc: 'https://picsum.photos/200/300' },
    { id: 4, name: 'Producto 4', price: '25€', description: 'Descripción del Producto 4', imageSrc: 'https://picsum.photos/200/300' },
    { id: 5, name: 'Producto 5', price: '30€', description: 'Descripción del Producto 5', imageSrc: 'https://picsum.photos/200/300' },
    { id: 6, name: 'Producto 6', price: '35€', description: 'Descripción del Producto 6', imageSrc: 'https://picsum.photos/200/300' },
    { id: 7, name: 'Producto 7', price: '40€', description: 'Descripción del Producto 7', imageSrc: 'https://picsum.photos/200/300' },
    { id: 8, name: 'Producto 8', price: '45€', description: 'Descripción del Producto 8', imageSrc: 'https://picsum.photos/200/300' },
    { id: 9, name: 'Producto 9', price: '50€', description: 'Descripción del Producto 9', imageSrc: 'https://picsum.photos/200/300' },
    { id: 10, name: 'Producto 10', price: '55€', description: 'Descripción del Producto 10', imageSrc: 'https://picsum.photos/200/300' },
    { id: 11, name: 'Producto 11', price: '60€', description: 'Descripción del Producto 11', imageSrc: 'https://picsum.photos/200/300' },
    { id: 12, name: 'Producto 12', price: '65€', description: 'Descripción del Producto 12', imageSrc: 'https://picsum.photos/200/300' },
    { id: 13, name: 'Producto 13', price: '70€', description: 'Descripción del Producto 13', imageSrc: 'https://picsum.photos/200/300' },
    { id: 14, name: 'Producto 14', price: '75€', description: 'Descripción del Producto 14', imageSrc: 'https://picsum.photos/200/300' },
    { id: 15, name: 'Producto 15', price: '80€', description: 'Descripción del Producto 15', imageSrc: 'https://picsum.photos/200/300' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);

  const totalProducts = products.length;
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    console.log('Producto añadido al carrito:', product);
  };

  return (
    <>
      <NavbarMolecule />
      <section className="bg-backgroundBlue">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">TIENDA SOLIDARIA</h1>
          <div className="md:max-w-2xl mx-auto">
            <p className="text-sm md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">
              Puedes colaborar realizando un donativo a cambio de nuestros productos solidarios. Rellena el formulario para realizar el pedido y nos pondremos en contacto contigo para indicarte las opciones de pago.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {currentProducts.map((product) => {
              console.log('Producto con imagen:', product.imageSrc);
              return (
                <div key={product.id}>
                  <CardProduct
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-4">
            <Pagination
              currentPage={currentPage}
              perPage={perPage}
              totalItems={totalProducts}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
