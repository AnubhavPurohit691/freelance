import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { HomePage } from './assets/components/Slider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RecoilRoot>
    <App />
    {/* <HomePage/> */}
    </RecoilRoot>
    </BrowserRouter>
  </StrictMode>,
)
