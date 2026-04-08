import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='btn btn-primary text-2xl'>Hello, World!</h1>
  </StrictMode>,
)
