import Header from "../Header/Header";
import Banner from "../Banner/Banner";
// import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Services from "../Services/Services";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
//   import Swiper JS
//   import Swiper, { Autoplay, Keyboard, Mousewheel } from 'swiper';
//   import Swiper styles
//   import 'swiper/swiper-bundle.css';
//   import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
//   SwiperCore.use([Navigation, Pagination]);

  // init Swiper:

const LandingPage = () => {

    // const AUTOPLAY_DELAY = 5000;

    useEffect(() => {
        document.title = "Remotion - Home";
        // Swiper.use([Autoplay]);
        // Swiper.use([Keyboard]);
        // Swiper.use([Mousewheel]);
        // const swiperOptions = {
        //     speed:3000,
        //     direction: 'horizontal',
        //     loop: true,
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //         clickable: true
        //     },
        //     pagination: {
        //         el: '.swiper-pagination',
        //         dynamicBullets: true,
        //     },
        //     zoom: true,
        //     keyboard: 
        //     {
        //         enabled: true,
        //         onlyInViewport: false,
        //     },
        //     mousewheel: 
        //     {
        //         invert: true,
        //     },
        //     autoplay: {
        //         delay: AUTOPLAY_DELAY,
        //         disableOnInteraction: true,
        //     },
        // };
        // let swiper = new Swiper(".swiper-container", swiperOptions);
        
    }, []);

    return(
        <div className="App">
        <Header/>
        <main className="main">
            <Banner/>
            <Categories/>
            <Featured/>
            <Services/>
            <Newsletter/>
        </main>
        <Footer/>
    </div>
    )
}

export default LandingPage;