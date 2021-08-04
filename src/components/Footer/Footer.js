import { Link } from "react-router-dom";
import facebook from "../../assets/images/socials/facebook.svg";
import youtube from "../../assets/images/socials/youtube.svg";
import instagram from "../../assets/images/socials/instagram.svg";
import twitter from "../../assets/images/socials/twitter.svg";

const Footer = () => {

    return(
        <footer className="footer">
            <div className="company">
                <ul className="company__options">
                    <li className="company__list"><Link to={'/'} className="company__link remotion">Remotion©2021</Link></li>
                    <li className="company__list"><Link to={'/'} className="company__link">Blog</Link></li>
                    <li className="company__list"><Link to={'/'} className="company__link">FAQs</Link></li>
                    <li className="company__list"><Link to={'/'} className="company__link">Contact Us</Link></li>
                </ul>
            </div>
            <div className="socials">
                <ul className="socials__options">
                    <li className="socials__list">
                        <Link className="socials__link" to={`/`}><img className="socials__image facebook" src={facebook} alt={`Facebook social icon`}/></Link>
                    </li>
                    <li className="socials__list">
                        <Link className="socials__link" to={`/`}><img className="socials__image instagram" src={instagram} alt={`Instagram social icon`}/></Link>
                    </li>
                    <li className="socials__list">
                        <Link className="socials__link" to={`/`}><img className="socials__image youtube" src={youtube} alt={`Youtube social icon`}/></Link>
                    </li>
                    <li className="socials__list">
                        <Link className="socials__link" to={`/`}><img className="socials__image twitter" src={twitter} alt={`Twitter social icon`}/></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;