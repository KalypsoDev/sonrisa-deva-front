import React, { useState, useEffect } from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import CardProduct from '../../molecules/cardProduct/CardProduct';
import Pagination from '../../atoms/pagination/Pagination';
import FetchApi from '../../../services/FetchApi'

const ProductPage = () => {
  
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await FetchApi.getProducts();
        setProducts(products);
      } catch (error) {
        console.error('No se encuentran productos:', error);
      }
    };

    getProducts();
  }, []);

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
      <Navbar />
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
              console.log('Producto con imagen:', product.image_url);
              return (
                <div key={product.id}>
                  <CardProduct
                    image_url={product.image_url}
                    name={product.name}
                    description={product.description}
                    price={product.price}
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
