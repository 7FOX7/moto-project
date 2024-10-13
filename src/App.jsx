import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ScreenSizeProvider } from './contexts/ScreenSizeContext'
import { SelectedUserProvider } from './contexts/SelectedUserContext'
import CustomLoadingBar from './customs/components/CustomLoadingBar'

const Onboarding = lazy(() => import('./pages/Onboarding'))
const Home = lazy(() => import('./pages/Home'))
const Layout = lazy(() => import('./components/Layout/Layout'))
const Rides = lazy(() => import('./pages/Rides'))
const VideoView = lazy(() => import('./pages/VideoView')) 
const Community = lazy(() => import('./pages/Community'))
const Profile = lazy(() => import('./pages/Profile'))
const Blogs = lazy(() => import('./pages/Blogs'))
const About = lazy(() => import('./pages/About'))


function App() {
  return (
    <ScreenSizeProvider>
      <SelectedUserProvider>
        <Suspense fallback={<CustomLoadingBar />}>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/onboarding" />} /> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="onboarding" element={<Onboarding />} />
              <Route path="rides" element={<Rides />} />
              <Route path="video-view/:id" element={<VideoView />} />
              <Route path="community" element={<Community /> } />
              <Route path="profile/:username" element={<Profile /> } />
              <Route path="blogs" element={<Blogs />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Suspense>
      </SelectedUserProvider>
    </ScreenSizeProvider>
  )
}

export default App
