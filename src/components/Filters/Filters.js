import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/images/services/search.svg";
import useDebounce from "../../hooks/useDebounce";

const DEBOUNCE_DELAY = 500;

const Filters = (props) => {
  const { setFilterValue } = props;
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    setFilterValue(debouncedValue);
  }, [setFilterValue, debouncedValue]);

  return (
    <section className="filters">
      <div className="filters__wrapper">
        <p className="filters__title">Filters</p>
        <div className="filters__options">
          <div className="categoryFilter">
            <p className="categoryFilter__title">Categories</p>
            <ul className="categoryFilter__options">
              <li className="categoryFilter__list category1">
                <Link
                  to={`/products/pop-culture`}
                  className="categoryFilter__link"
                >
                  Pop Culture
                </Link>
              </li>
              <li className="categoryFilter__list category2">
                <Link to={`/products/tees`} className="categoryFilter__link">
                  Tees
                </Link>
              </li>
              <li className="categoryFilter__list category3">
                <Link to={`/products/bags`} className="categoryFilter__link">
                  Bags
                </Link>
              </li>
              <li className="categoryFilter__list category1">
                <Link to={`/products/hats`} className="categoryFilter__link">
                  Hats
                </Link>
              </li>
              <li className="categoryFilter__list category2">
                <Link
                  to={`/products/band-merch`}
                  className="categoryFilter__link"
                >
                  Band Merch
                </Link>
              </li>
              <li className="categoryFilter__list category3">
                <Link
                  to={`/products/clearance`}
                  className="categoryFilter__link"
                >
                  Clearance
                </Link>
              </li>
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
