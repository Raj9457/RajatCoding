import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import TodoList from './Components/TodoList';

function App() {
  let [todos,setTodos]=React.useState([]);

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

  console.log(todos);
  return (
    <div className="App">
      <TodoApp handleTodos={handleTodos}/>
      {todos.map((ele)=>
      <TodoList List={ele} handleToggle={handleToggle} handleDelete={handleDelete}/>
      )}
      
    </div>
  );
}

export default App;
