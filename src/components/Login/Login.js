import { useContext, useEffect, useRef, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import x from "../../assets/figures/x.png";
import o from "../../assets/figures/o.png";
import { getStoredUser } from "../../services/user-service";

const logo =
  "https://uploads-ssl.webflow.com/601fd7c23be42a77baaedb3a/601fd7c23be42a70d2aedb4e_Remotion-logo-black-bg.svg";

const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const usernameId = useRef();
  const [password, setPassword] = useState("");
  const passwordId = useRef();
  const [firstName, setFirstName] = useState("");
  const firstNameId = useRef();
  const [lastName, setLastName] = useState("");
  const lastNameId = useRef();
  const [usernameRegister, setUsernameRegister] = useState("");
  const usernameRegisterId = useRef();
  const [passwordRegister, setPasswordRegister] = useState("");
  const passwordRegisterId = useRef();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const { isLogged, setIsLogged, setUser } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Remotion - Login";
  }, []);

  const getUsername = (event) => {
    setUsername(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const getFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const getLastName = (event) => {
    setLastName(event.target.value);
  };

  const getUsernameRegister = (event) => {
    setUsernameRegister(event.target.value);
  };

  const getPasswordRegister = (event) => {
    setPasswordRegister(event.target.value);
  };

  const getLogin = () => {
    if (username === "") {
      setIsError(true);
      setMessage("You must enter a username to login.");
      usernameId.current.focus();
    } else if (password === "") {
      setIsError(true);
      setMessage("You must enter a password to login.");
      passwordId.current.focus();
    } else {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          username: username,
          password: password,
        })
      );
      setUser(getStoredUser());
      setIsLogged(true);
      history.push("/");
    }
    const timeout = setTimeout(() => {
      setIsError(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  };

  const getRegister = () => {
    if (firstName === "") {
      setIsError(true);
      setMessage("You must enter a first name to register.");
      firstNameId.current.focus();
    } else if (lastName === "") {
      setIsError(true);
      setMessage("You must enter a last name to register.");
      lastNameId.current.focus();
    } else if (usernameRegister === "") {
      setIsError(true);
      setMessage("You must enter a username to register.");
      usernameRegisterId.current.focus();
    } else if (passwordRegister === "") {
      setIsError(true);
      setMessage("You must enter a password to register.");
      passwordRegisterId.current.focus();
    } else {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: usernameRegister,
          password: passwordRegister,
        })
      );
      setUser(getStoredUser());
      setIsLogged(true);
      history.push("/");
    }
    const timeout = setTimeout(() => {
      setIsError(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  };

  return !isLogged ? (
    <main className="login">
      {isError && (
        <span className="login__message error" aria-live={`polite`}>
          {message}
        </span>
      )}
      <section className="box">
        <div className="box__image">
          <h1>.</h1>
          <img src={logo} className="box__logo" alt="eCommerce logo" />
        </div>
        <form className="box__form" onSubmit={() => {}}>
          <img src={x} alt={`Figure of an ex`} className="box__figure--x" />
          <img src={o} alt={`Figure of a circle`} className="box__figure--o" />
          <fieldset className="field">
            <div className="input-field">
              <label
                id={`username__label`}
                className="input-field__label"
                htmlFor={`username`}
                style={{ color: `#fff` }}
              >
                Username
              </label>
              <input
                className="input-field__input"
                type={`text`}
                onChange={getUsername}
                placeholder={`Username`}
                ref={usernameId}
                id={`username`}
                aria-describedby={`username__label`}
              />
            </div>
            <div className="input-field">
              <label
                id={`password__label`}
                className="input-field__label"
                htmlFor={`password`}
                style={{ color: `#fff` }}
              >
                Password
              </label>
              <input
                className="input-field__input"
                type={`password`}
                onChange={getPassword}
                placeholder={`Password`}
                ref={passwordId}
                id={`password`}
                aria-describedby={`password__label`}
              />
            </div>
            <button
              type={`button`}
              className="field__btn"
              onClick={() => {
                getLogin();
              }}
            >
              <span className="field__span">Login</span>
            </button>
          </fieldset>
          <fieldset className="register">
            <div className="input-field">
              <label
                className="input-field__label"
                htmlFor={`firstName`}
                style={{ color: `#fff` }}
                id={`firstName__label`}
              >
                First Name
              </label>
              <input
                className="input-field__input"
                type={`text`}
                onChange={getFirstName}
                placeholder={`John`}
                ref={firstNameId}
                id={`firstName`}
                aria-describedby={`firstName__label`}
              />
            </div>
            <div className="input-field">
              <label
                className="input-field__label"
                htmlFor={`lastName`}
                style={{ color: `#fff` }}
                id={`lastName__label`}
              >
                Last Name
              </label>
              <input
                className="input-field__input"
                type={`text`}
                onChange={getLastName}
                placeholder={`Doe`}
                ref={lastNameId}
                id={`lastName`}
                aria-describedby={`lastName__label`}
              />
            </div>
            <div className="input-field">
              <label
                className="input-field__label"
                htmlFor={`usernameRegister`}
                style={{ color: `#fff` }}
                id={`usernameRegister__label`}
              >
                Username
              </label>
              <input
                className="input-field__input"
                type={`text`}
                onChange={getUsernameRegister}
                placeholder={`Username`}
                ref={usernameRegisterId}
                id={`usernameRegister`}
                aria-describedby={`usernameRegister__label`}
              />
            </div>
            <div className="input-field">
              <label
                className="input-field__label"
                htmlFor={`passwordRegister`}
                style={{ color: `#fff` }}
                id={`passwordRegister__label`}
              >
                Password
              </label>
              <input
                className="input-field__input"
                type={`password`}
                onChange={getPasswordRegister}
                placeholder={`Password`}
                ref={passwordRegisterId}
                id={`passwordRegister`}
                aria-describedby={`passwordRegister__label`}
              />
            </div>
            <button
              type={`button`}
              className="field__btn"
              onClick={() => {
                getRegister();
              }}
            >
              <span className="field__span">Register</span>
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  ) : (
    <Redirect to={"/home"} />
  );
};

export default Login;
