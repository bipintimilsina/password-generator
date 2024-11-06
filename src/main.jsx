import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App1 from './App.jsx'
import App1 from './App1'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App /> */}
    <App1></App1>
  </StrictMode>,

)
