import { useState } from 'react' //導入hook
import './List.css'
import { pureUnshift, purePush, searchFilter } from './api'

const data = [
  {
    id: 1,
    text: 'a',
    count: 0,
  },
  {
    id: 2,
    text: 'b',
    count: 0,
  },
  {
    id: 3,
    text: 'c',
    count: 0,
  },
  {
    id: 4,
    text: 'aa',
    count: 0,
  },
]

function List() {
  // 與呈現有關必需先成為state
  const [items, setItems] = useState(data)

  // const myTable = (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Text</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {items.map((v, i) => {
  //         return (
  //           <tr key={v.id}>
  //             <td>{v.id}</td>
  //             <td>{v.text}</td>
  //           </tr>
  //         )
  //       })}
  //     </tbody>
  //   </table>
  // )

  const plusCount = (arr, id) => {
    return arr.map((v, i) => {
      // 用條件判所是否id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, count: v.count + 1 }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }

  //上面解說: 傳入一個陣列(裡面有包含例如以下的物件值)
  // {
  //   id: 1,
  //   text: 'a',
  //   count: 0,
  // }
  // 傳入一個id值，依id值作操作
  // 返回一個新陣列，其中id相等傳入id值的物件值的，count屬性+1

  const myTable2 = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Count</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
              <td>{v.count}</td>
              <td>
                <button
                  onClick={() => {
                    setItems(plusCount(items, v.id))
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  const note = (
    <p>
      <strong>
        注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
      </strong>
      因有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上
      <strong>務必確保 key不能重覆</strong>。
    </p>
  )
  //純函式
  const add2Head = (arr, obj) => {
    return [obj, ...arr]
  }

  const add2Tail = (arr, obj) => {
    return [...arr, obj]
  }

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      {myTable2}
      <hr />
      {note}
      <h2>基本操作</h2>
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          //const newItem = { id: 99, text: 'xxx' }
          // 1. 從目前的狀態拷貝(深拷貝deep copy)出一個新的變數值(陣列/物件) vs 淺拷貝(shallow)(注意:所有js常見api均為淺拷貝
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中
          //1 //2
          //const newItems = [newItem, ...items]
          //3
          //setItems(newItems)

          //純函式
          setItems(add2Head(items, { id: 99, text: 'xxx' }))
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          //const newItem = { id: 88, text: 'yyy' }

          //1 //2
          //const newItems = [...items, newItem]

          //3
          //setItems(newItems)
          //純函式
          setItems(add2Tail(items, { id: 88, text: 'yyy' }))
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // id可使用
          // 1. 時間日期物件的毫秒值(儘用於單人使用應用中)
          const newId = +new Date() // Number(new Date())
          // 2. 使用隨機函式或函式庫(uuid/ nanoid)...
          // 3. 利用目前所有資料的id，產生不重覆id
          //const ids = items.map((v) => v.id)
          //const newId = Math.max(...ids) + 1

          const newItem = { id: newId, text: 'xxx' }

          //1 //2
          const newItems = [newItem, ...items]

          //3
          setItems(newItems)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newItem = { id: +new Date(), text: 'yyy' }

          const newItems = [...items, newItem]

          setItems(newItems)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newItems = items.filter((v, i) => {
            return v.text.includes('a')
          })
          setItems(newItems)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          //刪除文字為b的物件資料
          //相當於
          //建立(過濾出)一個沒有文件b物件陣列
          //不是文件b的才能加入新陣列
          const newItems = items.filter((v, i) => {
            return v.text !== 'b'
          })
          setItems(newItems)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          const newItems = items.filter((v, i) => {
            return v.id !== 4
          })
          setItems(newItems)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          //找id=2的索引值
          const index = items.findIndex((v, i) => {
            return v.id === 2
          })
          //if找到時
          if (index !== -1) {
            //建立要插入的新物件
            const newItem = { id: 5, text: 'bbb' }

            //分割陣列為兩部分
            // ex. index=1 => [1,2,3,4].slice(0,1) => [1,2]
            const aa = items.slice(0, index + 1)
            const ab = items.slice(index + 1)

            // 插入新物件、合併
            const newItems = [...aa, newItem, ...ab]

            // 3. 設定回state中
            setItems(newItems)
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //1.完全拷貝
          //多拷貝一個階層的語法(針對陣列是一層的狀態)
          const newItems = items.map((v, i) => {
            return { ...v }
          })
          //2.在新的(拷貝)變數上做修改
          //找id=3的索引值
          const index = items.findIndex((v, i) => {
            return v.id === 3
          })

          if (index !== -1) {
            newItems[index].text = 'cccc'
          }

          setItems(newItems)
        }}
        //簡化版
        //   const newItems = items.map((v, i) => {
        //     if (v.id === 3) return { ...v, text: 'cccc' }
        //     else return { ...v }
        //   })

        //   setItems(newItems)
        // }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />
      <hr />
      <h2>純粹化(Purify)練習</h2>
      <ul>
        <li>
          10. 將上述練習所有處理函式進行純粹化(Purify)，即改為純粹函式(pure
          function)另外寫出。
        </li>
      </ul>
      <hr />
      <h2>連續操作練習</h2>
      <ul>
        <li>
          11-1.
          所有項目均加入一個新的`count:0`屬性，並在另個表格呈出來(寫出另個表格)
        </li>
        <li>11-2. 所有項目新增一個`+`按鈕，並在另個表格呈出來(寫出另個表格)</li>
        <li>
          11-3. 讓每個項目的`+`按鈕可以獨立運作，每按一次可讓每個的項目的`count`
          屬性加1
        </li>
      </ul>
    </>
  )
}

export default List
