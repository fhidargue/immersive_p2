import support from "../../assets/images/services/support.svg";
import shipping from "../../assets/images/services/truck.svg";
import payment from "../../assets/images/services/credit-card.svg";
import returns from "../../assets/images/services/back-arrow.svg";

const Services = () => {

    return(
        <section className="services" >
            <p className="services__mainTitle">Our Services</p>
            <div className="services__wrapper">
                <div className="services__support" data-aos="zoom-in">
                    <img src={support} alt={`Support icon`} className="services__image"/>
                    <p className="services__title">Customer Support</p>
                    <p className="services__subtitle">Need Assistence?</p>
                    <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                </div>
                <div className="services__shipping" data-aos="zoom-in">
                    <img src={shipping} alt={`Shipping icon`} className="services__image"/>
                    <p className="services__title">Free Shipping</p>
                    <p className="services__subtitle">Orders Over $99</p>
                    <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                </div>
                <div className="services__payments" data-aos="zoom-in">
                    <img src={payment} alt={`Payment icon`} className="services__image"/>
                    <p className="services__title">Secured Payment</p>
                    <p className="services__subtitle">{`Safe & Fast`}</p>
                    <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                </div>
                <div className="services__returns" data-aos="zoom-in">
                    <img src={returns} alt={`Returns icon`} className="services__image"/>
                    <p className="services__title">Free Returns</p>
                    <p className="services__subtitle">{`Easy & Free`}</p>
                    <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                </div>
            </div>
        </section>
    )
}

export default Services;