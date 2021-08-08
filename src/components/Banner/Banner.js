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
import $ from "jquery";
import { useContext, useEffect, useState } from "react";
import CookieContext from "../../store/Cookies/CookieContext";
import CookieMessage from "../CookieMessage/CookieMessage";

const Banner = (props) => {
  const { enableCookies } = useContext(CookieContext);
  const [colorClass, setColorClass] = useState("pink");
  const DEFAULT_MARGIN = -5;
  const INTERVAL = 6000;

  useEffect(() => {
    setInterval(() => {
      if (colorClass === "pink") {
        setColorClass("green");
      } else if (colorClass === "green") {
        setColorClass("yellow");
      } else if (colorClass === "yellow") {
        setColorClass("blue");
      } else if (colorClass === "blue") {
        setColorClass("pink");
      }
    }, INTERVAL);
    setTimeout(() => {
      $(".cookies").css("opacity", "1");
    }, 10000);
  }, [colorClass, setColorClass]);

  useEffect(() => {
    /**
     * Creating the parallax on banner, get all the elements and transform X and Y
     */
    const parallax = (event) => {
      document.querySelectorAll(".banner__image").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <section className="banner">
      <img
        src={image1}
        alt={`White triangle figure`}
        data-speed={`-5`}
        className="banner__image"
      />
      <img
        src={image2}
        alt={`White ex figure`}
        data-speed={`5`}
        className="banner__image"
      />
      <img
        src={image3}
        alt={`White square figure`}
        data-speed={`2`}
        className="banner__image"
      />
      <img
        src={image4}
        alt={`White pentagon figure`}
        data-speed={`6`}
        className="banner__image"
      />
      <img
        src={image5}
        alt={`Qhite flash figure`}
        data-speed={`8`}
        className="banner__image"
      />
      <img
        src={image6}
        alt={`Small flash`}
        data-speed={`-2`}
        className="banner__image"
        style={{ marginTop: `${DEFAULT_MARGIN}rem` }}
      />
      <img
        src={image7}
        alt={`Star`}
        data-speed={`4`}
        className="banner__image"
      />
      <img
        src={image8}
        alt={`Square`}
        data-speed={`3`}
        className="banner__image"
      />
      <img src={image9} alt={`Ex`} data-speed={`6`} className="banner__image" />
      <img
        src={image10}
        alt={`Circle`}
        data-speed={`-7`}
        className="banner__image"
      />
      <img
        src={image11}
        alt={`Hexagon`}
        data-speed={`-5`}
        className="banner__image"
      />
      <img
        src={image12}
        alt={`Triangle`}
        data-speed={`5`}
        className="banner__image"
      />
      <h1 className={`banner__layer ${colorClass}`} data-speed={`2`}>
        Remotion
      </h1>
      {enableCookies && <CookieMessage />}
    </section>
  );
};

export default Banner;
