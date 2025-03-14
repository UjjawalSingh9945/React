import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let count = 15
  const addValue = ()=> {
    counter = setCounter(counter + 1)
    console.log("value added", counter);
  }
  const removeValue = ()=> {
    if(counter > 0 ){
      counter = setCounter(counter - 1)
      console.log("value added", counter);
    }
    else {
      console.log("do nothing");
      
    }
  }

  return (
    <>
     <h1>React Hook</h1>
     <h2>Counter: {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
