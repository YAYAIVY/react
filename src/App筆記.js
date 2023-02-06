//==== react/cra官方文件&教學寫法
//預設的導入導出只有function/class可以用;第一個英文字要大寫
function App() {
  return <></>
}
export default App

//==== 上面的寫法將`export default`合併寫(react新版官方文件多用此寫法)

// export default  function App() {
//     return<></>
// }
//===== 函式表達式語法(不推薦)

// const App = function () {
//   return <></>
// }
//
// export default App

//===== 箭頭函式語法(寫沒什麼功能的小元件且不需要導出時可以用)

// const App = () => <></>
//
// export default App

// ==== 最小的類別型元件

// import React from 'react' 導入

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   render() {
//     return <>13132</>
//   }
// }

// export default App  導出
