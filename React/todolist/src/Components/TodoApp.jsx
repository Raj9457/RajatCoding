import React from 'react'

const TodoApp = (props) => {
    let {handleTodos}=props;
    let [task,setTask]=React.useState("");
    const handleClick=()=>{
        handleTodos(task);
        setTask("");
    }
  return (
    <div>
      <input type="text" value={task} placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>handleClick()}>Add Todo</button>
    </div>
  )
}

export default TodoApp
