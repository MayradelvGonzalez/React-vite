import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './componentes/Navbar/Navbar.css'
import Navbar from './componentes/Navbar/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Navbar />
    <App />
    
  </React.StrictMode>,
)
