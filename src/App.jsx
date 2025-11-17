import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StudentLife from './components/StudentLife'
import Opportunities from './components/Opportunities'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StudentLife />
        <Opportunities />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} BTS MCO Student Association</p>
          <p className="text-slate-500">Made for students • Be positive • Get involved</p>
        </div>
      </footer>
    </div>
  )
}

export default App
