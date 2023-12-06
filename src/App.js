import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos, saveTodo} from "./Redux/Action/todoAction";
import {findAllByDisplayValue} from "@testing-library/react";

const App = () => {
    const dispatch  = useDispatch();
   const todosArray = useSelector(state => state.todos)
    const [newTodo, setNewTodo] = useState({})
   const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
      dispatch(getTodos(todos))
    }, [])


    const handleAddTodo = () => {
       const data = {id: todosArray.length + 1, title: newTodo.title, completed: false}
        dispatch(addTodo(data))
        setNewTodo({title: ''})
   }
   const handleDelete = (id) => {
       dispatch(deleteTodo(id))
   }

   const handleEdit = (todo) => {
       setNewTodo(todo)
       setIsEdit(true)

   }
    const handleSave = () => {
        dispatch(saveTodo(newTodo))
        setNewTodo({title: ''})
        setIsEdit(false)
    }

   return (
        <div>
            <div className='container'>
            <input
                type="text"
                value={newTodo.title}
                defaultValue={newTodo.title}
                onChange={(e) => setNewTodo({...newTodo,title: e.target.value})}
            />
            <button onClick={!isEdit ? handleAddTodo : handleSave}>Add</button>
            {
                todosArray.map(todo =>
                    <div key={todo.id} style={{display: 'flex', gap: '40px', alignItems:'center'}}>
                        <h1>{todo.title}</h1>
                        <input type="checkbox" checked={todo.completed}/>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                    </div>
                        )
            }
           </div>
        </div>
    )
}
 export default App;
const todos = [
    {
        id: 1,
        title: 'Buy milk',
        completed: false
    },
    {
        id: 2,
        title: 'Buy eggs',
        completed: false
    },
    {
        id: 3,
        title: 'Buy bread',
        completed: false
    },
    {
        id: 4,
        title: 'Buy butter',
        completed: false
    }
]