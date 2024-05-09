import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  const [color, setColor] = useState("white")

  return (
    <>
      <div className="background" style={{ backgroundColor: color }}>
        <div className="btn_container">
          <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>Pink</button>
        </div>
      </div>


    </>
  )
}

export default App
