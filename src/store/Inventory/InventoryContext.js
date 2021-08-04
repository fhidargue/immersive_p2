import { createContext, useState } from "react";
import json from "../../data/inventory.json";

localStorage.setItem("inventory", JSON.stringify(json));
const inventory = JSON.parse(localStorage.getItem("inventory"));

const initialState = {
  product: null,
  setProduct: () => {},
  products: inventory,
  setProducts: () => {},
  isFetching: false,
  setIsFetching: () => {},
};

const InventoryContext = createContext(initialState);

export const InventoryProvider = ({ children }) => {
  const [product, setProduct] = useState(initialState.product);
  const [products, setProducts] = useState(initialState.products);
  const [isFetching, setIsFetching] = useState(initialState.isFetching);

  return (
    <InventoryContext.Provider
      value={{
        product,
        setProduct,
        products,
        setProducts,
        isFetching,
        setIsFetching,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;
