import { useState } from 'react'
import './Menu.css'

//ex2:使用 Menu.css 中的 css，套用在選單項目中，用一個狀態(state)記錄目前點按到的選單項目，點按到某個選單項目時會套用 active css 類別

function Menu() {
  const [activeText, setActText] = useState('') //確定點選到的值

  const menuItems = ['首頁', '關於我們', '產品']//避免DRY所以要用個函式

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (//return完馬上加key;這邊沒id所以用索引值當key
            <li key={i}>
              <a
                className={activeText === v ? 'active' : ''}
                href="#/"
                onClick={() => {
                  setActText(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
        {/* <li>
          <a>首頁</a>
        </li>
        <li>
          <a className="active">關於我們</a>
        </li>
        <li>
          <a>產品</a>
        </li> */}
      </ul>
    </>
  )
}

export default Menu
