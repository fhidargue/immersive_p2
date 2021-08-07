import { createContext, useState } from "react";

const initialState = {
  cartContext: [],
  setCartContext: () => {},
  cartTotalContext: 0,
  setCartTotalContext: () => {},
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartContext, setCartContext] = useState(initialState.cartContext);
  const [cartTotalContext, setCartTotalContext] = useState(
    initialState.cartTotalContext
  );

  return (
    <CartContext.Provider
      value={{
        cartContext,
        setCartContext,
        cartTotalContext,
        setCartTotalContext,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
