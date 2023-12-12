import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import TodoList from './Components/TodoList';

function App() {
  let [todos,setTodos]=React.useState([]);
  let [hide,setHide]=React.useState(true);
  let [editId,setEditId]=React.useState(null);
  let [editTask,setEditTask]=React.useState("");

  const handleTodos=(task)=>{
    let newTodo={
    id:Math.random()+Date.now()+task,
    title:task,
    nature:false,
    }
    setTodos(()=>[...todos,newTodo])    
  }

  const handleToggle=(id)=>{
    setTodos(()=>todos.map((ele)=>ele.id==id?{...ele,nature:!ele.nature}:ele))
  }

  const handleDelete=(id)=>{
    setTodos(()=>todos.filter((ele)=>ele.id!=id))
  }

  const handleEdit=(id)=>{
    console.log(id)
    setEditId(id);
    setHide(!hide)
  }

  const updateTask = () => {
    setTodos((prevTodos) =>
      prevTodos.map((ele) => (ele.id === editId ? { ...ele, title: editTask } : ele))
    );
    setEditId(null);
    setHide(!hide);
    setEditTask("");
  };

  return (
    <div className="App">
      <TodoApp handleTodos={handleTodos}/>
      <div hidden={hide}>
        <input type="text" value={editTask} placeholder="Edited Title" onChange={(e)=>setEditTask(e.target.value)}/>
        <button onClick={()=>updateTask()}>Edit Task</button>
      </div>      
      {todos.map((ele)=>
      <TodoList List={ele} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}/>
      )}
    </div>
  );
}

export default App;
