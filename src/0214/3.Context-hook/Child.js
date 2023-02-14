import { useTheme } from './useTheme'

function Child() {
  const { color, setColor } = useTheme()
  return (
    <>
      <h1 style={{ color: color }}>Child</h1>
      <button
        onClick={() => {
          setColor('pink')
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        Green
      </button>
    </>
  )
}

export default Child
