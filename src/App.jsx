import { useState } from 'react'
import './App.css'
import Experiments from './components/Experiments'
import Facilities from './components/Facilities'
import NavBar from './components/NavBar'
function App() {

  return (
    <div className="App">
      <div className='w-[100vw] h-[7vh] bg-zinc-700 '><NavBar/></div>
    </div>
  )
}
export default App
