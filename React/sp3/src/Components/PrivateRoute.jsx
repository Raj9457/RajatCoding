import React from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const PrivateRoute=({children})=>{
    let {isAuth}=React.useContext(AuthContext)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
}