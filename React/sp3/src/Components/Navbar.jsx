import React from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Link,NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
    let {isAuth,Login,Logout}=React.useContext(AuthContext);

    const activeLink={
      color:"green",
      textDecoration:"none"
    }
    const defaultLink={
      color:"grey",
      textDecoration:"none"
    }
    const links=[
      {
        path:"/",
        text:"Home"
      },
      {
        path:"/contact",
        text:"Contact",
      },
      {
        path:"/about",
        text:"About",
      },
      {
        path:"/users",
        text:"Users"
      },
      {
        path:"/login",
        text:"Login"
      }
    ]
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",alignContent:"center"}}>
      <h3>User Authenticated : {isAuth?"Yes":"No"}</h3>

      {links.map((ele,i)=>
        <Link key={i} to={ele.path}>{ele.text}</Link>
      )}

      {links.map((ele,i)=>
        <NavLink
        style={({isActive})=>{          
          return isActive?activeLink:defaultLink;
        }} 
        key={i} to={ele.path}>{ele.text}</NavLink>
      )}

      {links.map((ele,i)=>
        <NavLink
        className={({isActive})=>{          
          return isActive?styles.active:styles.default;
        }} 
        key={i} to={ele.path}>{ele.text}</NavLink>
      )}

      
      <button disabled={!isAuth} onClick={Logout}>Logout</button>
    </div>
  )
}

export default Navbar
