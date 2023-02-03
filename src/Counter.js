import { useState } from 'react'

function Counter() {
  // 使用`解構賦值`語法
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/destructuring.html
  // [getter, setter] = useState(initValue初始值)
  // NOTE: `setTotal`在此應用(元件)中，是"唯一"能改變`total`的函式(方法)

  //
  //
  const [total, setTotal] = useState(0)

  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default Counter
