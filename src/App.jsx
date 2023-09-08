import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import User from './User'


function App() {
  function handleClick (){
    alert('click done')
  }

  return (
   
    <>
     <User></User>

      <Count></Count>
      <h1>React Core Concept 2</h1>
      <button onClick={handleClick}>click1</button>
     
      
    </>
  )
}

export default App
