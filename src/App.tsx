import Header from './components/Header'
import EventBadge from './components/EventBadge.jsx'
import Hero from './components/Hero'
import GradientPattern from './components/GradientPattern'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen h-screen w-full bg-background text-text min-w-full relative antialiased font-gambetta">
      <Header />      
      <GradientPattern />
      <div className="relative">
        <EventBadge />
        <main>
          {/* Main content will go here */}
          <Hero />
        </main>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default App