import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from "./Components/MainContent.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <MainContent />
      <Footer />
    </>
  )
}

export default App
