import  {NavbarMolecule}  from "../../molecules/navbar/NavbarMolecule";
import  Footer  from "../../molecules/footer/Footer";


export function HomePage() {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <Footer></Footer>
    </>
  );
}