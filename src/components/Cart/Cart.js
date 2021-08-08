import { useContext, useEffect } from "react";
// import CartContext from "../../store/Cart/CartContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
// import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import ProductCart from "../Product/ProductCart";
import Timeline from "../Timeline/Timeline";
import Button from "../Button/Button";
import ProductCheckout from "../Product/ProductCheckout";
import InventoryContext from "../../store/Inventory/InventoryContext";
import { useHistory } from "react-router-dom";
import $ from "jquery";

const Cart = () => {
  const { isFetching, setIsFetching } = useContext(InventoryContext);
  const history = useHistory();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTotal = localStorage.getItem("cartTotal") || 0;

  useEffect(() => {
    document.title = `Remotion - My Cart`;
    setIsFetching(true);
    const timeout = setTimeout(() => {
      setIsFetching(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIsFetching]);

  const toCheckout = () => {
    if (parseFloat(cartTotal) === 0 || typeof cartTotal === "undefined") {
      let message = $(".mycart__message");
      message.show();
      message.addClass("error");
      message.text("You must have at least one product to Checkout.");
      setTimeout(() => {
        message.hide();
        message.removeClass("error");
        message.text("");
      }, 5000);
    } else {
      history.push("/checkout");
    }
  };

  return cart ? (
    <div className="App">
      <Header />
      <main className="main">
        <section className="mycart">
          <h1 className="mycart__title" data-aos="zoom-in">
            My Cart
          </h1>
          <Timeline page={`My Cart`} url={`shopping-cart`} />
          <div className="mycart__wrapper">
            <div className="mycart-info">
              {isFetching ? (
                <Spinner />
              ) : (
                <>
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
                          image={item.first_image}
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
                </>
              )}
            </div>
            {isFetching ? (
              <Spinner />
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="App">
      <Header />
      <main className="main">
        <section className="mycart">
          <h1 className="mycart__title" data-aos="zoom-in">
            My Cart
          </h1>
          <div className="mycart__wrapper">
            <span className="mycart__message" aria-live={`polite`}></span>
            <div className="mycart-info">
              <div className="mycart-info__title">Products to Buy</div>
              <div className="mycart-info__list"></div>
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
  );
};

export default Cart;
