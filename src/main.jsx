import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <img src = "/src/assets/react.svg" width="40px" />
    <h1>Fun Facts About React</h1>
  </main>
)