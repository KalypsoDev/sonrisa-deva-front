import  {NavbarMolecule}  from "../../molecules/navbar/NavbarMolecule";
import  {Footer}  from "../../molecules/footer/Footer";


export function HomePage() {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <h1 className="font-montserratRegular text-2xl">Ésta es la home page Y y</h1>
        <h1 className="font-montserratBold text-2xl">Ésta es la home page Y y</h1>
        <Footer></Footer>
    </>
  );
}