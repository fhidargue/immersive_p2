import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import CookieContext from "../../store/Cookies/CookieContext";
import Cookies from "js-cookie";
import Button from "../Button/Button";

const Navbar = () => {
    const {isLogged, setIsLogged} = useContext(AuthContext);
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
        <ul className="options">
            <li className="options__item"><Link className="options__item--link" to={`/products/all`}>Products</Link></li>
            <li className="options__item"><Link className="options__item--link" to={`/products/clearance`}>Clearance</Link></li>
            <li className="options__item"><Link className="options__item--link" to={`/`}>About</Link></li>
            <li className="options__item"><Link className="options__item--link" to={`/`}>Careers</Link></li>
            <li className="options__item"><Button className={`options`} type={`button`} buttonLabel={`Logout`} handleClick={logout}/></li>
        </ul>
    )
}

export default Navbar;