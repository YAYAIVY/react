import React from 'react'
import TodoItem from './TodoItem/Index'

function TodoList(props) {
  const {
    todos,
    handleDeleteTodo,
    handleToggleCompleted,
    handleToggleEditing,
    handleUpdateTodo,
  } = props

  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, completed, text, editing } = v

          return (
            <TodoItem
              key={id}
              id={id}
              completed={completed}
              editing={editing}
              text={text}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleCompleted={handleToggleCompleted}
              handleToggleEditing={handleToggleEditing}
              handleUpdateTod={handleUpdateTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
