import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../layout/SectionTitle'
import { skills } from '../../data/portfolioData'

function SkillsSection() {
  const arranged = useMemo(
    () => skills.map((skill, index) => ({ skill, delay: index * 0.08 })),
    [],
  )

  return (
    <section id="skills" className="section-wrap">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Interactive Skill Matrix"
          subtitle="A practical blend of frontend craft, backend architecture, version control habits, and algorithmic depth."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.article
            className="glass-card p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mx-auto flex aspect-square max-w-[260px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(126,255,220,0.18),rgba(255,255,255,0.02))]">
              <div className="flex h-[72%] w-[72%] animate-[spin_18s_linear_infinite] items-center justify-center rounded-full border border-brand-neon/40">
                <div className="h-24 w-24 rounded-full border border-brand-accent/60 bg-brand-accent/10 shadow-[0_0_40px_rgba(93,180,255,0.4)]" />
              </div>
            </div>
            <p className="mt-6 text-center text-sm leading-relaxed text-brand-muted">
              A visual representation of continuous learning and stack balance, from core web standards to production backend systems.
            </p>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {arranged.map(({ skill, delay }) => (
              <motion.div
                key={skill}
                className="interactive panel-stroke tilt-card px-4 py-4"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <p className="text-center font-heading text-base tracking-wide text-brand-ice">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
