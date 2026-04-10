import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import HomeOverview from '../components/home/HomeOverview'
import Technologies from '../components/home/Technologies'
import FeaturedProjects from '../components/home/FeaturedProjects'
import { notifyVisitToTelegram } from '../services/telegramService'

function Home() {
  useEffect(() => {
    notifyVisitToTelegram()
  }, [])

  return (
    <main>
      <Hero />
      <HomeOverview />
      <Technologies />
      <FeaturedProjects />
    </main>
  )
}

export default Home
