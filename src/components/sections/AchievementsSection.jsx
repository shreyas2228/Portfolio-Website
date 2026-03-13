import { motion } from 'framer-motion'
import { Award, BadgeCheck, ExternalLink, Trophy } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import { achievements, codingProfiles } from '../../data/portfolioData'

const icons = [Award, Trophy, BadgeCheck]

function AchievementsSection() {
  return (
    <section id="achievements" className="section-wrap">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Achievements"
          title="Progress Beyond Shipping"
          subtitle="Competitive programming consistency, certifications, and leadership impact across communities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            className="glass-card p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-heading text-xl text-brand-ice">Coding Profiles</h3>
            <div className="mt-4 space-y-3">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link justify-between"
                >
                  <span>
                    <span className="block text-sm text-brand-ice">{profile.label}</span>
                    <span className="text-xs text-brand-muted">{profile.value}</span>
                  </span>
                  <ExternalLink size={16} className="text-brand-neon" />
                </a>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = icons[index % icons.length]
              return (
                <motion.article
                  key={achievement.title}
                  className="glass-card flex items-start gap-4 p-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-brand-neon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-neon/80">{achievement.type}</p>
                    <h4 className="mt-1 text-lg text-brand-ice">{achievement.title}</h4>
                    <p className="mt-2 text-sm text-brand-muted">{achievement.detail}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
