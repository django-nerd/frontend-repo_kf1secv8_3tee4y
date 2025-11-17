import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1A4FFF] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] bg-slate-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              The student community that shapes tomorrow’s retail leaders.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-lg text-slate-600 max-w-xl">
              We empower BTS MCO students through vibrant campus life, hands-on events, and academic support — so you can grow socially, academically, and professionally.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="inline-flex items-center justify-center bg-[#1A4FFF] text-white px-6 py-3 rounded-full font-semibold shadow-[0_14px_30px_-12px_rgba(26,79,255,0.7)] hover:-translate-y-0.5 transition">
                Join the Association
              </Link>
              <Link to="/life" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-full font-semibold border border-slate-200 hover:bg-slate-50 transition">
                Discover Our Events
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { title: 'Community', desc: 'A supportive network of peers and mentors.' },
                { title: 'Events', desc: 'Workshops, company visits, conferences.' },
                { title: 'Growth', desc: 'Boost your skills and career readiness.' },
              ].map((p) => (
                <div key={p.title} className="bg-white/80 backdrop-blur p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-900">{p.title}</p>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop" alt="Students collaborating" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Teamwork & Leadership</p>
              <p className="text-xs text-slate-600">Real-world projects and initiatives</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
