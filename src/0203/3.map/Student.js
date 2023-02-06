//import { data } from './data/students'

// 導入json檔案
// 自動轉為js的資料型態，而且是預設導入
import data from './data/students.json'

function Student() {
  return (
    <>
      <h1>學生資料範例</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name}/ {v.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Student