import React from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let {isAuth,Login}=React.useContext(AuthContext)
    let navigate=useNavigate();
  return (
    <div>
        <h1>Login Page</h1>
        <button disabled={isAuth} 
        onClick={()=>{
          Login();
          navigate("/")
        }}>
          Login
        </button>        
    </div>
  )
}

export default Login

