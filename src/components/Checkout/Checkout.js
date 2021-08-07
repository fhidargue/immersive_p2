import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Newsletter from "../Newsletter/Newsletter";
import Spinner2 from "../Spinner/Spinner2";
import Timeline from "../Timeline/Timeline";

const Checkout = () => {
  const { isFetching, setIsFetching } = useContext(InventoryContext);
  const history = useHistory();
  let cartTotal = localStorage.getItem("cartTotal") || 0;

  useEffect(() => {
    document.title = `Remotion - Checkout`;
    setIsFetching(true);
    const timeout = setTimeout(() => {
      setIsFetching(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIsFetching]);

  const completeCheckout = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartTotal");
    history.push("/purchase");
  };
  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="mycart">
          <h1 className="mycart__title" data-aos="zoom-in">
            Checkout
          </h1>
          <Timeline page={`Checkout`} url={`checkout`} />
          <div className="checkout__wrapper">
            <span className="checkout__message" aria-live={`polite`}></span>
            <div className="customer">
              <p className="customer__title">Your Information</p>
              <form className="customer__form">
                <fieldset className="customer__fieldset">
                  <label className="customer__label" htmlFor={`first-name`}>
                    First Name
                  </label>
                  <input
                    className="customer__input"
                    id={`first-name`}
                    placeholder={`John`}
                    type={`text`}
                  />
                  <label className="customer__label" htmlFor={`last-name`}>
                    Last Name
                  </label>
                  <input
                    className="customer__input"
                    id={`last-name`}
                    placeholder={`Doe`}
                    type={`text`}
                  />
                  <label className="customer__label" htmlFor={`email`}>
                    Email
                  </label>
                  <input
                    className="customer__input"
                    id={`email`}
                    placeholder={`example@domain.com`}
                    type={`email`}
                  />
                  <label className="customer__label" htmlFor={`phone`}>
                    Phone
                  </label>
                  <input
                    className="customer__input"
                    id={`phone`}
                    placeholder={`(201) 555-5555`}
                    type={`text`}
                  />
                  <label className="customer__label" htmlFor={`address`}>
                    Address
                  </label>
                  <input
                    className="customer__input"
                    id={`address`}
                    placeholder={`123 Main Street, Anytown`}
                    type={`text`}
                  />
                  <label className="customer__label" htmlFor={`country`}>
                    Country
                  </label>
                  <input
                    className="customer__input"
                    id={`country`}
                    placeholder={`United States`}
                    type={`text`}
                  />
                  <div className="customer__actions">
                    <Button
                      className={`customer`}
                      type={`button`}
                      handleClick={completeCheckout}
                      buttonLabel={`Complete Purchase`}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="order">
              {isFetching ? (
                <Spinner2 />
              ) : (
                <>
                  <p className="order__title">Grant Total:</p>
                  <p className="order__amount">${cartTotal}</p>
                </>
              )}
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
