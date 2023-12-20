import React from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    let {isAuth,Login}=React.useContext(AuthContext)
  return (
    <div>
        <h1>Login Page</h1>
        <button disabled={isAuth} onClick={Login}>Login</button>        
    </div>
  )
}

export default Login

