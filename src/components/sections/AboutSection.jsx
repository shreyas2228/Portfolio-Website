import { motion } from 'framer-motion'
import SectionTitle from '../layout/SectionTitle'
import { developer, journey } from '../../data/portfolioData'

function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="About"
          title="From Curiosity To Product Engineering"
          subtitle="I design and build scalable software that balances architecture depth with a polished, user-first interface language."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.article
            className="glass-card-strong p-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-brand-muted">{developer.longIntro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {developer.focus.map((item) => (
                <div key={item} className="panel-stroke px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-neon/80">Focus Area</p>
                  <p className="mt-2 text-sm text-brand-ice">{item}</p>
                </div>
              ))}
            </div>

            <div className="panel-stroke mt-8 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-neon">Current Build</p>
              <h3 className="mt-2 font-heading text-2xl text-brand-ice">{developer.currentProject.title}</h3>
              <p className="mt-2 text-brand-muted">{developer.currentProject.description}</p>
            </div>
          </motion.article>

          <motion.aside
            className="glass-card p-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl text-brand-ice">Journey Timeline</h3>
            <div className="mt-6 space-y-5">
              {journey.map((item) => (
                <div className="relative border-l border-brand-neon/30 pl-5" key={item.year}>
                  <span className="absolute -left-[5px] top-[6px] h-2.5 w-2.5 rounded-full bg-brand-neon" />
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-neon">{item.year}</p>
                  <h4 className="mt-1 text-lg text-brand-ice">{item.title}</h4>
                  <p className="text-sm text-brand-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
