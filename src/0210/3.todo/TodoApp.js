import { useState } from 'react'
import './TodoApp.css'
import AddForm from './AddForm'
import TodoList from './TodoList'

function TodoApp() {
  // 列表用
  // ex. todo = { id, text, completed }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買紅茶拿鐵',
      completed: false,
    },
    {
      id: 2,
      text: '學react',
      completed: true,
    },
  ])
  //純函式

  //checkbox
  const toggleCompleted = (todos, id) => {
    return todos.map((v, i) => {
      // 用條件判斷是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, completed: !v.completed }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }
  //delete  當拿到todos,id時回傳一個過濾掉沒有該id的新todos
  const deleteTodo = (todos, id) => {
    return todos.filter((v, i) => {
      return v.id !== id
    })
  }

  //add
  const addTodo = (todos, todo) => {
    return [todo, ...todos]
  }

  // 專門要給AddForm用的
  const handleAddTodo = (newTodo) => {
    setTodos(addTodo(todos, newTodo))
  }

  return (
    <>
      <h1>待辨事項</h1>
      <AddForm handleAddTodo={handleAddTodo} />
      {/* <AddForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
        addTodo={addTodo}
        todos={todos}
      /> */}
      {/* <input
        type="text"
        autoFocus //聚焦
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 按下enter鍵
          if (e.key === 'Enter') {
            const newTodo = {
              id: Number(new Date()),
              text: inputValue,
              completed: false,
            }
            //1 2 3
            setTodos(addTodo(todos, newTodo))

            // 輸入完後自動清空輸入框
            setInputValue('')
          }
        }}
      /> */}
      <hr />
      <ul>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
        {/* {todos.map((v, i) => {
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
        })} */}
      </ul>
    </>
  )
}

export default TodoApp
