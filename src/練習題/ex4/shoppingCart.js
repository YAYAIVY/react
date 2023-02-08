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
]

// ex4:按下+按鈕增加產品數量，-按鈕減少產品數量。(即 products 狀態 中的 count 屬性的數字增減)
// 當商品數量為 0 時，刪除該商品。(即從 products 狀態將其商品項目物件移除)，確保畫面上不會出現有商品數量為 0 的商品

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
