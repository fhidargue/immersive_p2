import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import InventoryContext from "../../store/Inventory/InventoryContext";
import Product from "./Product";
import Pagination from "rc-pagination";
import { useParams } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import Filters from "../Filters/Filters";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../services/product-service";
import Timeline from "../Timeline/Timeline";

const ProductList = (props) => {
  const { isFetching, setIsFetching } = useContext(InventoryContext);
  const { categoryUrl } = useParams();
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const countPerPage = 8;
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    document.title = "Remotion - Product List";
    setIsFetching(true);
    getProducts(categoryUrl, filterValue).then((productsResponse) => {
      setProductsToShow(productsResponse);
      setCollection(productsResponse.slice(0, 8));
      setIsFetching(false);
    });
  }, [filterValue, setProductsToShow, setIsFetching, categoryUrl]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(productsToShow.slice(from, to));
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="product-list">
          <span className="product-page__message" aria-live={`polite`}></span>
          <h1 className="product-list__title" data-aos="zoom-in">
            Product List
          </h1>
          <Timeline page={`Product List`} url={`products/all`} />
          <Filters setFilterValue={setFilterValue} categoryUrl={categoryUrl} />
          <div className="product-list__wrapper">
            {isFetching && <Spinner />}
            {!isFetching &&
              collection.map((item) => {
                return (
                  <>
                    <Product
                      key={item.price}
                      image={item.first_image}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                      categoryUrl={categoryUrl}
                      url={item.url}
                      item={item}
                      quantity={item.quantity}
                    />
                  </>
                );
              })}
            {!isFetching && (
              <Pagination
                pageSize={countPerPage}
                onChange={updatePage}
                current={currentPage}
                total={productsToShow.length}
              />
            )}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;
