import support from "../../assets/images/services/support.svg";
import shipping from "../../assets/images/services/truck.svg";
import payment from "../../assets/images/services/credit-card.svg";
import returns from "../../assets/images/services/back-arrow.svg";

const Services = () => {
  return (
    <section className="services">
      <p className="services__mainTitle">Our Services</p>
      <div className="services__wrapper">
        <div className="services__support" data-aos="zoom-in">
          <img src={support} alt={`Support icon`} className="services__image" />
          <p className="services__title">Customer Support</p>
          <p className="services__subtitle">Need Assistence?</p>
          <p className="services__text">
            In case any help is needed, we offer a 24/7 customer support.
          </p>
        </div>
        <div className="services__shipping" data-aos="zoom-in">
          <img
            src={shipping}
            alt={`Shipping icon`}
            className="services__image"
          />
          <p className="services__title">Free Shipping</p>
          <p className="services__subtitle">Orders Over $99</p>
          <p className="services__text">
            For this month only, orders above $99 get free shipping worldwide.
          </p>
        </div>
        <div className="services__payments" data-aos="zoom-in">
          <img src={payment} alt={`Payment icon`} className="services__image" />
          <p className="services__title">Secured Payment</p>
          <p className="services__subtitle">{`Safe & Fast`}</p>
          <p className="services__text">
            In terms of payments, your information will always be secured and
            private at all times.
          </p>
        </div>
        <div className="services__returns" data-aos="zoom-in">
          <img src={returns} alt={`Returns icon`} className="services__image" />
          <p className="services__title">Free Returns</p>
          <p className="services__subtitle">{`Easy & Free`}</p>
          <p className="services__text">
            In case a return is needed, send it back to us completely free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
