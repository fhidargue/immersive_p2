import { createContext, useState } from "react"

const initialState = {
    isLogged: false,
    setIsLogged: () => {},
    isFetching: false,
    setIsFetching: () => {}
}

const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(initialState.isLogged);
    const [isFetching, setIsFetching] = useState(initialState.isFetching);

    return (
        <AuthContext.Provider value={{
            isLogged, 
            setIsLogged,
            isFetching,
            setIsFetching
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;