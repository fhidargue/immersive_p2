import { useContext } from "react";
import CookieContext from "../../store/Cookies/CookieContext";
import Button from "../Button/Button";
import Cookies from 'js-cookie';

const CookieMessage = () => {
    const {enableCookies, setEnableCookies} = useContext(CookieContext);

    const acceptCookies = () => {
        Cookies.set("userData", sessionStorage.getItem('user'), {expires:2});
        setEnableCookies(true);
    }

    return !enableCookies && (
        <div className="cookies">
            <p className="cookies__message">This site uses Cookies. By tapping ACCEPT COOKIES, you agree to our use of cookies and other technologies to process your personal data and personalise your experience, on and off our sites.</p>
            <Button className={`cookies`} type={`button`} handleClick={acceptCookies} buttonLabel={`ACCEPT COOKIES`}/>
        </div>
    )
}

export default CookieMessage;