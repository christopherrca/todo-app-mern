import React, { useEffect } from 'react'
import axios from 'axios'
import ToDoItem from './ToDoItem';
import { useState } from 'react';



const ToDoForm = () => {
    const link = 'http://localhost:4000/api/v1/tasks';
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTasks()
    }, [])



    const getTasks = async () => {
        const data = await axios.get(link);
        // console.log(data.data.data)
        setTodos(data.data.data)
    }


    const renderTodos = () => {
        return todos.map((todo, i) => {
          return <ToDoItem todos={todo} key={i} />
        })
    }


  return (
    <div>
      {renderTodos()}
    </div>
  )
}

export default ToDoForm
