import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import flash from "../../assets/figures/5-small.png";
import AuthContext from "../../store/Authorization/AuthContext";
import Button from "../Button/Button";
import Cookies from "js-cookie";
import CookieContext from "../../store/Cookies/CookieContext";

const NavbarMobile = () => {
    const {setIsLogged} = useContext(AuthContext);
    const {setEnableCookies} = useContext(CookieContext);
    const history = useHistory();

    const logout = () => {
        sessionStorage.removeItem('user');
        Cookies.remove('userData');
        setEnableCookies(false);
        setIsLogged(false);
        history.push('/');
    }

    return (
        <div className="mobile">
            <img src={flash} alt={`Blue flash`} className="mobile__image"/>
            <ul className="list">
                <li className="list__item--1"><Link className="list__item--link" to={`/`}>Work</Link></li>
                <li className="list__item--2"><Link className="list__item--link" to={`/`}>Services</Link></li>
                <li className="list__item--3"><Link className="list__item--link" to={`/`}>About</Link></li>
                <li className="list__item--4"><Link className="list__item--link" to={`/`}>Careers</Link></li>
                <li className="list__item--5"><Button className={`list`} type={`button`} buttonLabel={`Logout`} handleClick={logout}/></li>
            </ul>
        </div>
    )
}

export default NavbarMobile;