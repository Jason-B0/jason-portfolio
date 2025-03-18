import { Routes, Route } from 'react-router-dom'

import { Welcome } from './pages/Welcome.tsx'
import { Experiences } from './pages/Experiences.tsx'
import { Projects } from './pages/Projects.tsx'
import { AboutMe } from './pages/AboutMe.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Experiences" element={<Experiences />} />
      <Route path="/About" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />

      <Route path="*" element={<Welcome />} />
    </Routes>
  )
}

export default App
