import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Events & Workshops',
    desc:
      'From conferences and masterclasses to company visits, our calendar is packed with learning moments that connect theory to practice and bring you closer to the industry.',
    highlight: {
      title: 'Recent: Retail Masterclass',
      detail:
        'An interactive session with a store manager from a leading brand covering customer experience and KPIs.',
    },
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Business Projects',
    desc:
      'Work on real commercial challenges with partner companies. Develop marketing strategies, merchandising plans and sales actions with measurable impact.',
    highlight: {
      title: 'Recent: Pop-up Store Challenge',
      detail:
        'Teams designed and ran a one-week pop-up experience, tracking sales and customer feedback.',
    },
    image:
      'https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Student Support',
    desc:
      'We organize tutoring, study groups and exam preparation sessions led by top students and alumni to help you gain confidence and succeed.',
    highlight: {
      title: 'Recent: Exam Sprint Week',
      detail:
        'Daily revision workshops with mock orals and case study practice for 1st and 2nd year students.',
    },
    image:
      'https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Campus Life',
    desc:
      'Because connections matter, we plan social events, team-building activities and community moments that make the BTS MCO journey memorable.',
    highlight: {
      title: 'Recent: Welcome Day',
      detail:
        'A fun kick-off with icebreakers, association stands and a photo booth to meet your peers.',
    },
    image:
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function StudentLife() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sections.map((s, idx) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 ? 'md:flex-row-reverse' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
              <div className="mt-5 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-bold text-[#1A4FFF]">{s.highlight.title}</p>
                <p className="text-sm text-slate-600">{s.highlight.detail}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
