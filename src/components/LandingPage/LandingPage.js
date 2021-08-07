import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Services from "../Services/Services";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Remotion - Home";
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <span className="product-page__message" aria-live={`polite`}></span>
        <Banner />
        <Categories />
        <Featured />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
