import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('✅ Message sent! We will get back to you.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contact</h2>
            <p className="mt-3 text-slate-600">Email: association@mco.example • Instagram & LinkedIn • Lycée address here</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200">
              <iframe title="map" className="w-full h-64" src="https://www.openstreetmap.org/export/embed.html?bbox=2.252%2C48.812%2C2.402%2C48.902&layer=mapnik"/>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center bg-[#1A4FFF] text-white px-6 py-3 rounded-full font-semibold shadow-[0_14px_30px_-12px_rgba(26,79,255,0.7)]">
              Send
            </button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
