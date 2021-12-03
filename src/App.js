
import React, { useState,useEffect } from 'react'
import Form from './components/Form';
import TodoLlist from './components/TodoLlist';
import "./App.css"


function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
  useEffect(()=>{
    const getLocalTodos=()=>{
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]));
      }else{
        let todolocal=JSON.parse(localStorage.getItem("todos"))
        setTodos(todolocal)
      }
    }
    getLocalTodos();
  },[])
  useEffect(()=>{
    const filterHandler=()=>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo=>todo.completed===true));
          break;
          case 'uncompleted':
            setFilteredTodos(todos.filter(todo=>todo.completed===false));
            break;
            default:
              setFilteredTodos(todos);
              break;
      }
    }
    const saveLocalTodos=()=>{
     
        localStorage.setItem("todos",JSON.stringify(todos))
     
    }
    
    
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
 

  
  return (
    <div className="App">
      <div className="todo-app">
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
      <TodoLlist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;
