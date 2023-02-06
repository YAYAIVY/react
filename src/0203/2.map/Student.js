const data = [
  { id: 1, name: 'FuFu' },
  { id: 2, name: 'mina' },
  { id: 3, name: '抱抱' },
]

function Student() {
  // const display = data.map((v, i) => {
  //   return <li>{v.name}</li>
  // })
  {/* 
  key屬性值的選擇:
   1. 資料來自資料庫，優先使用資料表中的id(主鍵)當key值
   2. 資料並非來自資料庫，在資料初始化時，使用uuid/nanoid/其式庫產生key值，但注意"不要"直接寫在元件return中
   3. 資料為靜態資料(意指在此應用整個執行中完全不會更動)時，使用索引值作為key值*/}

  return (
    <>
      <h1>學生資料範例</h1>
      <ul>
        {/* {[<li>fufu</li>, <li>mina</li>]} */}
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}
export default Student
