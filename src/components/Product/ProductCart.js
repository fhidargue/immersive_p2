import { Link } from "react-router-dom";
import Button from "../Button/Button";
import $ from "jquery";
import { useContext, useState } from "react";
import CartContext from "../../store/Cart/CartContext";

const Product = (props) => {
  const { image, name, quantity, id, url, item } = props;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const { cart, setCart, cartTotal, setCartTotal } = useContext(CartContext);
  console.log("cartTotal: ", cartTotal);

  const addQuantity = () => {
    setNewQuantity(newQuantity + 1);
  };

  const removeQuantity = () => {
    setNewQuantity(newQuantity - 1);
  };

  const modifyQuantity = () => {
    const productTotal = item.quantity * item.price;
    let middlePrice = cartTotal - productTotal;
    item.quantity = newQuantity;
    const newTotal = item.quantity * item.price;
    setCartTotal(Math.round((middlePrice + newTotal) * 100) / 100);
  };

  const removeProduct = () => {};

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
            />
            <input
              className={`cart-product__input ${name}`}
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

export default Product;
