import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import CookieContext from "../../store/Cookies/CookieContext";
import Cookies from "js-cookie";
import Button from "../Button/Button";
import cartIcon from "../../assets/figures/shopping-cart.svg";
import CartContext from "../../store/Cart/CartContext";
import { getStoredCart, getStoredTotal } from "../../services/product-service";

const Navbar = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const { setEnableCookies } = useContext(CookieContext);
  const { cartContext, setCartContext, setCartTotalContext } =
    useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    setCartContext(getStoredCart());
    setCartTotalContext(getStoredTotal());
  }, [setCartContext, setCartTotalContext]);

  const logout = () => {
    sessionStorage.removeItem("user");
    Cookies.remove("userData");
    setEnableCookies(false);
    setIsLogged(false);
    history.push("/");
  };

  return (
    <ul className="options">
      <li className="options__item">
        <Link className="options__item--link" to={`/products/all`}>
          Products
        </Link>
      </li>
      <li className="options__item">
        <Link className="options__item--link" to={`/products/clearance`}>
          Clearance
        </Link>
      </li>
      <li className="options__item">
        <Link className="options__item--link cart" to={`/shopping-cart`}>
          <img
            src={cartIcon}
            alt={`Shopping Cart icon`}
            className="cart-icon"
          />
          My Cart
          <div className="cart__products">
            <span className="cart__productsNumber">{`${cartContext.length}`}</span>
          </div>
        </Link>
      </li>
      <li className="options__item">
        <Button
          className={`options`}
          type={`button`}
          buttonLabel={`Logout`}
          handleClick={logout}
        />
      </li>
    </ul>
  );
};

export default Navbar;
