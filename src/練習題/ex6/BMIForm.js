//  註: 請使用"React 的可控表單元件(controlled component)"
// BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)

// 註：什麼是 BMI 身體質量指數？
// BMI（Body Mass Index）身體質量指數，是體重（公斤）和身高平方（公尺 2）的比值，用來評估你現在的體重狀況。

// 例如：一個 52 公斤的人，身高是 155 公分，則 BMI = 52(公斤) / 1.552 ( 公尺平方 )= 21.6

// 根據台灣衛生福利部國民健康署的 BMI 標準，我國成人的 BMI 指數，應介於 18.5~24 之間，才屬於健康體重範圍，低於或超過此範圍則代表過輕或過重。

// 除了計算 BMI 指數，更建議你透過 BMR 基礎代謝率計算器，計算出你每日應攝取熱量（以大卡計算，Calorie，kcal），搭配 BMI 指數，幫助你達到理想的健康體重。

// 線上參考範例：https://tools.heho.com.tw/bmi/

// 提示：

// 1. 身高的平方公尺要計算公式為(假設身高輸入為公分(cm)，變數名稱為`height`)：`Math.pow(height/100, 2)`

// 2. 最終的計算結果取到小數點後一位即可，不需全部呈現，例如: `21.6`，使用 api 為數字資料類型的`toFixed`方法，例如`(21.66667).toFixed(1) = 21.6`

import { useState } from 'react'

function BMIForm() {
  return <div>BMIForm</div>
}

export default BMIForm
