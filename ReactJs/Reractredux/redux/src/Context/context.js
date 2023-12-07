import { createContext } from "react";

const notes=createContext();

const NOtes=(props)=>{
    const state={
        name:"Rajat",
    }
    return (
    <notes.Provider value={state}>
        {props.children}
    </notes.Provider>
    )
}