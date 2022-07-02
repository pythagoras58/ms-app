import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {
    //delete option
    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))

    }
    // complete option
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    //edit option
    const handEdit = ({id}) => {
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo)
    }

  return (
    <div>
      <div className='task-title'>
      <span className='text text-primary task-ls'>
        <h5>TASK LIST</h5>
       </span>
      </div>
      {todos.map((todo)=>(
         <li className='todo-list' key={todo.id}>
         <input type='text' id='tas-text' value={todo.title} className={`list ${todo.completed ? "complete" : ""}`}  
         onChange={(event)=>event.preventDefault()}/>
        
         <button className='btn-complete task-button1 fa fa-check-circle'
         onClick={()=>{handleComplete(todo)}}></button>

         <button className='btn-complete task-button fa fa-edit'
         onClick={() => handEdit(todo)}></button>

         <button className='btn-complete task-button fa fa-trash'
          onClick={()=>{handleDelete(todo)}}></button>
        </li>
      )
      )}
    </div>
  )
}

export default TodoList