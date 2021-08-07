import { createContext, useState } from "react";

const initialState = {
  isLogged: false,
  setIsLogged: () => {},
  user: "",
  setUser: () => {},
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(initialState.isLogged);
  const [user, setUser] = useState(initialState.user);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
