import Header from './components/sections/header'
import EventBadge from './components/EventBadge'
import Hero from './components/sections/hero-section'
import AboutSection from './components/sections/about-section'
import GradientPattern from './components/GradientPattern'
import ThemeToggle from './components/ThemeToggle'
import EventsSection from './components/sections/events-section'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-text antialiased font-gambetta">          
        <main className="flex-1 relative">
          {/* Main content will go here */}
          {/* <EventBadge /> */}
          <GradientPattern />
          <Hero />
          <AboutSection />
          <EventsSection />
        </main>
      <Header />
      <ThemeToggle />
    </div>
  )
}

export default App