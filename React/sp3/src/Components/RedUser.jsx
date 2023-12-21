import React from 'react'
import { ReducerFn } from './RedReducer';
import { DecreaseAction, IncreaseAction, ResetAction } from './RedUserAction';


const RedUser = () => {
    const [state,dispatch]=React.useReducer(ReducerFn,0);
    
    const handleIncrease=()=>{
        dispatch(IncreaseAction(1))
    }
    const handleDecrease=()=>{
        dispatch(DecreaseAction(1))
    }
    const handleReset=()=>{
        dispatch(ResetAction())
    }
  return (
    <div>
      <h1>Counter with Reducer</h1>
      <h2>Count : {state}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default RedUser

