import React, { useEffect } from 'react'
import axios from 'axios'
import ToDoItem from './ToDoItem';
import { useState } from 'react';



const ToDoForm = () => {
    const link = 'http://localhost:4000/api/v1/tasks';
    const [todos, setTodos] = useState([])
    const [todoName, setTodoName] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        getTasks()
    }, [])



    const getTasks = async () => {
        const data = await axios.get(link);
        // console.log(data.data.data)
        setTodos(data.data.data)
    }



      const addTodos = async (e) => {
        e.preventDefault()
      const todoData = {
        name: todoName ? todoName: undefined,
        comment: comment ? comment : undefined
      }
      const data = await axios.post(link, todoData)
      console.log(data)
    }




    const insertTodos = () => {
      return (
        <>
          <form action="" onSubmit={addTodos}>
            {/* <input type="text" placeholder='name' 
              value={todoName}
              onChange={(e) => setName(e.target.value)}
              required
            /> */}
            <input
  type="text"
  placeholder="name"
  value={todoName}
  onChange={(e) => setTodoName(e.target.value)}
  required
/>
            <textarea name="" id="" cols="30" rows="6" placeholder='add Comments'
            value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            >

            </textarea>
            <button type='submit'>Add Todo</button>
          </form>
        </>
      )
    }



    const renderTodos = () => {
        return todos.map((todo, i) => {
          return <ToDoItem todos={todo} key={i} />
        })
    }


  


  return (
    <div>
      {renderTodos()}
      {insertTodos()}
    </div>
  )
}

export default ToDoForm
