import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import CartContext from "../../store/Cart/CartContext";
import InventoryContext from "../../store/Inventory/InventoryContext";
import $ from "jquery";

const ProductCart = (props) => {
  const { image, name, quantity, id, url, item } = props;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const { setIsFetching } = useContext(InventoryContext);
  const { setCartContext } = useContext(CartContext);

  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartTotal = localStorage.getItem("cartTotal");

  const addQuantity = () => {
    /**
     * Adding product quantity
     */
    setNewQuantity(newQuantity + 1);
  };

  const removeQuantity = () => {
    /**
     * Substracting product quantity
     */
    setNewQuantity(newQuantity - 1);
  };

  const modifyQuantity = () => {
    if (newQuantity < 1 || newQuantity > 100) {
      /**
       * Error in product quantity message
       */
      let message = $(".mycart__message");
      message.show();
      message.addClass("error");
      message.text(
        "The product Quantity must be more than 1 unit and less than 100."
      );
      setTimeout(() => {
        message.hide();
        message.removeClass("error");
        message.text("");
      }, 5000);
    } else {
      setIsFetching(true);
      const timeout = setTimeout(() => {
        /**
         * Calculating the new cart total after modifying product quantity
         */
        const productTotal = item.quantity * item.price;
        let middlePrice =
          Math.round((parseFloat(cartTotal) - productTotal) * 100) / 100;
        item.quantity = newQuantity;
        const newTotal = item.quantity * item.price;
        localStorage.setItem(
          "cartTotal",
          Math.round((middlePrice + newTotal) * 100) / 100
        );
        const updatedCart = [...cart];
        const productIndex = updatedCart.findIndex((element) => {
          return element.name === item.name;
        });
        updatedCart[productIndex].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setIsFetching(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  };

  const removeProduct = () => {
    setIsFetching(true);
    const timeout = setTimeout(() => {
      /**
       * Removing an object from cart and calculating new cart total
       */
      const productTotal = item.quantity * item.price;
      localStorage.setItem(
        "cartTotal",
        Math.round((parseFloat(cartTotal) - productTotal) * 100) / 100
      );
      const updatedCart = [...cart];
      const cartIndex = updatedCart.findIndex((product) => {
        return product.name === item.name;
      });
      updatedCart.splice(cartIndex, 1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartContext(updatedCart);
      setIsFetching(false);
      /**
       * Removing an object from cart success message
       */
      let message = $(".mycart__message");
      message.show();
      message.addClass("success");
      message.text(`${item.name}, was removed from your cart.`);
      setTimeout(() => {
        message.hide();
        message.removeClass("success");
        message.text("");
      }, 5000);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <div className="cart-product__wrapper">
      <Link to={`/product/${url}`}>
        <img
          className={`cart-product__image product${id}`}
          src={image}
          alt={`Product ${name}`}
        />
      </Link>
      <Button
        className={`cart-remove`}
        type={`button`}
        handleClick={removeProduct}
        buttonLabel={`X`}
        aria-label={`Remove product from cart`}
      />
      <Link to={`/product/${url}`} className={`product__link product${id}`}>
        <p className="cart-product__name">{name}</p>
      </Link>
      <form className="cart-product__form">
        <fieldset className="cart-product__fieldset">
          <label
            className={`cart-product__label`}
            value={`Quantity of the product`}
            htmlFor={`product${name}`}
          >
            Quantity
          </label>
          <div className="cart-product__fieldset--division">
            <Button
              className={`cart-minus`}
              type={`button`}
              handleClick={removeQuantity}
              buttonLabel={`-`}
              extraClass={`${name}`}
              aria-label={`Remove product quantity`}
            />
            <input
              className={`cart-product__input`}
              type={`number`}
              id={`product${name}`}
              placeholder={`1`}
              min={`1`}
              max={`100`}
              value={newQuantity}
            />
            <Button
              className={`cart-plus`}
              type={`button`}
              handleClick={addQuantity}
              buttonLabel={`+`}
              extraClass={`${name}`}
              aria-label={`Add product quantity`}
            />
          </div>
          <Button
            className={`cart-modify`}
            type={`button`}
            handleClick={modifyQuantity}
            buttonLabel={`Modify Qty`}
            extraClass={`product${id}`}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ProductCart;
