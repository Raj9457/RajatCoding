import React from "react";

export const AuthContext=React.createContext();

export const AuthContextProvider=({children})=>{
    let [isAuth,setIsAuth]=React.useState(false);

    const Login=()=>{
        setIsAuth(true);
    }

    const Logout=()=>{
        setIsAuth(false);
    }

    let isAuthData={
        isAuth,
        Login,
        Logout,
    }
    return (
        <AuthContext.Provider value={isAuthData}>
            {children}
        </AuthContext.Provider>
    )
}