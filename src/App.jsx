import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ReactList() {
  return (
    <ul className="pointList">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}

function Header() {
  return (
    <header className="header">
      <img src = "/src/assets/react.svg" className="nav-logo" alt = "React logo" />
      <nav>
        <ul className = "nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header> 
  )
}

function Page() {
  return (
   <>
    <Header /> 
    <h1>Fun Facts About React</h1>
    <ReactList />

    <footer>
      <small>© 2025 Abhijay development. All rights reserved.</small>
    </footer>
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
