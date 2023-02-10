import React from 'react'

//function ChildA({ pData }) {
function ChildA(props) {
  const { dataFromChild } = props

  return (
    <>
      <h1>ChildA</h1>
      <p>來自子女B的資料: {dataFromChild}</p>
    </>
  )
}

export default ChildA
