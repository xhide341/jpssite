import Header from './components/sections/header'
// import EventBadge from './components/event-badge'
import Hero from './components/sections/hero-section'
import AboutSection from './components/sections/about-section'
import GradientPattern from './components/gradient-pattern'
import ThemeToggle from './components/theme-toggle'
import EventsSection from './components/sections/events-section'
import BackgroundParticles from './components/background-particles'
import CommitteeSection from './components/sections/committee-section'
import ContactSection from './components/sections/contact-section'
import FooterSection from './components/sections/footer-section'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-text antialiased font-gambetta">          
        <main className="flex-1 relative">
          {/* Background containers */}
          <div className="fixed inset-0">
            <GradientPattern />
          </div>

          {/* Main content */}
          {/* <EventBadge /> */}
          <div className="relative">
            <BackgroundParticles variant="bottom" zIndex={10} />
            <div id="home">
              <Hero />
            </div>            
          </div>
          <div className="relative">
            <BackgroundParticles variant="fullscreen" zIndex={10} />
            <div id="about">
              <AboutSection />
            </div>
            <div id="events">
              <EventsSection />
            </div>
            <div id="committee">
              <CommitteeSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
            <FooterSection />
          </div>
        </main>
        <Header />
        <ThemeToggle />
    </div>
  )
}

export default App