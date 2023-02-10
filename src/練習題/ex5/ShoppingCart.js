// 此練習題出自react官網新文件
// https://beta.reactjs.org/learn/updating-arrays-in-state#challenges

// 擴充原本的每個商品項目物件屬性，新增max: 10，代表最多購買數量，到達最大數量後無法再作增加動作。另外，操作介面多一個'最大數量'按鈕，點按後count屬性變為最大數量。

// 每個商品項目加入刪除按鈕，按下後從列表上刪除該商品。

// 擴充原本的每個商品項目物件屬性，新增price: 100。新增一個最上方導覽列區域，能呈現"總價"(每項商品 x 單價)，以及目前"購買商品總數"的連動呈現

// 分拆上下為兩個元件ShoppingList與Summary元件，與兩個檔案，然後組合在ShoppingCart，並保持原功能。 (註: ShoppingList為列表呈現區，Summary為最上方導覽列與總合/總價呈現區域，ShoppingCart變為兩者的父母元件)

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
  {
    id: 3,
    name: '日式焙茶巧克力酥',
    count: 5,
  },
  {
    id: 4,
    name: '波浪洋芋片',
    count: 1,
  },
]

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              // 處理數量count屬性的增加
              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  return { ...v, count: v.count + 1 }
                } else {
                  return { ...v }
                }
              })

              setProducts(newProducts)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              //預期: 目前商品數量是1了，再按下去-按鈕，數量會變0 -> 即刪除它
              if (product.count === 1) {
                //1, 2
                const newProducts = products.filter((v, i) => {
                  return v.id !== product.id
                })

                //3
                setProducts(newProducts)

                return //跳出函式，下面的程式碼不會再執行
              }

              // 處理數量count屬性的減少
              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  return { ...v, count: v.count - 1 }
                } else {
                  return { ...v }
                }
              })

              setProducts(newProducts)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingCart
