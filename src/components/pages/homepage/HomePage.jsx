import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";


export function HomePage() {
  return (
    <>
        <Navbar></Navbar>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <Footer></Footer>
    </>
  );
}