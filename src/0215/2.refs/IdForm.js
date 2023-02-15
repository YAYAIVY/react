function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <p>ID只能有一個,有兩個的話只會選到同一個</p>
      <input type="text" id="myInput" />
      <button
        onClick={() => {
          document.getElementById('myInput').focus()
        }}
      >
        聚焦focus
      </button>
      <button
        onClick={() => {
          document.getElementById('myInput').blur()
        }}
      >
        失焦blur
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('myInput').value)
        }}
      >
        印出值
      </button>
    </>
  )
}

export default IdForm
