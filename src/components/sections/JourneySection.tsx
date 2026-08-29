import React from 'react'
import { motion } from 'framer-motion'
import { timeline } from '@/data/portfolio'

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-brand-bg to-brand-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="section-tag">My Journey</div>
          <h2 className="section-heading mx-auto">
            From <span className="highlight">learning</span> to building
          </h2>
          <p className="section-copy mx-auto">
            From fundamentals to product thinking, every milestone shaped the way I build polished digital experiences.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-brand-neon/60 via-brand-accent/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 md:gap-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 spider-panel signal-line p-6 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-br-2xl bg-brand-neon/10 border-r border-b border-brand-neon/20" />
                  <p className="text-sm font-mono text-brand-neon font-semibold relative z-10">{item.year}</p>
                  <h3 className="font-heading text-xl font-bold text-brand-ice mt-2 relative z-10">{item.title}</h3>
                  <p className="text-brand-muted mt-2 text-sm relative z-10">{item.description}</p>
                </div>

                <motion.div
                  className="relative z-10 hidden md:flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <div className="w-4 h-4 bg-brand-neon rounded-full shadow-glow-lg" />
                  <div className="absolute w-8 h-8 bg-brand-neon/20 rounded-full animate-pulse" />
                </motion.div>

                <div className="md:hidden flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
