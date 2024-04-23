import React from 'react'
import Navbar from '../../molecules/navbar/Navbar';
import LoginFormAdmin from '../../molecules/loginFormAdmin/LoginFormAdmin'
import Footer from '../../molecules/footer/Footer';


const LoginAdminPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
        <LoginFormAdmin />
      </section>
      <Footer />
    </>
  )
}

export default LoginAdminPage

