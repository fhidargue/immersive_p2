import { useContext, useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import InputField from "../InputField/InputField";
import x from "../../assets/figures/x.png";
import o from "../../assets/figures/o.png";

const logo = 'https://uploads-ssl.webflow.com/601fd7c23be42a77baaedb3a/601fd7c23be42a70d2aedb4e_Remotion-logo-black-bg.svg';

const Login = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isLogged, setIsLogged} = useContext(AuthContext);   
    
    useEffect(() => {
        document.title = "Remotion - Login";
    }, []);

    const getUsername = (event) => {
        setUsername(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const getUser = () => {
        sessionStorage.setItem('user', JSON.stringify({
            username: username,
            password: password
        }));
        setIsLogged(true);
        history.push("/home");
    }
    
    return !isLogged ? (
        <main className="login">
            <section className="box">
                <div className="box__image">
                    <img src={logo} className="box__logo" alt="logo" />
                </div>
                <form className="box__form" onSubmit={() => {}}>
                    <img src={x} alt={`Figure of an ex`} className="box__figure--x"/>
                    <img src={o} alt={`Figure of a circle`} className="box__figure--o"/>
                    <fieldset className="field">
                        <InputField id={`username`} labelText={`Username`} type={`text`} name={`username`} handleChange={getUsername} placeholder={`Your username`} color={`#fff`}/>
                        <InputField id={`password`} labelText={`Password`} type={`password`} name={`password`} handleChange={getPassword} placeholder={`Your password`} color={`#fff`}/>
                        <button type={`button`} className="field__btn" onClick={() => {getUser()}}>
                            <span className="field__span">LOGIN</span>
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    ) : (
        <Redirect to={"/home"} />
    );
}

export default Login;
