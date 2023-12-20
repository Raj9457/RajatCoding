import './App.css';
import { Pagination } from './Components/Pagination';
import PureFn from './Components/PureFn';
import Timer from './Components/Timer';
import React from "react"
import TimerRef from './Components/TimerRef';
import Inputref from './Components/Inputref';
import FormReg from './Components/FormReg';

function App() {
  let [loading,setLoading]=React.useState(true);

  return (
    <div className="App">
      
      {/* <Pagination/>
      {loading&&<Timer/>}
      <button onClick={()=>setLoading(!loading)}>Out Toggle Counter</button> */}
      {/* <TimerRef/> */}
      {/* <Inputref/> */}
      <FormReg/>
    </div>
  );
}

export default App;
