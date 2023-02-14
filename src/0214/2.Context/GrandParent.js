import { useState } from 'react'
import Parent from './Parent'
//導入context
import { ThemeContext } from './ThemeContext'

function GrandParent() {
  const [color, setColor] = useState('green')
  return (
    // <ThemeContext></ThemeContext>提供者
    <ThemeContext.Provider value={{ color: color, setColor: setColor }}>
      <Parent />
    </ThemeContext.Provider>
  )
}

export default GrandParent
