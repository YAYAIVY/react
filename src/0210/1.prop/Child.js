//在傳入參數時先解構並順便給預設值,這樣parent用vs code內建功能可以快速看child屬性並給快速鍵


function Child({ text = '文字', price = 999 }) {

//原本是解構在使用=> const { text = 'no text', price = 0 } = props

  return (
    <>
      <h1>{text}</h1>
      <p>價格:{price}</p>
    </>
  )
}

// 原有的預設屬性的寫法，類別型元件/函式型元件通用語法
// Child.defaultProps = {
//   text: 'no text',
//   price: 0,

export default Child
