import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nike_wordmark.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/25/Adidas_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/19/Starbucks_Corporation_Logo_2011.svg',
]

export default function Opportunities() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Professional Opportunities</h2>
            <p className="mt-4 text-slate-600">
              Access internships, work-study programs and real partnerships with companies. Learn from alumni and industry professionals through talks and mentoring.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>• Internships & Work-Study programs</p>
              <p>• Partnerships with companies</p>
              <p>• Testimonials from students and alumni</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {logos.map((src, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm grid place-items-center h-24">
                  <img src={src} alt="Partner logo" className="max-h-10 object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
