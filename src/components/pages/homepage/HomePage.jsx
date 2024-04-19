import  {NavbarMolecule}  from "../../molecules/navbar/NavbarMolecule";
import  {Footer}  from "../../molecules/footer/Footer";
import  Carousel  from "../../molecules/carousel/Carousel";


export function HomePage() {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <Carousel></Carousel>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <Footer></Footer>
    </>
  );
}