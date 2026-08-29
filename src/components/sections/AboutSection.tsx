import React from 'react'
import { motion } from 'framer-motion'
import { developer } from '@/data/portfolio'

const AboutSection: React.FC = () => {
  const identityMatrix = [
    { label: 'FULL STACK DEVELOPER', value: 'Build' },
    { label: 'AI ENTHUSIAST', value: 'Ship' },
    { label: 'MCA STUDENT', value: 'Learn' },
    { label: 'PROBLEM SOLVER', value: 'Solve' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-6xl"
        >
          <div className="section-tag mb-5">About Me</div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="web-frame rounded-[2rem] p-5 md:p-8">
              <h2 className="section-heading mb-5">
                Building <span className="highlight">digital experiences</span> that feel alive
              </h2>
              <p className="section-copy mb-8">{developer.longDescription}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Years Coding', value: '3+' },
                  { label: 'Projects', value: '10+' },
                  { label: 'DSA', value: '400+' },
                  { label: 'Tech Stack', value: '15+' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="identity-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">{stat.label}</div>
                    <div className="mt-3 font-heading text-3xl font-bold text-brand-neon">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="web-frame rounded-[2rem] p-5 md:p-6"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[0.62rem] uppercase tracking-[0.28em] text-brand-muted">Identity</span>
                <span className="signal-dot" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {identityMatrix.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="identity-card"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.07, duration: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-3 text-[0.56rem] uppercase tracking-[0.25em] text-brand-muted">{item.value}</div>
                    <div className="font-heading text-lg font-semibold uppercase text-brand-ice">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-brand-accent/20 bg-[#07111b]/70 p-4">
                <div className="mb-2 text-[0.6rem] uppercase tracking-[0.24em] text-brand-muted">What drives me</div>
                <div className="space-y-3 text-sm leading-7 text-brand-muted">
                  <p>I enjoy turning complex product ideas into systems that are fast, intuitive, and memorable.</p>
                  <p>I work across frontend interfaces, backend logic, and AI-driven workflows with a focus on clean architecture and polished user experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
