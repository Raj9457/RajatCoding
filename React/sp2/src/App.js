import './App.css';
import { Pagination } from './Components/Pagination';
import PureFn from './Components/PureFn';
import Timer from './Components/Timer';
import React from "react"

function App() {
  let [loading,setLoading]=React.useState(true);

  return (
    <div className="App">
      
      <Pagination/>
      {loading&&<Timer/>}
      <button onClick={()=>setLoading(!loading)}>Out Toggle Counter</button>
    </div>
  );
}

export default App;
