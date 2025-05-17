import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactList from "./Components/ReactList.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"

function Page() {
  return (
   < >
    <Header /> 
    <ReactList />
    <Footer />
   </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page />
    </>
  )
}

export default App
