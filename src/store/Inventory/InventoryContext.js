
import { createContext, useState } from "react";
import json from "../../data/inventory.json";

localStorage.setItem('inventory', JSON.stringify(json));
const inventory = JSON.parse(localStorage.getItem('inventory'));

const initialState = {
    product: null,
    setProduct: () => {},
    products: inventory,
    setProducts: () => {},
    isFetching: false,
    setIsFetching: () => {},
    gotProducts: false,
    setGotProducts: () => {}
};

const InventoryContext = createContext(initialState);

export const InventoryProvider = ({children}) => {
    const [product, setProduct] = useState(initialState.product);
    const [products, setProducts] = useState(initialState.products);
    const [isFetching, setIsFetching] = useState(initialState.isFetching);
    const [gotProducts, setGotProducts] = useState(initialState.gotProducts);

    return (
        <InventoryContext.Provider value={{
            product,
            setProduct,
            products,
            setProducts,
            isFetching,
            setIsFetching,
            gotProducts,
            setGotProducts
        }}>
            {children}
        </InventoryContext.Provider>
    )
}

export default InventoryContext;