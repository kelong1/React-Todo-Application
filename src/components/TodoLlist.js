import React from 'react'
import { Todo } from './Todo';

 const TodoLlist = ({todos,setTodos,filteredTodos}) => {
    return (
        <div className="todolist">
            <ul className="todolist-list">
               {filteredTodos.map((todo)=>(
                   <Todo key={todo.id}text={todo.text} todos={todos} setTodos={setTodos} todo={todo}/>
               ))}
            </ul>
           
        </div>
    )
}
export default TodoLlist;