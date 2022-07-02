import React,{useState, useEffect} from 'react'
import Form from './Form'
import Header from './Header'
import TodoList from './TodoList';

const Main = () => {
    // install todoList Items to local storage
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState(""); // keep track of the state
    const [todos, setTodos] = useState(initialState); // keep track of all todo list items
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);
    

  return (
    <div>
        
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                
                <div className='card my-card'>
                    <div className='card-header'>
                        <Header/>
                    </div>

                    <div className='card-body'>
                       <div>
                       <Form
                        input ={input}
                        setInput = {setInput}
                        todos = {todos}
                        setTodos = {setTodos}
                        editTodo={editTodo}
                        setEditTodo = {setEditTodo}
                        />
                       </div>

                       <div>
                        <TodoList
                        todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}
                        />
                       </div>
                    </div>

                    <div className='card-footer'>
                        &copy; Danso Solomon
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main 