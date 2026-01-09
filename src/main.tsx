import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainPage } from './ui/MainPage'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
