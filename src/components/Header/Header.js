import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavbarBurger from "../Navbar/NavbarBurger";
import NavbarMobile from "../Navbar/NavbarMobile";
const logo =
  "https://uploads-ssl.webflow.com/601fd7c23be42a77baaedb3a/601fd7c23be42a70d2aedb4e_Remotion-logo-black-bg.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to={`/`} className="header__logo">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Navbar />
      <NavbarBurger />
      <NavbarMobile />
    </header>
  );
};

export default Header;
