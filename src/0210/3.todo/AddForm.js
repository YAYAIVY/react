import { useState } from 'react'
//input功能拆成元件使用

function AddForm(props) {
  // 文字輸入框用
  const [inputValue, setInputValue] = useState('')
  const { handleAddTodo } = props

  //先解構出來
  //const { setTodos, addTodo, todos } = props

  return (
    <>
      <input
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
            handleAddTodo(newTodo)

            // 輸入完後自動清空輸入框
            setInputValue('')
          }
        }}
      />
    </>
  )
}

export default AddForm
