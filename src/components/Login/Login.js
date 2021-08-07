import { useContext, useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import InputField from "../InputField/InputField";
import x from "../../assets/figures/x.png";
import o from "../../assets/figures/o.png";
import { getStoredUser } from "../../services/user-service";

const logo =
  "https://uploads-ssl.webflow.com/601fd7c23be42a77baaedb3a/601fd7c23be42a70d2aedb4e_Remotion-logo-black-bg.svg";

const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const getLogin = () => {
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
  };

  const getRegister = () => {
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      })
    );
    setUser(getStoredUser());
    setIsLogged(true);
    history.push("/");
  };

  return !isLogged ? (
    <main className="login">
      <section className="box">
        <div className="box__image">
          <img src={logo} className="box__logo" alt="eCommerce logo" />
        </div>
        <form className="box__form" onSubmit={() => {}}>
          <img src={x} alt={`Figure of an ex`} className="box__figure--x" />
          <img src={o} alt={`Figure of a circle`} className="box__figure--o" />
          <fieldset className="field">
            <InputField
              id={`username`}
              labelText={`Username`}
              type={`text`}
              name={`username`}
              handleChange={getUsername}
              placeholder={`Username`}
              color={`#fff`}
            />
            <InputField
              id={`password`}
              labelText={`Password`}
              type={`password`}
              name={`password`}
              handleChange={getPassword}
              placeholder={`Password`}
              color={`#fff`}
            />
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
            <InputField
              id={`first-name`}
              labelText={`First Name`}
              type={`text`}
              name={`first-name`}
              handleChange={getFirstName}
              placeholder={`John`}
              color={`#fff`}
            />
            <InputField
              id={`last-name`}
              labelText={`Last Name`}
              type={`text`}
              name={`last-name`}
              handleChange={getLastName}
              placeholder={`Doe`}
              color={`#fff`}
            />
            <InputField
              id={`username`}
              labelText={`Username`}
              type={`text`}
              name={`username`}
              handleChange={getUsername}
              placeholder={`Username`}
              color={`#fff`}
            />
            <InputField
              id={`password`}
              labelText={`Password`}
              type={`password`}
              name={`password`}
              handleChange={getPassword}
              placeholder={`Password`}
              color={`#fff`}
            />
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
