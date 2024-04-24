import React from 'react'
import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import  Carousel  from "../../molecules/carousel/Carousel";
import InstagramPosts from "../../molecules/instagramPosts/InstagramPosts";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
        <Carousel />
        <InstagramPosts />
      </section>
      <Footer />
    </>
  )
}
export default HomePage