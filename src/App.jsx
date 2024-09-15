import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { ScreenSizeProvider } from './contexts/ScreenSizeContext'
import Onboarding from './pages/Onboarding'
import Home from './pages/Home'

function App() {
  return (
    <ScreenSizeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ScreenSizeProvider>
  )
}

export default App