import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-brand-bg">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-tag">Experience</div>
          <h2 className="section-heading text-center mx-auto">
            Career <span className="highlight">story</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="spider-panel signal-line p-8 rounded-3xl border-l-4 border-brand-neon/50 relative overflow-hidden"
            >
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-brand-neon/8 to-transparent" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-neon font-mono mb-2">{exp.company}</p>
                  <h3 className="font-heading text-xl font-bold text-brand-ice">{exp.title}</h3>
                </div>
                <p className="text-sm text-brand-muted mt-2 md:mt-0">{exp.period}</p>
              </div>

              {exp.description && (
                <p className="text-brand-muted mb-4 leading-relaxed relative z-10">{exp.description}</p>
              )}

              {exp.responsibilities && (
                <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm relative z-10 pl-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-brand-neon/10 text-brand-neon border border-brand-neon/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
