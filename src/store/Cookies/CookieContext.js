import { createContext, useState } from "react";

const initialState = {
  enableCookies: true,
  setEnableCookies: () => {},
};

const CookieContext = createContext(initialState);

export const CookieProvider = ({ children }) => {
  const [enableCookies, setEnableCookies] = useState(
    initialState.enableCookies
  );

  return (
    <CookieContext.Provider
      value={{
        enableCookies,
        setEnableCookies,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export default CookieContext;
