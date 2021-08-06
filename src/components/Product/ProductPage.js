import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product-service";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import $ from "jquery";
import CartContext from "../../store/Cart/CartContext";

const ProductPage = () => {
  const { productUrl } = useParams();
  const { product, setProduct, isFetching, setIsFetching } =
    useContext(InventoryContext);
  const { cart, setCart, cartTotal, setCartTotal } = useContext(CartContext);

  useEffect(() => {
    document.title = `Remotion - Product Page`;
    setIsFetching(true);
    const timeout = setTimeout(() => {
      getProduct(productUrl).then((productResponse) => {
        setProduct(productResponse);
        setIsFetching(false);
      });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [setProduct, productUrl, setIsFetching]);

  const firstPortrait = () => {
    $("#main-portrait").css("background-image", `url(${product.first_image})`);
  };

  const secondPortrait = () => {
    $("#main-portrait").css("background-image", `url(${product.second_image})`);
  };

  const addToCart = () => {
    let value = $(".product-page__input").val();
    if (value === "" || value < 1) {
      let message = $(".product-page__message");
      message.show();
      message.addClass("error");
      message.text("The product Quantity must be at least 1 unit.");
      setTimeout(() => {
        message.hide();
        message.removeClass("error");
        message.text("");
      }, 5000);
    } else {
      let qty = $(".product-page__input").val();
      product.quantity = parseInt(qty);
      let total = product.price * product.quantity;
      setCartTotal(Math.round((cartTotal + total) * 100) / 100);
      let array = [...cart, product];
      setCart(array);
      let message = $(".product-page__message");
      message.show();
      message.addClass("success");
      message.text(`${product.name} was added to your cart!`);
      setTimeout(() => {
        message.hide();
        message.removeClass("success");
        message.text("");
      }, 5000);
    }
  };

  const removeQuantity = () => {
    let value = $(".product-page__input").val();
    if (value === "" || value < 1) {
      let message = $(".product-page__message");
      message.show();
      message.addClass("error");
      message.text("The product Quantity must be more than 1 unit.");
      setTimeout(() => {
        message.hide();
        message.removeClass("error");
        message.text("");
      }, 5000);
    } else {
      value--;
    }
    $(".product-page__input").val(value);
  };

  const addQuantity = () => {
    let value = $(".product-page__input").val();
    if (value >= 100) {
      let message = $(".product-page__message");
      message.show();
      message.addClass("error");
      message.text("The product Quantity must be less than 100 units.");
      setTimeout(() => {
        message.hide();
        message.removeClass("error");
        message.text("");
      }, 5000);
    } else {
      value++;
    }
    $(".product-page__input").val(value);
  };

  return product ? (
    <div className="App">
      <Header />
      <main className="main">
        {isFetching ? (
          <Spinner />
        ) : (
          <section className="product-page">
            <span className="product-page__message" aria-live={`polite`}></span>
            <div className="product-page__wrapper">
              <div className="product-page__image">
                <div
                  style={{
                    backgroundImage: `url(${product.first_image})`,
                  }}
                  aria-label={`${product.name} product portrait`}
                  className="product-page__portrait"
                  id={`main-portrait`}
                ></div>
                <div className="product-page__options">
                  <button
                    className="product-page__options--btn"
                    onClick={firstPortrait}
                  >
                    <img
                      src={product.first_image}
                      alt={`${product.name} product first portrait`}
                      className="product-page__options--image"
                      id={`first-portrait`}
                    />
                  </button>
                  <button
                    className="product-page__options--btn"
                    onClick={secondPortrait}
                  >
                    <img
                      src={product.second_image}
                      alt={`${product.name} product second portrait`}
                      className="product-page__options--image second"
                      id={`second-portrait`}
                    />
                  </button>
                </div>
              </div>
              <div className="product-page__details">
                <h1 className="product-page__title">{product.name}</h1>
                <p className="product-page__description">
                  {product.description}
                </p>
                <p className="product-page__price">${product.price}</p>
                <form className="product-page__form">
                  <fieldset className="product-page__fieldset">
                    <div className="product-page__fieldset--division">
                      <label
                        className="product-page__label"
                        value={`Quantity of the product`}
                        htmlFor={`product${product.id}`}
                      >
                        Quantity
                      </label>
                      <Button
                        className={`minus`}
                        type={`button`}
                        handleClick={removeQuantity}
                        buttonLabel={`-`}
                      />
                      <input
                        className="product-page__input"
                        type={`number`}
                        id={`product${product.id}`}
                        placeholder={`1`}
                        min={`1`}
                        max={`100`}
                      />
                      <Button
                        className={`plus`}
                        type={`button`}
                        handleClick={addQuantity}
                        buttonLabel={`+`}
                      />
                    </div>
                    <Button
                      className={`product-page`}
                      type={`button`}
                      handleClick={addToCart}
                      buttonLabel={`Add To Cart`}
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </section>
        )}
        <Newsletter />
      </main>
      <Footer />
    </div>
  ) : (
    <Spinner />
  );
};

export default ProductPage;