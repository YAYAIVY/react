import React from 'react'

function TodoList(props) {
  const { todos, setTodos, toggleCompleted, deleteTodo } = props
  return (
    <>
      {todos.map((v, i) => {
        return (
          <li key={v.id} className={v.completed ? 'completed' : 'active'}>
            <input
              type="checkbox"
              checked={v.completed}
              onChange={() => {
                setTodos(toggleCompleted(todos, v.id))
              }}
            />
            {v.text}
            <button
              onClick={() => {
                setTodos(deleteTodo(todos, v.id))
              }}
            >
              刪
            </button>
          </li>
        )
      })}
    </>
  )
}

export default TodoList
