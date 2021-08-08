import { useRef, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const emailId = useRef();
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const getNewsletter = () => {
    if (email === "" || !validateEmail(email)) {
      setIsError(true);
      setMessage("You must enter a valid email to subscribe.");
      emailId.current.focus();
      const timeout = setTimeout(() => {
        setIsError(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsValid(true);
      setMessage(
        "Thanks for subscribing. A welcome message will arrive shortly!"
      );
      emailId.current.value = "";
      const timeout = setTimeout(() => {
        setIsValid(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        {isError && (
          <span className="newsletter__message error" aria-live={`polite`}>
            {message}
          </span>
        )}
        {isValid && (
          <span className="newsletter__message success" aria-live={`polite`}>
            {message}
          </span>
        )}
        <p className="newsletter__title">Newsletter</p>
        <form className="form">
          <fieldset className="form__field">
            <label className="form__label" htmlFor={`form__input`}>
              Get timely updates from your favorite products.
            </label>
            <div className="form__actions">
              <input
                id={`form__input`}
                className="form__input"
                type={`email`}
                onChange={getEmail}
                ref={emailId}
              />
              <button
                className="form__btn"
                type={`button`}
                onClick={() => {
                  getNewsletter();
                }}
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
