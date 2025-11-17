import { useState } from 'react'

export default function Join() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      year: form.get('year'),
      motivation: form.get('motivation'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('✅ Application received! We will contact you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Join the Association</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Boost your network, get tutoring support, participate in events and strengthen your CV by getting involved in impactful projects.
        </p>

        <form onSubmit={onSubmit} className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">BTS MCO year</label>
              <select name="year" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">Motivation</label>
            <textarea name="motivation" rows="4" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A4FFF]"></textarea>
          </div>

          <button type="submit" className="inline-flex items-center justify-center bg-[#1A4FFF] text-white px-6 py-3 rounded-full font-semibold shadow-[0_14px_30px_-12px_rgba(26,79,255,0.7)]">
            Become a Member
          </button>

          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
