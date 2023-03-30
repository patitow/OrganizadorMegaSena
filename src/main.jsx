import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dezena from './components/Dezena'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dezena number="15"></Dezena>
  </React.StrictMode>,
)
