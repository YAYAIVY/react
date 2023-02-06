import { useState, Fragment } from 'react'

// import './Counter.css'

function Counter() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {/* 務必讓&&前面的表達式計算出布林值(利用!!強制轉為布林值)或(比較運算 > < !== ===) ，以免因falsy會呈現出不要的值*/}
      {!!total && <p>Message: {total}</p>}
      {total > 0 && <p>Message: {total}</p>}
      {total !== 0 && <p>Message: {total}</p>}
      {/*
      {0}
      {<p>Message: {total}</p>} 
      */}
    </>
  )
}

export default Counter