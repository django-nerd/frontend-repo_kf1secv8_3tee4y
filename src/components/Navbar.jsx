import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/life', label: 'Student Life' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
      isActive ? 'text-white bg-[#1A4FFF]' : 'text-slate-600 hover:text-[#1A4FFF]'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1A4FFF] text-white grid place-items-center font-black shadow-md">M</div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900">BTS MCO</p>
              <p className="text-xs text-slate-500 -mt-1">Student Association</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/join" className="ml-2 inline-flex items-center gap-2 bg-[#1A4FFF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-[0_8px_20px_-8px_rgba(26,79,255,0.6)] hover:-translate-y-0.5 transition-transform">
              Join us
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/join" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-[#1A4FFF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
              Become a member
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
