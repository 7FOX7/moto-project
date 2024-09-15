import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { ScreenSizeProvider } from './contexts/ScreenSizeContext'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <ScreenSizeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </ScreenSizeProvider>
  )
}

export default App

/*  
    the goal: 
  1. Create the loading bar which will just be loading every second. 
  2. Once you have this, try to load it customizeably, like: 10%, then 43%, then 70%, then 100%; 
*/