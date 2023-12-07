import React from 'react'
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../redux/actions';
import Count from './Count';


function Dispatch() {
  const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(increase());
    };
  
    const handleDecrement = () => {
      dispatch(decrease());
    };
  
    return (
      <div className="App">
        <button onClick={handleIncrement}>Increment</button>
        <Count />
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
}

export default Dispatch
