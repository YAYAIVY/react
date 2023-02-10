import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // 父母元件定義一個，準備接受來自子女元件的資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <ChildA dataFromChild={dataFromChild} />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}

export default Parent
