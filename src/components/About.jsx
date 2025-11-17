import { motion } from 'framer-motion'

export default function About() {
  const values = [
    { title: 'Engagement', desc: 'We show up and give our best for the community.' },
    { title: 'Ambition', desc: 'We set bold goals and work hard to achieve them.' },
    { title: 'Inclusion', desc: 'Everyone is welcome and supported.' },
    { title: 'Initiative', desc: 'We lead with ideas and take action.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Us</h2>
            <p className="mt-4 text-slate-600">
              Our mission is to support BTS MCO students in their academic, professional, and personal growth. We are a board of motivated students working with teachers and partners to create opportunities and build a strong community.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-900">{v.title}</p>
                  <p className="text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop" alt="Leadership and teamwork" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 bg-[#1A4FFF] text-white rounded-2xl shadow-xl p-4">
              <p className="text-sm font-semibold">Leadership in action</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
