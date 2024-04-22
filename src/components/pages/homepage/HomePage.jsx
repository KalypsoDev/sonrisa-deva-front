import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import CardWithIcon from "../../molecules/cardWithIcon/CardWithIcon";

export function HomePage() {
  return (
    <>
        <Navbar></Navbar>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <CardWithIcon></CardWithIcon>
        <Footer></Footer>
    </>
  );
}