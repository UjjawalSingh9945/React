import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import InputBox from './components/inputBox'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhhijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    else if (charAllowed) {
      str += "!@#$%^&*()_+=~`[]"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password, setPassword])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <h3>Password generator</h3>
      <InputBox value={password}/>
      <div className=''>
        <div className=''>
          <input type="range" name="" id=""
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          ref={passwordRef}
          />
          <label>Length: {length}</label>
        </div>
        <div className=''>
          <input 
            type='checked'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className=''>
          <input 
            type='checked'
            defaultChecked={numberAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
        <button onClick={copyPasswordToClipBoard}>Copy</button>
      </div>
    </div>
     
    </>
  )
}

export default App
