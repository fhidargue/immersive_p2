import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import ProtectedRoute from "./components/Access/ProtectedRoute";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import AOS from 'aos';
import "aos/dist/aos.css";
import "@splidejs/splide/dist/css/splide.min.css";

function App() {

  useEffect(() => {
    AOS.init({
        duration : 1500,
        once: true
    });
    AOS.refresh();
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Login}/>
      <ProtectedRoute path="/home" exact component={LandingPage}/>
    </Switch>
  );
}

export default App;
