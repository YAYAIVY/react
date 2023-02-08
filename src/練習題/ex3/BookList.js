import { useState } from 'react'
import './BookList.css'

// 範例資料
import data from './books.json'

// 實心圖
import bookmarkIconFill from './bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './bookmark.svg'

function BookList() {
  const [books, setBooks] = useState(
    //map(拷貝再擴充欄位後再設定回去)
    data.map((v, i) => {
      return { ...v, liked: false }
    })
  )

  const likedToggle = (arr, isbn) => {
    return arr.map((v, i) => {
      //判斷索引值是否為傳入的索引值,是的話則回傳拷貝+修改過的陣列
      if (v.isbn === isbn) return { ...v, liked: !v.liked }
      //不是則回傳拷貝的陣列
      else return { ...v }
    })
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  {v.liked ? (
                    <img
                      src={bookmarkIconFill}
                      alt=""
                      onClick={() => {
                        setBooks(likedToggle(books, v.isbn))
                      }}
                    />
                  ) : (
                    <img
                      src={bookmarkIcon}
                      alt=""
                      onClick={() => {
                        setBooks(likedToggle(books, v.isbn))
                      }}
                    />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
