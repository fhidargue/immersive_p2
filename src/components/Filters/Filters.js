import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import search from "../../assets/images/services/search.svg";
import useDebounce from "../../hooks/useDebounce";

const DEBOUNCE_DELAY = 1000;

const Filters = (props) => {
  const { categoryUrl } = props;
  const { setFilterValue } = props;
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);
  const history = useHistory();
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
    history.push(`/products/pop-culture`);
  };

  const changeBorderTees = () => {
    setPopActive(false);
    setTeesActive(true);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(false);
    history.push(`/products/tees`);
  };

  const changeBorderBags = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(true);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(false);
    history.push(`/products/bags`);
  };

  const changeBorderHats = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(true);
    setBandActive(false);
    setSaleActive(false);
    history.push(`/products/hats`);
  };

  const changeBorderBand = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(true);
    setSaleActive(false);
    history.push(`/products/band-merch`);
  };

  const changeBorderSale = () => {
    setPopActive(false);
    setTeesActive(false);
    setBagsActive(false);
    setHatsActive(false);
    setBandActive(false);
    setSaleActive(true);
    history.push(`/products/clearance`);
  };

  return (
    <section className="filters">
      <div className="filters__wrapper">
        <p className="filters__title">Filters</p>
        <div className="filters__options">
          <div className="categoryFilter">
            <p className="categoryFilter__title">
              Categories /{" "}
              <Link to={`/products/all`} className="categoryFilter__reset">
                Reset
              </Link>
            </p>
            <ul className="categoryFilter__options">
              {!popActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category1"
                    onClick={changeBorderPop}
                  >
                    Pop Culture
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category1 active"
                    onClick={changeBorderPop}
                  >
                    Pop Culture
                  </button>
                </li>
              )}
              {!teesActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category2"
                    onClick={changeBorderTees}
                  >
                    Tees
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category2 active"
                    onClick={changeBorderTees}
                  >
                    Tees
                  </button>
                </li>
              )}
              {!bagsActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category3"
                    onClick={changeBorderBags}
                  >
                    Bags
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category3 active"
                    onClick={changeBorderBags}
                  >
                    Bags
                  </button>
                </li>
              )}
              {!hatsActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category1"
                    onClick={changeBorderHats}
                  >
                    Hats
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category1 active"
                    onClick={changeBorderHats}
                  >
                    Hats
                  </button>
                </li>
              )}
              {!bandActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category2"
                    onClick={changeBorderBand}
                  >
                    Band Merch
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category2 active"
                    onClick={changeBorderBand}
                  >
                    Band Merch
                  </button>
                </li>
              )}
              {!saleActive ? (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category3"
                    onClick={changeBorderSale}
                  >
                    Clearance
                  </button>
                </li>
              ) : (
                <li className="categoryFilter__list">
                  <button
                    className="categoryFilter__link category3 active"
                    onClick={changeBorderSale}
                  >
                    Clearance
                  </button>
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
