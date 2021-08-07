import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import flash from "../../assets/figures/5-small.png";
import AuthContext from "../../store/Authorization/AuthContext";
import Button from "../Button/Button";
import Cookies from "js-cookie";
import CookieContext from "../../store/Cookies/CookieContext";
import cartIcon from "../../assets/figures/shopping-cart.svg";
import CartContext from "../../store/Cart/CartContext";
import { getStoredCart, getStoredTotal } from "../../services/product-service";

const NavbarMobile = () => {
  const { setIsLogged } = useContext(AuthContext);
  const { setEnableCookies } = useContext(CookieContext);
  const history = useHistory();
  const { cartContext, setCartContext, setCartTotalContext } =
    useContext(CartContext);

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
    <div className="mobile">
      <img src={flash} alt={`Blue flash`} className="mobile__image" />
      <ul className="list">
        <li className="list__item--1">
          <Link className="list__item--link" to={`/products/all`}>
            Products
          </Link>
        </li>
        <li className="list__item--2">
          <Link className="list__item--link" to={`/products/clearance`}>
            Clearance
          </Link>
        </li>
        <li className="list__item--3">
          <Link className="list__item--link cart" to={`/shopping-cart`}>
            <img
              src={cartIcon}
              alt={`Shopping Cart icon`}
              className="cart-icon--mobile"
            />
            My Cart
            <div className="cart__products--mobile">
              <span className="cart__productsNumber--mobile">{`${cartContext.length}`}</span>
            </div>
          </Link>
        </li>
        <li className="list__item--5">
          <Button
            className={`list`}
            type={`button`}
            buttonLabel={`Logout`}
            handleClick={logout}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
