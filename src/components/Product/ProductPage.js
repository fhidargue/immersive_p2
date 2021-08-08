import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product-service";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import CartContext from "../../store/Cart/CartContext";
import Timeline from "../Timeline/Timeline";
import { getStoredCart, getStoredTotal } from "../../services/product-service";
import ReactImageMagnify from "react-image-magnify";

const ProductPage = () => {
  const { productUrl } = useParams();
  const { product, setProduct, isFetching, setIsFetching } =
    useContext(InventoryContext);
  const { setCartContext } = useContext(CartContext);
  const [backImage, setBackImage] = useState("");
  const [isLess, setIsLess] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const DEFAULT_DELAY = 5000;

  useEffect(() => {
    document.title = `Remotion - Product Page`;
    setIsFetching(true);
    const timeout = setTimeout(() => {
      getProduct(productUrl).then((productResponse) => {
        setBackImage(productResponse.first_image);
        setProduct(productResponse);
        setIsFetching(false);
      });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [setProduct, productUrl, setIsFetching]);

  const getQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const firstPortrait = () => {
    /**
     * On click, change the image main portrait to this first element
     */
    setBackImage(product.first_image);
  };

  const secondPortrait = () => {
    /**
     * On click, change the image main portrait to this second element
     */
    setBackImage(product.second_image);
  };

  const addToCart = () => {
    if (quantity === "" || quantity < 1) {
      /**
       * Error message on adding a product to the cart
       */
      setIsLess(true);
      setTimeout(() => {
        setIsLess(false);
      }, DEFAULT_DELAY);
    } else {
      product.quantity = quantity;
      let total = product.price * product.quantity;
      const cartTotal = getStoredTotal();
      let newTotal = Math.round((parseFloat(cartTotal) + total) * 100) / 100;
      localStorage.setItem("cartTotal", newTotal);
      const newCart = getStoredCart();
      let array = [...newCart, product];
      setCartContext(array);
      localStorage.setItem("cart", JSON.stringify(array));
      /**
       * Success in adding this product to the cart message
       */
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, DEFAULT_DELAY);
    }
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return product ? (
    <div className="App">
      <Header />
      <main className="main">
        {isFetching ? (
          <Spinner />
        ) : (
          <section className="product-page">
            {isLess && (
              <span
                className={`product-page__message error`}
                aria-live={`polite`}
              >
                The product Quantity must be at least 1 unit.
              </span>
            )}
            {isSuccess && (
              <span
                className={`product-page__message success`}
                aria-live={`polite`}
              >
                {`${product.name}, was added to your cart!`}
              </span>
            )}
            <div className="product-page__timeline">
              <Timeline page={product.name} />
            </div>
            <div className="product-page__wrapper">
              <div className="product-page__image">
                <div
                  style={{
                    backgroundImage: `url(${backImage})`,
                  }}
                  aria-label={`${product.name} product portrait`}
                  className="product-page__portrait"
                  id={`main-portrait`}
                ></div>
                <div
                  aria-label={`${product.name} product portrait`}
                  className="product-page__portrait desktop"
                  id={`main-portrait-desktop`}
                >
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: `${product.name} image`,
                        isFluidWidth: true,
                        src: `${backImage}`,
                        sizes:
                          "(min-width: 400px) 33.5vw, (min-width: 215px) 100vw, 50vw",
                      },
                      largeImage: {
                        alt: `${product.name} image`,
                        src: `${backImage}`,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
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
                      <div className="qty">
                        <label
                          className="product-page__label"
                          value={`Quantity of the product`}
                          htmlFor={`product${product.id}`}
                        >
                          Quantity
                        </label>
                        <div className="qty__options">
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
                            value={quantity}
                            onChange={getQuantity}
                          />
                          <Button
                            className={`plus`}
                            type={`button`}
                            handleClick={addQuantity}
                            buttonLabel={`+`}
                          />
                        </div>
                      </div>
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
    <div className="App">
      <Header />
      <main className="main">
        <Spinner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
