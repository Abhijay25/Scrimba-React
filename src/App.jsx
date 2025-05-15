import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ReactList() {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}

function Page() {
  return (
   <main>
    <header>
      <img src = "/src/assets/react.svg" width="40px" alt = "React logo" />
    </header> 
    
    <h1>Fun Facts About React</h1>
    <ReactList />

    <footer>
      <p>"© 2025 Abhijay development. All rights reserved."</p>
    </footer>
   </main>
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
