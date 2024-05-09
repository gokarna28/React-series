import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(true);
  const [password, setPassword] = useState()

  //useRef
  const passwordReferance = useRef()
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_-+=[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordReferance.current?.select();
    passwordReferance.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])


  return (
    <>
      <h1>Password Generator</h1>
      <div className='container'>
        <div className="password_container">
          <input type='text' value={password} placeholder='password' readOnly ref={passwordReferance}></input>
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='buttons_container'>
          <input type='range' min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)}></input>
          <label>Length:{length}</label>
          <div className='check_boxes'>
            <input type='checkbox' defaultChecked={number}
              id="numberInput" onChange={() => {
                setNumber((prev) => !prev);
              }}></input>
            <lebel>Numbers:</lebel>

            <input type='checkbox' defaultChecked={char}
              id="charInput" onChange={() => {
                setChar((prev) => !prev);
              }}></input>
            <lebel>Characters:</lebel>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
