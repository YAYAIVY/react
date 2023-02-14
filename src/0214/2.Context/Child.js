import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Child() {
  const { color, setColor } = useContext(ThemeContext)
  return (
    <>
      <h1 style={{ color: color }}>Child</h1>
      <button onClick={() => setColor('pink')}>Pink</button>
    </>
  )
}

export default Child
