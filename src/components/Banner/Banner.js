import image1 from "../../assets/figures/1.png";
import image2 from "../../assets/figures/2.png";
import image3 from "../../assets/figures/3.png";
import image4 from "../../assets/figures/4.png";
import image5 from "../../assets/figures/5.png";
import image6 from "../../assets/figures/6.png";
import image7 from "../../assets/figures/7.png";
import image8 from "../../assets/figures/8.png";
import image9 from "../../assets/figures/9.png";
import image10 from "../../assets/figures/10.png";
import image11 from "../../assets/figures/11.png";
import image12 from "../../assets/figures/12.png";
import $ from 'jquery';
import { useContext, useEffect } from "react";
import CookieContext from "../../store/Cookies/CookieContext";
import CookieMessage from "../CookieMessage/CookieMessage";

const Banner = (props) => {
    const {enableCookies} = useContext(CookieContext);
    const DEFAULT_MARGIN = -5;
    const INTERVAL = 6000;

    useEffect(() => {
        $('.banner__layer').addClass('pink');
        setInterval(() => {
            if($('.banner__layer').hasClass('pink')){
                $('.banner__layer').removeClass('pink');
                $('.banner__layer').addClass('green');
            } else if($('.banner__layer').hasClass('green')){
                $('.banner__layer').removeClass('green');
                $('.banner__layer').addClass('yellow');
            }
            else if($('.banner__layer').hasClass('yellow')){
                $('.banner__layer').removeClass('yellow');
                $('.banner__layer').addClass('blue');
            }else if($('.banner__layer').hasClass('blue')){
                $('.banner__layer').removeClass('blue');
                $('.banner__layer').addClass('pink');
            }
        }, INTERVAL);
        setTimeout(() => {
            $('.cookies').css('opacity', '1');
        }, 10000);
    }, []);

    return(
        <section className="banner">
            <img src={image1} alt={`Triangle`} data-speed={`-5`} className="banner__image"/>
            <img src={image2} alt={`Ex`} data-speed={`5`} className="banner__image"/>
            <img src={image3} alt={`Square`} data-speed={`2`} className="banner__image"/>
            <img src={image4} alt={`Pentagon`} data-speed={`6`} className="banner__image"/>
            <img src={image5} alt={`Flash`} data-speed={`8`} className="banner__image"/>
            <img src={image6} alt={`Small flash`} data-speed={`-2`} className="banner__image" style={{marginTop: `${DEFAULT_MARGIN}rem`}}/>
            <img src={image7} alt={`Star`} data-speed={`4`} className="banner__image"/>
            <img src={image8} alt={`Square`} data-speed={`3`} className="banner__image"/>
            <img src={image9} alt={`Ex`} data-speed={`6`} className="banner__image"/>
            <img src={image10} alt={`Circle`} data-speed={`-7`} className="banner__image"/>
            <img src={image11} alt={`Hexagon`} data-speed={`-5`} className="banner__image"/>
            <img src={image12} alt={`Triangle`} data-speed={`5`} className="banner__image"/>
            <h1 className="banner__layer" data-speed={`2`}>Remotion</h1>
            {!enableCookies && <CookieMessage/>}
        </section>
    )
}

export default Banner;