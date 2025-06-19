import React from 'react'

const ToDoItem = ({todos}) => {
  return (
    <div>
      <h1>{todos.name}</h1>
      <p>{todos.comment}</p>
    </div>
  )
}

export default ToDoItem
