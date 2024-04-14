import  {NavbarMolecule}  from "../../molecules/navbar/NavbarMolecule";
import  {FooterMolecule}  from "../../molecules/footer/FooterMolecule";


export function HomePage() {
  return (
    <>
        <NavbarMolecule></NavbarMolecule>
        <h1>Ésta es la home page</h1>
        <FooterMolecule></FooterMolecule>
    </>
  );
}