import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-blue-600 text-white grid place-items-center font-bold shadow-sm">SF</div>
            <span className="font-bold text-slate-800 text-lg">SAM Foundation</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#causes" className="hover:text-blue-600">Causes</a>
            <a href="#pledge" className="hover:text-blue-600">Donate</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          <a href="#pledge" className="hidden md:inline-flex bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Donate Now</a>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#about" className="block py-2 text-slate-700">About</a>
            <a onClick={() => setOpen(false)} href="#causes" className="block py-2 text-slate-700">Causes</a>
            <a onClick={() => setOpen(false)} href="#pledge" className="block py-2 text-slate-700">Donate</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 text-slate-700">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
