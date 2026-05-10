import AppRoutes from './routes/AppRoutes'
import './styles/globals.css'
import './styles/animations.css'
import './styles/home.css'
import './styles/contact.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/experience.css'
import './styles/chat.css'
import PortfolioChat from './components/chat/PortfolioChat'

function App() {
  return (
    <>
      <AppRoutes />
      <PortfolioChat />
    </>
  )
}

export default App
