import { createContext, useState } from "react";

const initialState = {
  cart: [],
  setCart: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState.cart);
  const [cartTotal, setCartTotal] = useState(initialState.cartTotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
