import React from 'react'

const TodoList = ({List,handleToggle,handleDelete,handleEdit}) => {
    let {id,title,nature}=List;
    const handleToggleList=()=>{
        handleToggle(id);
    }
    const handleDeleteList=()=>{
        handleDelete(id);
    }
    const handleEditTask=()=>{
        handleEdit(id);
    }
  return (
    <div className='TaskDiv'>
      <h3>{title}</h3>
      <p>{nature==true?"Completed":"Not Completed"}</p>
      <button onClick={()=>handleEditTask()}>Edit</button>
      <button onClick={()=>handleToggleList()}>Toggle</button>
      <button onClick={()=>handleDeleteList()}>Delete</button>
    </div>
  )
}

export default TodoList
