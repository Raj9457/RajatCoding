import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
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
      <h1>Theme : {val.theme}</h1>
      <button onClick={val.toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
