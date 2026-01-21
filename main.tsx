import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Demo from './Demo.tsx'
import Student from './Student.tsx'
import Car from './Car.tsx'
import Parent from './Parent.tsx'
import Dataget from './Dataget.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Demo />
    <Student />
    <Car brand="Ford" model="Mustang" color="red" />
     <App />
     <Dataget />
     <Parent />

  </StrictMode>
)
