import { useContext } from "react";
import CartContext from "../../store/Cart/CartContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
// import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import ProductCart from "../Product/ProductCart";
import Timeline from "../Timeline/Timeline";
import Button from "../Button/Button";
import ProductCheckout from "../Product/ProductCheckout";
// import InventoryContext from "../../store/Inventory/InventoryContext";

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext);
  //   const { isFetching, setIsFetching } = useContext(InventoryContext);

  const toCheckout = () => {};

  return cart ? (
    <div className="App">
      <Header />
      <main className="main">
        <span className="product-page__message" aria-live={`polite`}></span>
        <section className="mycart">
          <h1 className="mycart__title">My Cart</h1>
          <Timeline page={`My Cart`} url={`shopping-cart`} />
          <div className="mycart__wrapper">
            <div className="mycart-products">
              {cart.map((item) => {
                return (
                  <ProductCart
                    key={item.name}
                    image={item.first_image}
                    name={item.name}
                    quantity={item.quantity}
                    id={item.id}
                    url={item.url}
                    item={item}
                  />
                );
              })}
            </div>
            <div className="mycart-info">
              <div className="mycart-info__title">Products to Buy</div>
              <div className="mycart-info__list">
                {cart.map((item) => {
                  return (
                    <ProductCheckout
                      key={item.name}
                      name={item.name}
                      quantity={item.quantity}
                      id={item.id}
                      price={item.price}
                      item={item}
                    />
                  );
                })}
              </div>
              <p className="mycart-info__grandTotal">
                Grand Total:{" "}
                <span className="mycart-info__bold">${cartTotal}</span>
              </p>
              <Button
                className={`mycart-info`}
                type={`button`}
                handleClick={toCheckout}
                buttonLabel={`Proceed to Checkout`}
              />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  ) : (
    <Spinner />
  );
};

export default Cart;
