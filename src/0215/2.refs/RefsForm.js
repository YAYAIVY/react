import { useRef } from 'react'

function RefsForm() {
  // 宣告後 inputRef = { current: null }
  const inputRef = useRef(null)
  return (
    <>
      <h1>RefsForm</h1>
      <p>使用refs可以繼續保持元件可控(因為沒id啦)</p>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        印出值
      </button>
    </>
  )
}

export default RefsForm
