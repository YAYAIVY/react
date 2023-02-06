function JsxValue() {
  return (
    <>
      <h1>JSX語法中各種值得呈現</h1>
      <h2>Number</h2>
      {123 - 23}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`total=${150 - 100}`}
      <h2>Boolean</h2>
      {/* 不會被呈現出來 */}
      {true}
      {false}
      {1 > 0}
      <h2>null</h2>
      {/* 不會被呈現出來 */}
      {null}
      <h2>undefined</h2>
      {/* 不會被呈現出來 */}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4, 5]}

      <h1>Object/Function 不是 React Child</h1>
      <h2>Object</h2>
      {/* 會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {}}
    </>
  )
}
export default JsxValue
