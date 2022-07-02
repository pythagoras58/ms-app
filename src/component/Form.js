import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({input,setInput,todos,setTodos, editTodo, setEditTodo}) => {
    //update todo
    const updateTodo = (title, id, completed) =>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title, id, completed} :todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    }, [setInput, editTodo]);


    // check for change event on the input 
    const onInputChange = (event)=>{
        setInput(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();

        if(!editTodo){
            setTodos([...todos, {id:uuidv4(), title:input, completed:false}]);
            setInput("");
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type='text' className='form-control task-input' 
            placeholder='Enter Task' value={input} required onChange={onInputChange}/>
            <br/>
            <button className='btn btn-outline-success form-control btn-add' type='submit'>
                {editTodo ? "EDIT TASK" : "ADD TASK"}
            </button>
        </form>
    </div>
  )
}

export default Form