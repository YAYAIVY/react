import { useState } from 'react'

function HTML5form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')
  const [selectedValue, setSelectedValue] = useState(0) //與value的類行一致
  const cities = [
    { label: '台北市', value: 1 },
    { label: '新北市', value: 2 },
    { label: '新竹市', value: 3 },
    { label: '高雄市', value: 4 },
  ]

  // radio
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // checkbox-single
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [pets, setPets] = useState([])
  const petOptions = [
    '黑貓',
    '虎斑貓',
    '白襪貓',
    '肥貓',
    '天使貓',
    '三花貓',
    '賓士貓',
    '玳瑁貓',
  ]

  return (
    <>
      <h1>表單"可控"元件</h1>
      <section id="input-text">
        <h1>文字輸入表框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>

      <section id="textarea">
        <h1>文字輸入區域</h1>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        ></textarea>
      </section>

      <section id="select">
        <h1>下拉選單</h1>
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(Number(e.target.value))
          }}
        >
          <option value="0">-請選擇城市-</option>
          {cities.map((v, i) => {
            return (
              <option key={i} value={v.value}>
                {v.label}
              </option>
            )
          })}
        </select>
      </section>

      <section id="radio-button">
        <h1>選項按鈕</h1>
        {genderOptions.map((v, i) => {
          return (
            <div>
              <input
                type="radio"
                value={v}
                checked={v === gender}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>

      <section id="checkbox-single">
        <h1>核取方塊(單一)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
            // setAgree(!agree)
            // console.log(typeof e.target.checked)
          }}
        />
        <label>我同意會員註冊條款</label>
      </section>

      <section id="checkbox-group">
        <h1>核取方塊(群組)</h1>
        {petOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={pets.includes(v)}
                onChange={(e) => {
                  //1先拷貝2新增刪除3回傳更動新陣列
                  if (pets.includes(v)) {
                    // 在pets陣列中 => 移除filter
                    const newPets = pets.filter((v2, i2) => {
                      return v2 !== v
                    })

                    setPets(newPets)
                  } else {
                    // 不在pets陣列中 => 加入(原陣列再新增)
                    setPets([...pets, v])
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default HTML5form
