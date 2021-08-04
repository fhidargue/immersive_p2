import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Product = (props) => {

    const addToCart = () => {

    };

    const {image, name, price, id, url} = props;
    return(
        <div className="product__wrapper">
            <Link to={`/products/${url}`}><img className={`product__image product${id}`} src={image} alt={`Product ${name}`}/></Link>
            <p className="product__name">{name}</p>
            <p className="product__price">${price}</p>
            <Button className={`product`} extraClass={`product${id}`} type={`button`} handleClick={addToCart} buttonLabel={`Add To Cart`}/>
        </div>
    )
}

export default Product;