import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import RedUser from "./Components/RedUser";
import RoutesNav from "./Components/RoutesNav";
import { ThemeContext } from './Context/ThemeContext';

function App() {
  let val=React.useContext(ThemeContext);
  console.log(val)

  let themestyle={
    backgroundColor:val.theme=="dark"?"black":"white",
    color:val.theme=="dark"?"white":"black",
  }
  return (
    <div className="App" style={themestyle}>
      <Navbar/>
      <RoutesNav/>
      <h1>{process.env.REACT_APP_React_key} {process.env.NODE_ENV}</h1>
      <h1>Theme : {val.theme}</h1>
      <button onClick={val.toggleTheme}>Toggle Theme</button>
      <RedUser/>
    </div>
  );
}

export default App;
