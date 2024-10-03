import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContex from './MainContex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContex>
      <App />
    </MainContex>
  </StrictMode>,
)
