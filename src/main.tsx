import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoApp } from './components/ToDoApp'
import '../public/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp></ToDoApp>
  </StrictMode>,
)
