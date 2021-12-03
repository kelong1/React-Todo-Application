import React from 'react'

export const Todo = ({text,todo,todos,setTodos}) => {
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id !==todo.id))

    }
    const completeHandler=()=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed,
                };
            }
            return item;
            })
        );
    };
    return (
        <div className="todo-wrapper form-control">
          <li className={`todo-item ${todo.completed ? "completed" :""}`}>{text}</li>
          <div className="tabs">
          <button onClick={completeHandler} className="btn btn-success"><i className="fas fa-check-circle "></i></button>
          <button onClick={deleteHandler}className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
    )
}
