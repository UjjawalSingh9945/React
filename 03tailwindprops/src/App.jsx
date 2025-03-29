import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import BackgroundChanger from './components/BackgroundChanger'

function App() {

  return (
    <>
     {/* <Card username = "Ujjawal" role = "Developer"/>
     <Card username = "Ram" role = "Cloud"/> */}
     <BackgroundChanger/>
    </>
  )
}

export default App
