import { useContext } from "react";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Product from "../Product/Product";

const Featured = () => {
    const {products} = useContext(InventoryContext);
    const pop = products.find((item) => {
        return item.id === 1;
    });
    const categoryUrl = "pop-culture";

    return(
        <section className="featured" data-aos={`fade-up`}>
            <p className="featured__title">Featured Products</p>
            <div className="featured__products">
            {
                pop.products.map((product) => {
                    return (
                        <Product key={product.id} image={product.first_image} name={product.name} price={product.price} id={product.id} categoryUrl={categoryUrl} url={product.url}/>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Featured;