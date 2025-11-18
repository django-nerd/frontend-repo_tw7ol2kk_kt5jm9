import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Causes from './components/Causes'
import PledgeForm from './components/PledgeForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Causes />
      <PledgeForm />
      <Contact />
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600 bg-slate-50">
        © {new Date().getFullYear()} SAM Foundation Charity Trust. All rights reserved.
      </footer>
    </div>
  )
}

export default App
