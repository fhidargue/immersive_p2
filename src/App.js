import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
// import ProtectedRoute from "./components/Access/ProtectedRoute";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductList from "./components/Product/ProductList";
import ProductPage from "./components/Product/ProductPage";
import ScrollToTop from "./hooks/ScrollToTop";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Purchase from "./components/Purchase/Purchase";
import NoPage from "./components/NoPage/NoPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ScrollToTop>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={LandingPage} />
        <Redirect from="/products" exact to="/products/:categoryUrl" />
        <Route path="/products/:categoryUrl" exact component={ProductList} />
        <Route path="/product/:productUrl" exact component={ProductPage} />
        <Route path="/shopping-cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/purchase" component={Purchase} />
        <Route path="*" component={NoPage} />
      </Switch>
    </ScrollToTop>
  );
}

export default App;
