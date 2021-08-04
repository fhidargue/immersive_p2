import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Product from "./Product";
// import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import Filters from "../Filters/Filters";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../services/product-service";

const ProductList = (props) => {
  const { isFetching, setIsFetching, setGotProducts } =
    useContext(InventoryContext);
  const { categoryUrl } = useParams();
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    setIsFetching(true);
    getProducts(categoryUrl, filterValue).then((productsResponse) => {
      setProductsToShow(productsResponse);
      setIsFetching(false);
    });
  }, [
    filterValue,
    setGotProducts,
    setProductsToShow,
    setIsFetching,
    categoryUrl,
  ]);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="product-list">
          <h1 className="product-list__title">Product List</h1>
          <Filters setFilterValue={setFilterValue} />
          <div className="product-list__wrapper">
            {isFetching && <Spinner />}
            {!isFetching &&
              productsToShow.map((item) => {
                return (
                  <Product
                    key={item.name}
                    image={item.first_image}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    categoryUrl={categoryUrl}
                    url={item.url}
                  />
                );
              })}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;
