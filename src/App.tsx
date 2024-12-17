import Header from './components/sections/header'
// import EventBadge from './components/EventBadge'
import Hero from './components/sections/hero-section'
import AboutSection from './components/sections/about-section'
import GradientPattern from './components/GradientPattern'
import ThemeToggle from './components/ThemeToggle'
import EventsSection from './components/sections/events-section'
import BackgroundParticles from './components/background-particles'
import CommitteeSection from './components/sections/committee-section'
import ContactSection from './components/sections/contact-section'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-text antialiased font-gambetta">          
        <main className="flex-1 relative">
          {/* Background containers */}
          <div className="fixed inset-0">
            <GradientPattern />
          </div>

          {/* Main content */}
          <div className="relative">
            <BackgroundParticles variant="bottom" zIndex={10} />
            <Hero />
          </div>
          <div className="relative">
            <BackgroundParticles variant="fullscreen" zIndex={10} />
            <AboutSection />
            <EventsSection />
            <CommitteeSection />
            <ContactSection />
          </div>
        </main>
        <Header />
        <ThemeToggle />
    </div>
  )
}

export default App