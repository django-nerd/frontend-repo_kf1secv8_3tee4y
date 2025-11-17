import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-black text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center bg-[#1A4FFF] text-white px-6 py-3 rounded-full font-semibold shadow">Back to Home</Link>
      </div>
    </div>
  )
}
