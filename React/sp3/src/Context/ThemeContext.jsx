import React from "react";

export const ThemeContext=React.createContext();
    
export const ThemeContextProvider=({children})=>{
    let [theme,setTheme]=React.useState("dark");

    const toggleTheme=()=>{
        setTheme(theme=="dark"?"light":"dark")
    }

    let themedata={
        theme,
        toggleTheme,
    }
    return (
        <ThemeContext.Provider value={themedata}>
            {children}
        </ThemeContext.Provider>
    )
}