import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import CardWithIcon from "../../atoms/cardWithIcon/CardWithIcon";
import { FaRegEnvelope } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import { Link } from "react-router-dom"

const WhoAmIPage = () => {
  return (
    <>
        <Navbar></Navbar>
        <h1 className="font-montserratBold">¿Quién soy yo?</h1>
        <div className="flex flex-col gap-4 md:flex-row mx-auto md:max-w-4xl m-6">
          <Link to="/sobre-deva">
            <CardWithIcon
              backgroundColor="darkBlue"
              color="white"
              title="Sobre Deva"
              Icon={PiButterflyFill}
              iconColor="white"
            />
          </Link>
          <Link to="/asociacion">
            <CardWithIcon 
              Icon={FaRegEnvelope}
            />
          </Link>
          <CardWithIcon 
            Icon={FaRegEnvelope}
          />
        </div>
        <Footer></Footer>
    </>
  );
};

export default WhoAmIPage;
