// 此練習題出自react官網新文件
// https://beta.reactjs.org/learn/updating-arrays-in-state#challenges

// 擴充原本的每個商品項目物件屬性，新增max: 10，代表最多購買數量，到達最大數量後無法再作增加動作。另外，操作介面多一個'最大數量'按鈕，點按後count屬性變為最大數量。

// 每個商品項目加入刪除按鈕，按下後從列表上刪除該商品。

// 擴充原本的每個商品項目物件屬性，新增price: 100。新增一個最上方導覽列區域，能呈現"總價"(每項商品 x 單價)，以及目前"購買商品總數"的連動呈現

// 分拆上下為兩個元件ShoppingList與Summary元件，與兩個檔案，然後組合在ShoppingCart，並保持原功能。 (註: ShoppingList為列表呈現區，Summary為最上方導覽列與總合/總價呈現區域，ShoppingCart變為兩者的父母元件)

import { useState } from 'react'
import Summary from './Summary'
import ShoppingList from './ShoppingList'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
    price: 100,
    max: 10,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
    price: 100,
    max: 10,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
    price: 100,
    max: 10,
  },
  {
    id: 3,
    name: '日式焙茶巧克力酥',
    count: 5,
    price: 100,
    max: 10,
  },
  {
    id: 4,
    name: '波浪洋芋片',
    count: 1,
    price: 100,
    max: 10,
  },
]

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // 加總用函式 (註: 也可以用for迴圈，for迴圈寫法在下面)
  const calcTotalNumber = (arr) => arr.reduce((acc, v, i) => acc + v.count, 0)
  const calcTotalPrice = (arr) =>
    arr.reduce((acc, v, i) => acc + v.count * v.price, 0)

  // 計算總數量(數量 累加)
  // const calcTotalNumber = () => {
  //   let total = 0

  //   for (let i = 0; i < products.length; i++) {
  //     total += products[i].count
  //   }

  //   return total
  // }

  // // 計算總價(單價x數量 累加)
  // const calcTotalPrice = () => {
  //   let total = 0

  //   for (let i = 0; i < products.length; i++) {
  //     total += products[i].count * products[i].price
  //   }

  //   return total
  // }

  return (
    <>
      <Summary
        totalNumber={calcTotalNumber(products)}
        totalPrice={calcTotalPrice(products)}
      />
      <ShoppingList products={products} setProducts={setProducts} />
    </>
  )
}

export default ShoppingCart
