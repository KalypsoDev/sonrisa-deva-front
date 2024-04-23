import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import CardWithIcon from "../../atoms/cardWithIcon/CardWithIcon";
import { FaHandHoldingHeart, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom"

const CooperatePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <section className="flex-grow bg-backgroundBlue">
          <div className="container flex flex-col items-center mx-auto p-4 h-full">
            <h1 className="text-2xl p-4 md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">COLABORA</h1>
            <div className="flex flex-col justify-center items-center gap-6 md:flex-row pb-4 mx-auto md:max-w-4xl">
              <Link to="/donacion">
                <CardWithIcon
                  backgroundColor="darkBlue"
                  color="white"
                  title="Donación"
                  Icon={FaHandHoldingHeart}
                  iconColor="white"
                />
              </Link>
              <Link to="/tienda-solidaria">
                <CardWithIcon
                  backgroundColor="darkBlue"
                  color="white"
                  title="Tienda solidaria"
                  Icon={FaBagShopping}
                  iconColor="white"
                />
              </Link>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default CooperatePage;
