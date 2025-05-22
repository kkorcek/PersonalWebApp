import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import './styles/variables.css'
import './styles/global.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='app-container'>
        <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add more routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
