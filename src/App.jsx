import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { warmupBackend } from './services/backendWarmup'
import './styles/globals.css'
import './styles/animations.css'
import './styles/home.css'
import './styles/contact.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/experience.css'

function App() {
  useEffect(() => {
    warmupBackend()
  }, [])

  return <AppRoutes />
}

export default App