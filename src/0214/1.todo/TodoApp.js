import { useState } from 'react'
import './TodoApp.css'
import AddForm from './AddForm'
// 下面兩者同義(導入某資料夾 = 導入某資料夾的index.js)
// import TodoList from './TodoList/index'
import TodoList from './TodoList/Index.js'

function TodoApp() {
  // 列表用
  // ex. todo = { id, text, completed, editing }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: false,
      editing: true,
    },
    {
      id: 2,
      text: '學react',
      completed: true,
      editing: false,
    },
  ])

  //過濾目前呈現項目用
  // type = '所有' | '進行中' | '已完成'
  const filterOptions = ['所有', '進行中', '已完成']
  // 預設值需要為'所有'才行，不能用''空白字串
  const [myFilter, setMyFilter] = useState('所有')

  const toggleCompleted = (todos, id) => {
    return todos.map((v, i) => {
      // 用條件判斷是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, completed: !v.completed }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }

  const toggleEditing = (todos, id) => {
    return todos.map((v, i) => {
      // 用條件判斷是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, editing: !v.editing }
      // 不是的話，就拷貝後回傳新物件
      // 設定其它非選中的項目 editing:false
      else return { ...v, editing: false }
    })
  }

  // newText 傳入參數值代表，準備要修改的文字
  const updateTodo = (todos, id, newText) => {
    return todos.map((v, i) => {
      // 用條件判斷是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      // 更新文字+改回非編輯狀態(editing:false)
      if (v.id === id) return { ...v, text: newText, editing: false }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }

  const deleteTodo = (todos, id) => {
    return todos.filter((v, i) => {
      return v.id !== id
    })
  }

  const addTodo = (todos, todo) => {
    return [todo, ...todos]
  }

  // 專門用於先套用myFilter狀態後，回傳一個過濾後的todos
  // type = '所有' | '進行中' | '已完成'
  const getFilterTodos = (todos, type) => {
    // switch因為有default可以避免type(即myFilter狀態)，
    // 不是其中的三值之一時，有預設行為
    switch (type) {
      case '進行中':
        return todos.filter((v) => !v.completed)
      case '已完成':
        return todos.filter((v) => v.completed)
      case '所有':
      default: // 預設回傳，代表"所有"
        return todos
    }

    // if (type === '進行中') return todos.filter((v) => !v.completed)

    // if (type === '已完成') return todos.filter((v) => v.completed)

    // // 預設回傳，代表"所有"
    // return todos
  }

  // 專門要給AddForm用的 ---START---
  // 用來建立新的todo物件用
  // impure(不純函式)，因有隨機產生id
  // // ex. todo = { id, text, completed , editing}
  const createTodo = (text) => {
    return {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
  }

  // 處理新增一筆todo到todos陣列中
  // 改為傳入text，產生todo物件後加入
  const handleAddTodo = (text) => {
    setTodos(addTodo(todos, createTodo(text)))
    //setTodos(addTodo(todos, newTodo))
  }
  // ---END---

  // 專門給TodoList用的 ---START---
  // 處理切換completed狀態布林值
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id))
  }

  const handleUpdateTodo = (id, text) => {
    setTodos(updateTodo(todos, id, text))
  }

  // 處理刪除
  const handleDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id))
  }
  // ---END---

  return (
    <>
      <h1>待辨事項</h1>
      <AddForm handleAddTodo={handleAddTodo} />
      <hr />
      <TodoList
        //這裡改為有套用myFilter選項的過濾todos
        todos={getFilterTodos(todos, myFilter)}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateTodo={handleUpdateTodo}
      />
      <hr />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              v === myFilter ? 'filter-button-active' : 'filter-button-normal'
            }
            onClick={() => {
              setMyFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}

export default TodoApp

