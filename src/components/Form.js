import React from 'react'

 const Form = ({todos,setTodos,inputText,setInputText,status,setStatus}) => {
     const inputTextHandler=(e)=>{
         console.log(e.target.value)
         setInputText(e.target.value)
     }
     const submitHandler=(e)=>{
         e.preventDefault();
         setTodos([
             ...todos,{text:inputText,completed:false,id:Math.random()*1000}
         ])


         setInputText("")
     }
     const statusHandler=(e)=>{
        setStatus(e.target.value)
     }
    return (
        <div>
             <h1>Todo App</h1>
            <form>
                
                    <input type="text" onChange={inputTextHandler} value={inputText} className="form-control"/>
                    <button onClick={submitHandler} type="submit" className="btn btn-primary">
                    add
                     </button>
              
                <div className="sle">
                    <select onChange={statusHandler} className="form-control">
                        <option value="all">All</option>
                        <option value="completed" >completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div>
                
            </form>
        </div>
    )
}
export default Form;