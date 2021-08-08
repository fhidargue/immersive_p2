import { useContext, useEffect, useRef, useState } from "react";
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
  const [firstName, setFirstName] = useState("");
  const firstNameId = useRef();
  const [lastName, setLastName] = useState("");
  const lastNameId = useRef();
  const [email, setEmail] = useState("");
  const emailId = useRef();
  const [phone, setPhone] = useState("");
  const phoneId = useRef();
  const [address, setAddress] = useState("");
  const addressId = useRef();
  const [country, setCountry] = useState("");
  const countryId = useRef();
  const [cardNumber, setCardNumber] = useState("");
  const cardNumberId = useRef();
  const [cardDate, setCardDate] = useState("");
  const cardDateId = useRef();
  const [cardCsc, setCardCsc] = useState("");
  const cardCscId = useRef();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
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
  }, [setIsFetching, setIsError]);

  const getFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const getLastName = (event) => {
    setLastName(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getPhone = (event) => {
    setPhone(event.target.value);
  };

  const getAddress = (event) => {
    setAddress(event.target.value);
  };

  const getCountry = (event) => {
    setCountry(event.target.value);
  };

  const getCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const getCardDate = (event) => {
    setCardDate(event.target.value);
  };

  const getCardCsc = (event) => {
    setCardCsc(event.target.value);
  };

  const completeCheckout = () => {
    if (firstName === "") {
      setIsError(true);
      setMessage("You must enter a first name.");
      firstNameId.current.focus();
    } else if (lastName === "") {
      setIsError(true);
      setMessage("You must enter a last name.");
      lastNameId.current.focus();
    } else if (email === "") {
      setIsError(true);
      setMessage("You must enter an email.");
      emailId.current.focus();
    } else if (phone === "") {
      setIsError(true);
      setMessage("You must enter a phone number.");
      phoneId.current.focus();
    } else if (address === "") {
      setIsError(true);
      setMessage("You must enter an address.");
      addressId.current.focus();
    } else if (country === "") {
      setIsError(true);
      setMessage("You must enter a country.");
      countryId.current.focus();
    } else if (cardNumber === "") {
      setIsError(true);
      setMessage("You must enter a card number.");
      cardNumberId.current.focus();
    } else if (cardDate === "") {
      setIsError(true);
      setMessage("You must enter a card expiration date.");
      cardDateId.current.focus();
    } else if (cardCsc === "") {
      setIsError(true);
      setMessage("You must enter a card security code.");
      cardCscId.current.focus();
    } else {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartTotal");
      history.push("/purchase");
    }
    const timeout = setTimeout(() => {
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
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
            {isError && (
              <span className="checkout__message error" aria-live={`polite`}>
                {message}
              </span>
            )}
            <div className="customer">
              <form className="customer__form">
                <fieldset className="customer__fieldset">
                  <div className="customer__info">
                    <p className="customer__title" id={`information`}>
                      Your Information
                    </p>
                    <label className="customer__label" htmlFor={`first-name`}>
                      First Name
                    </label>
                    <input
                      className="customer__input"
                      id={`first-name`}
                      placeholder={`John`}
                      type={`text`}
                      onChange={getFirstName}
                      ref={firstNameId}
                      aria-describedby={`information`}
                    />
                    <label className="customer__label" htmlFor={`last-name`}>
                      Last Name
                    </label>
                    <input
                      className="customer__input"
                      id={`last-name`}
                      placeholder={`Doe`}
                      type={`text`}
                      onChange={getLastName}
                      ref={lastNameId}
                      aria-describedby={`information`}
                    />
                    <label className="customer__label" htmlFor={`email`}>
                      Email
                    </label>
                    <input
                      className="customer__input"
                      id={`email`}
                      placeholder={`example@domain.com`}
                      type={`email`}
                      onChange={getEmail}
                      ref={emailId}
                      aria-describedby={`information`}
                    />
                    <label className="customer__label" htmlFor={`phone`}>
                      Phone
                    </label>
                    <input
                      className="customer__input"
                      id={`phone`}
                      placeholder={`(201) 555-5555`}
                      type={`text`}
                      onChange={getPhone}
                      ref={phoneId}
                      aria-describedby={`information`}
                    />
                    <label className="customer__label" htmlFor={`address`}>
                      Address
                    </label>
                    <input
                      className="customer__input"
                      id={`address`}
                      placeholder={`123 Main Street, Anytown`}
                      type={`text`}
                      onChange={getAddress}
                      ref={addressId}
                      aria-describedby={`information`}
                    />
                    <label className="customer__label" htmlFor={`country`}>
                      Country
                    </label>
                    <input
                      className="customer__input"
                      id={`country`}
                      placeholder={`United States`}
                      type={`text`}
                      onChange={getCountry}
                      ref={countryId}
                      aria-describedby={`information`}
                    />
                  </div>
                  <div className="customer__card">
                    <p className="customer__title card" id={`card-info`}>
                      Card Information
                    </p>
                    <label className="customer__label" htmlFor={`card-number`}>
                      Card Number
                    </label>
                    <input
                      className="customer__input"
                      placeholder={`1234567890123456`}
                      id={`card-number`}
                      type={`text`}
                      onChange={getCardNumber}
                      ref={cardNumberId}
                      aria-describedby={`card-info`}
                    />
                    <label className="customer__label" htmlFor={`card-date`}>
                      Expiration Date
                    </label>
                    <input
                      className="customer__input"
                      id={`card-date`}
                      placeholder={`09/2021`}
                      type={`text`}
                      onChange={getCardDate}
                      ref={cardDateId}
                      aria-describedby={`card-info`}
                    />
                    <label className="customer__label" htmlFor={`card-cvc`}>
                      Verification Code
                    </label>
                    <input
                      className="customer__input"
                      id={`card-cvc`}
                      placeholder={`123`}
                      type={`text`}
                      onChange={getCardCsc}
                      ref={cardCscId}
                      aria-describedby={`card-info`}
                    />
                    <div className="customer__actions">
                      <Button
                        className={`customer`}
                        type={`button`}
                        handleClick={completeCheckout}
                        buttonLabel={`Complete Purchase`}
                      />
                    </div>
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
