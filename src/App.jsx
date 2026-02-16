import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '400px', height: '400px', border: '1px solid black', margin: '20px 0' }}>
  <svg width="400" height="400">
    {/* Верхний узел */}
    <circle cx="200" cy="50" r="20" fill="lightblue" stroke="black" />
    {/* Линии */}
    <line x1="200" y1="70" x2="100" y2="150" stroke="black" />
    <line x1="200" y1="70" x2="300" y2="150" stroke="black" />
    {/* Левые листья */}
    <circle cx="100" cy="150" r="20" fill="lightgreen" stroke="black" />
    {/* Правые листья */}
    <circle cx="300" cy="150" r="20" fill="lightgreen" stroke="black" />
  </svg>
</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
