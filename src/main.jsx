import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Component/Nav.jsx'
import Footer from './Component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <div className='min-h-full'>
    <App />
    </div>
    <Footer />
  </StrictMode>,
)
