import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") || false
    );

    //this is called every time isLoggedIn is changed
    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    
    const authValue = { isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    );
};
export const useAuthContext = () => useContext(AuthContext);
