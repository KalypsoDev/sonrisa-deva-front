import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import CardWithIcon from "../../atoms/cardWithIcon/CardWithIcon";
import { FaCreditCard, FaMobileScreen } from "react-icons/fa6";
import { Link } from "react-router-dom"

const DonationPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <section className="flex-grow bg-backgroundBlue">
          <div className="container flex flex-col items-center mx-auto p-4 h-full">
            <h1 className="text-2xl p-4 md:text-3xl font-montserratBold text-center text-primaryBlue mb-4">¿CÓMO DONAR?</h1>
            <p className="text-base md:text-lg font-montserratRegular text-primaryBlue text-center mb-8">Gracias a tu donativo ayudas a cumplir los fines de la Asociación La sonrisa de Deva</p>
            <div className="flex flex-col justify-center items-center gap-6 md:flex-row p-4 mx-auto md:max-w-4xl">
              <CardWithIcon
                backgroundColor="darkBlue"
                color="white"
                title="Transferencia bancaria"
                Icon={FaCreditCard}
                iconColor="white"
                subtitle="ES76 3007 0005 9221 2649 1227"
              />
              <CardWithIcon
                backgroundColor="darkBlue"
                color="white"
                title="Bizum solidario"
                Icon={FaMobileScreen}
                iconColor="white"
                subtitle="07174"
              />
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DonationPage;
