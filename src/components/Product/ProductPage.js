import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product-service";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

const ProductPage = () => {
  const { productUrl } = useParams();
  const { product, setProduct } = useContext(InventoryContext);

  useEffect(() => {
    document.title = `Remotion - Product Page`;
    getProduct(productUrl).then((productResponse) => {
      setProduct(productResponse);
    });
  }, [setProduct, productUrl]);

  const addToCart = () => {};

  const removeQuantity = () => {};

  const addQuantity = () => {};

  return product ? (
    <div className="App">
      <Header />
      <main className="main">
        <section className="product-page">
          <div className="product-page__wrapper">
            <div className="product-page__image">
              <img
                src={product.first_image}
                alt={`${product.name} product portrait`}
                className="product-page__portrait"
              />
            </div>
            <div className="product-page__details">
              <h1 className="product-page__title">{product.name}</h1>
              <p className="product-page__description">{product.description}</p>
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
        <Newsletter />
      </main>
      <Footer />
    </div>
  ) : (
    <Spinner />
  );
};

export default ProductPage;
