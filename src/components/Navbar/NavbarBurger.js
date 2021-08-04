import $ from 'jquery';
import { useContext } from 'react';
import AuthContext from '../../store/Authorization/AuthContext';

const NavbarBurger = () => {
    const {isLogged} = useContext(AuthContext);

    /**
   * CODE FOR THE MOBILE NAVIGATION
   */
    const openBurger = () => {
        $('.burger').toggleClass('active');
        $('.mobile').toggleClass('active');
        $('.mobile__image').toggleClass('active');
        $('.list__item--1').toggleClass('active');
        $('.list__item--2').toggleClass('active');
        $('.list__item--3').toggleClass('active');
        $('.list__item--4').toggleClass('active');
        $('.list__item--5').toggleClass('active');
        $('.list__item--link').toggleClass('active');
        return false;
    }

    return (
        <button className="burger" title="Menu Mobile" onClick={() => {
            openBurger();
        }} tabIndex={`0`}>
            <span className="burger__line line--1"></span>
            <span className="burger__line line--2"></span>
            <span className="burger__line line--3"></span>
        </button>
    )
}

export default NavbarBurger;