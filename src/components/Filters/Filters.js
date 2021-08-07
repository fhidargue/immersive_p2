import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/images/services/search.svg";
import useDebounce from "../../hooks/useDebounce";

const DEBOUNCE_DELAY = 1000;

const Filters = (props) => {
  const { categoryUrl } = props;
  const { setFilterValue } = props;
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);
  const [popActive, setPopActive] = useState(false);
  const [teesActive, setTeesActive] = useState(false);
  const [bagsActive, setBagsActive] = useState(false);
  const [hatsActive, setHatsActive] = useState(false);
  const [bandActive, setBandActive] = useState(false);
  const [saleActive, setSaleActive] = useState(false);

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    setFilterValue(debouncedValue);
  }, [setFilterValue, debouncedValue]);

  useEffect(() => {
    if (categoryUrl === "all") {
      setPopActive(false);
      setTeesActive(false);
      setBagsActive(false);
      setHatsActive(false);
      setBandActive(false);
      setSaleActive(false);
    }
  }, [categoryUrl]);

  const changeBorderPop = () => {
    setPopActive(true);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(false);
  };

  const changeBorderTees = () => {
    setPopActive(false);
    setTeesActive(true);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(false);
  };

  const changeBorderBags = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(true);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(false);
  };

  const changeBorderHats = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(true);
    setBandActive(false);
    setSaleActive(false);
  };

  const changeBorderBand = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(true);
    setSaleActive(false);
  };

  const changeBorderSale = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(true);
  };

  return (
    <section className="filters">
      <div className="filters__wrapper">
        <p className="filters__title">Filters</p>
        <div className="filters__options">
          <div className="categoryFilter">
            <p className="categoryFilter__title">Categories</p>
            <ul className="categoryFilter__options">
              {!popActive ? (
                <li className="categoryFilter__list category1">
                  <Link
                    to={`/products/pop-culture`}
                    className="categoryFilter__link"
                    onClick={changeBorderPop}
                  >
                    Pop Culture
                  </Link>
                </li>
              ) : (
                <li className="categoryFilter__list category1 active">
                  <Link
                    to={`/products/pop-culture`}
                    className="categoryFilter__link"
                    onClick={changeBorderPop}
                  >
                    Pop Culture
                  </Link>
                </li>
              )}
              {!teesActive ? (
                <li className="categoryFilter__list category2">
                  <Link
                    to={`/products/tees`}
                    className="categoryFilter__link"
                    onClick={changeBorderTees}
                  >
                    Tees
                  </Link>
                </li>
              ) : (
                <li className="categoryFilter__list category2 active">
                  <Link
                    to={`/products/tees`}
                    className="categoryFilter__link"
                    onClick={changeBorderTees}
                  >
                    Tees
                  </Link>
                </li>
              )}
              {!bagsActive ? (
                <li className="categoryFilter__list category3">
                  <Link
                    to={`/products/bags`}
                    className="categoryFilter__link"
                    onClick={changeBorderBags}
                  >
                    Bags
                  </Link>
                </li>
              ) : (
                <li className="categoryFilter__list category3 active">
                  <Link
                    to={`/products/bags`}
                    className="categoryFilter__link"
                    onClick={changeBorderBags}
                  >
                    Bags
                  </Link>
                </li>
              )}
              {!hatsActive ? (
                <li className="categoryFilter__list category1">
                  <Link
                    to={`/products/hats`}
                    className="categoryFilter__link"
                    onClick={changeBorderHats}
                  >
                    Hats
                  </Link>
                </li>
              ) : (
                <li className="categoryFilter__list category1 active">
                  <Link
                    to={`/products/hats`}
                    className="categoryFilter__link"
                    onClick={changeBorderHats}
                  >
                    Hats
                  </Link>
                </li>
              )}
              {!bandActive ? (
                <li
                  className="categoryFilter__list category2"
                  onClick={changeBorderBand}
                >
                  <Link
                    to={`/products/band-merch`}
                    className="categoryFilter__link"
                  >
                    Band Merch
                  </Link>
                </li>
              ) : (
                <li
                  className="categoryFilter__list category2 active"
                  onClick={changeBorderBand}
                >
                  <Link
                    to={`/products/band-merch`}
                    className="categoryFilter__link"
                  >
                    Band Merch
                  </Link>
                </li>
              )}
              {!saleActive ? (
                <li
                  className="categoryFilter__list category3"
                  onClick={changeBorderSale}
                >
                  <Link
                    to={`/products/clearance`}
                    className="categoryFilter__link"
                  >
                    Clearance
                  </Link>
                </li>
              ) : (
                <li
                  className="categoryFilter__list category3 active"
                  onClick={changeBorderSale}
                >
                  <Link
                    to={`/products/clearance`}
                    className="categoryFilter__link"
                  >
                    Clearance
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="searchFilter">
            <label
              htmlFor={`product-filter`}
              className="searchFilter__label"
              value={`Filter by Name`}
            >
              Filter by Name
            </label>
            <input
              type={`text`}
              className="searchFilter__input"
              placeholder={`Search...`}
              onChange={handleChange}
              value={value}
              id={`product-filter`}
            />
            <img
              src={search}
              alt={`Search icon`}
              className="searchFilter__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
