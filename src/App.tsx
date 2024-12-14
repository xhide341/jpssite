import Header from './components/Header'
import EventBadge from './components/EventBadge.jsx'
import Hero from './components/Hero'
import GradientPattern from './components/GradientPattern'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-text min-w-full relative">
      <Header />
      <EventBadge />      
      <GradientPattern />
      <main>
        {/* Main content will go here */}
        <Hero />
      </main>
      <ThemeToggle />
    </div>
  )
}

export default App