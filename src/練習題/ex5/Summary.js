import React from 'react'

function Summary({ totalNumber, totalPrice }) {
  return (
    <div>
      <p>總價:{totalPrice}</p>
      <p>總計:{totalNumber}</p>
    </div>
  )
}

export default Summary