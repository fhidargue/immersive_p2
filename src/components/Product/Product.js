import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";

const Product = (props) => {
  const { image, name, price, id, url } = props;
  const history = useHistory();

  const addToCart = () => {
    history.push(`/product/${url}`);
  };

  return (
    <div className="product__wrapper">
      <Link to={`/product/${url}`}>
        <img
          className={`product__image product${id}`}
          src={image}
          alt={`Product ${name}`}
        />
      </Link>
      <Link to={`/product/${url}`} className={`product__link product${id}`}>
        <p className="product__name">{name}</p>
      </Link>
      <p className="product__price">${price}</p>
      <Button
        className={`product`}
        extraClass={`product${id}`}
        type={`button`}
        handleClick={addToCart}
        buttonLabel={`Add To Cart`}
      />
    </div>
  );
};

export default Product;
