import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { getStoredTotal, getStoredCart } from "../../services/product-service";
import { useContext } from "react";
import CartContext from "../../store/Cart/CartContext";
import $ from "jquery";

const Product = (props) => {
  const { image, name, price, id, url, item } = props;
  const { setCartContext } = useContext(CartContext);

  const addToCart = () => {
    item.quantity = 1;
    let total = price * item.quantity;
    const cartTotal = getStoredTotal();
    let newTotal = Math.round((parseFloat(cartTotal) + total) * 100) / 100;
    localStorage.setItem("cartTotal", newTotal);
    const newCart = getStoredCart();
    let array = [...newCart, item];
    setCartContext(array);
    localStorage.setItem("cart", JSON.stringify(array));
    /**
     * Success in adding this product to the cart message
     */
    let message = $(".product-page__message");
    message.show();
    message.addClass("success");
    message.text(`${item.name}, was added to your cart!`);
    setTimeout(() => {
      message.hide();
      message.removeClass("success");
      message.text("");
    }, 5000);
  };

  return (
    <div className="product__wrapper">
      <Link to={`/product/${url}`}>
        <div
          className={`product__image product${id}`}
          style={{ backgroundImage: `url(${image})` }}
          aria-label={`Product ${name}`}
          role="img"
        ></div>
      </Link>
      <Link to={`/product/${url}`} className={`product__link product${id}`}>
        <p className="product__name">{name}</p>
      </Link>
      <p className="product__price">${price}</p>
      <Button
        className={`product`}
        extraClass={`product${id}`}
        type={`button`}
        handleClick={addToCart}
        buttonLabel={`Add To Cart`}
      />
    </div>
  );
};

export default Product;
