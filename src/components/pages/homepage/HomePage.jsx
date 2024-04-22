import Navbar from "../../molecules/navbar/Navbar";
import Footer from "../../molecules/footer/Footer";
import InstagramPosts from "../../molecules/instagramPosts/InstagramPosts";

export function HomePage() {
  return (
    <>
      <Navbar />
      <section className="bg-backgroundBlue p-1.5">
        <InstagramPosts />
      </section>
      <Footer />
    </>
  );
}