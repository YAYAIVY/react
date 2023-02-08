import { useState } from 'react'

function Counter() {
  // NOTE: `setTotal`在此應用(元件)中，是"唯一"能改變`total`的函式(方法)

  //
  //setState 異步執行-對應策略1(先用變數接住最後更動的值)
  const [total, setTotal] = useState(0)

  return (
    <h1
      onClick={() => {
        console.log('before total change ', total)
        const newTotal = total + 1 //先運算最後變動後結果值
        setTotal(newTotal) //呼叫要變動狀態的方法
        console.log('after total change ', newTotal) //想要得到變動後的狀態
      }}
    >
      {total}
    </h1>
  )
}

export default Counter
