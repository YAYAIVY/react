import React from 'react'
import EditForm from './EditForm'

function TodoItem(props) {
  const {
    id,
    completed,
    text,
    editing,
    handleDeleteTodo,
    handleToggleCompleted,
    handleToggleEditing,
    handleUpdateTodo,
  } = props

  return (
    <li className={completed ? 'completed' : 'active'}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          handleToggleCompleted(id)
        }}
      />
      {editing ? (
        <span>
          <EditForm text={text} handleUpdateTodo={handleUpdateTodo} id={id} />
        </span>
      ) : (
        <span>
          <button
            onClick={() => {
              handleToggleEditing(id)
            }}
          >
            編輯
          </button>
          {text}
        </span>
      )}
      <button
        onClick={() => {
          handleDeleteTodo(id)
        }}
      >
        X
      </button>
    </li>
  )
}

export default TodoItem
