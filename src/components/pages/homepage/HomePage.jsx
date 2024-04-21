import  {NavbarMolecule}  from "../../molecules/navbar/NavbarMolecule";
import  {Footer}  from "../../molecules/footer/Footer";
import CardWithIcon from "../../molecules/cardWithIcon/CardWithIcon";


export function HomePage() {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <CardWithIcon></CardWithIcon>
        <Footer></Footer>
    </>
  );
}