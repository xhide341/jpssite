import './App.css'
import Header from './components/Header'
import EventBadge from './components/EventBadge.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 min-w-full">
      <Header />
      <main className="pt-16">
        {/* Main content will go here */}
        <EventBadge />
      </main>
    </div>
  )
}

export default App