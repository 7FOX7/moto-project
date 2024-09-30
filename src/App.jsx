import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ScreenSizeProvider } from './contexts/ScreenSizeContext'
import artificialDelay from './utils/functions/artificialDelay'
import CustomLoadingBar from './customs/components/CustomLoadingBar'

// const Onboarding = lazy(() => artificialDelay(5000, import('./pages/Onboarding')))
const Onboarding = lazy(() => import('./pages/Onboarding'))
const Home = lazy(() => import('./pages/Home'))
const Layout = lazy(() => import('./components/Layout/Layout'))
const Rides = lazy(() => import('./pages/Rides'))
const VideoView = lazy(() => import('./pages/VideoView')) 

function App() {
  return (
    <ScreenSizeProvider>
      <Suspense fallback={<CustomLoadingBar />}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/onboarding" />} /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="rides" element={<Rides />} />
            <Route path="video-view/:id" element={<VideoView />} />
          </Route>
        </Routes>
      </Suspense>
    </ScreenSizeProvider>
  )
}

export default App
