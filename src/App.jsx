import { useState } from 'react'
import './App.css'
import Experiments from './constants/Experiments'
import Facilities from './constants/Facilities'

function App() {

  return (
    <div className="App">
      <Experiments/>
      <Videos/>
      <Logo/>
      <Faculty/>
      <Facilities/>
    </div>
  )
}

export default App
