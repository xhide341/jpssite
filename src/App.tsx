import Header from './components/Header'
import EventBadge from './components/EventBadge.jsx'
import Hero from './components/hero-section'
import AboutSection from './components/about-section'
import GradientPattern from './components/GradientPattern'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-text antialiased font-gambetta">          
        <main className="flex-1 relative">
          {/* Main content will go here */}
          {/* <EventBadge /> */}
          <GradientPattern />
          <Hero />
          <AboutSection />
        </main>
      <Header />
      <ThemeToggle />
    </div>
  )
}

export default App