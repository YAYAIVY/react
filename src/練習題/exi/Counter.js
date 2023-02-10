import { useState } from 'react'
import './Counter.css'

//預設init是365
function init() {
  return 365
}

const Counter = () => {
  const [count, setCount] = useState(() => init())
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div className="container">
      <button className="chevron chevron-up" onClick={decrease} />
      <span className="number">{count}</span>
      <button className="chevron chevron-down" onClick={increase} />
    </div>
  )
}

export default Counter
