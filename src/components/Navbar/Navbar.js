import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import Button from "../Button/Button";
import cartIcon from "../../assets/figures/shopping-cart.svg";
import CartContext from "../../store/Cart/CartContext";
import { getStoredCart, getStoredTotal } from "../../services/product-service";
import { getStoredUser } from "../../services/user-service";

const Navbar = () => {
  const { isLogged, setIsLogged, user, setUser } = useContext(AuthContext);
  const { cartContext, setCartContext, setCartTotalContext } =
    useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    setUser(getStoredUser());
    if (sessionStorage.getItem("user")) {
      setIsLogged(true);
    }
    setCartContext(getStoredCart());
    setCartTotalContext(getStoredTotal());
  }, [setCartContext, setCartTotalContext, setUser, setIsLogged]);

  const logout = () => {
    sessionStorage.removeItem("user");
    setIsLogged(false);
    history.push("/");
  };

  const login = () => {
    history.push("/login");
  };

  return (
    <ul className="options">
      {isLogged && (
        <li className="options__item">
          <Link className="options__item--link" to={`/`}>
            {`Welcome, ${user.username}`}
          </Link>
        </li>
      )}
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
      {!isLogged ? (
        <li className="options__item">
          <Button
            className={`options`}
            type={`button`}
            buttonLabel={`Login`}
            handleClick={login}
            extraClass={`register-login`}
          />
        </li>
      ) : (
        <li className="options__item">
          <Button
            className={`options`}
            type={`button`}
            buttonLabel={`Logout`}
            handleClick={logout}
            extraClass={`logout`}
          />
        </li>
      )}
    </ul>
  );
};

export default Navbar;
