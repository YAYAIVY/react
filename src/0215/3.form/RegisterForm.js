import { useState } from 'react'

function RegisterForm() {
  // 物件狀態的初始值，必需要把裡面所有屬性寫出，針對不同欄位定義初始值
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  //記錄所有錯誤訊息欄位
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handelFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    // 修正當使用者回頭輸入時，代表正在修正有錯誤欄位，先清空該欄位錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })

    // 計算得來的屬性名稱(ES6) Computed property names (ES6)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  const handelFieldSubmit = (e) => {
    // 阻擋表單預設送出行為(因送出會重整頁面狀態會不見)
    e.preventDefault()

    // 方式1. 得到表單輸入值的方式 - 從state獲得
    console.log(user)

    //方式2.FormData物件
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )
    // 作其它客製檢查…整合…
    // 送到伺服器
  }

  // 當表單驗証時發生不合法時會觸發此事件
  const handleInvalid = (e) => {
    // 阻擋預設行為 - 這邊是阻擋錯誤訊息泡泡的事件
    e.preventDefault()

    //console.log(e.target.name, e.target.validationMessage)
    //validationMessage輸出驗證錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  return (
    <>
      <h1>會員註冊表單</h1>
      <p>表單驗證</p>
      <form onSubmit={handelFieldSubmit} onInvalid={handleInvalid}>
        <div>
          <label>帳號:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handelFieldChange}
            required
          />
          {fieldErrors.username}
        </div>
        <div>
          <label>信箱:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handelFieldChange}
            required
          />
          {fieldErrors.email}
        </div>
        <div>
          <label>密碼:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handelFieldChange}
            required
            maxLength={12}
            minLength={6}
          />
          {fieldErrors.password}
        </div>
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default RegisterForm
