import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'frontend', 'backend', 'languages', 'database', 'tools', 'ai']

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="relative py-24 bg-brand-bg">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-tag">Skills & Technologies</div>
          <h2 className="section-heading">
            Tools for <span className="highlight">building strong products</span>
          </h2>
          <p className="section-copy">Mastering the stack, systems, and workflows behind fast and scalable products.</p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-neon to-brand-accent text-brand-bg shadow-glow-md'
                  : 'bg-brand-surface border border-brand-border text-brand-muted hover:border-brand-neon/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="story-card p-5 rounded-2xl text-center group hover:border-brand-neon/50 cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-brand-neon/10 border border-brand-neon/20 text-brand-neon font-heading text-lg">
                {skill.name.charAt(0)}
              </div>
              <p className="font-heading font-semibold text-brand-ice mb-2">{skill.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">{skill.category}</p>
              {skill.proficiency && (
                <div className="mt-4 pt-4 border-t border-brand-border/30">
                  <div className="h-1.5 w-full rounded-full bg-brand-border/30 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-neon via-brand-accent to-brand-purple"
                      style={{
                        width:
                          skill.proficiency === 'expert'
                            ? '100%'
                            : skill.proficiency === 'advanced'
                              ? '78%'
                              : skill.proficiency === 'intermediate'
                                ? '55%'
                                : '35%',
                      }}
                    />
                  </div>
                  <p className="text-[10px] text-brand-neon font-mono uppercase tracking-[0.2em] mt-2">
                    {skill.proficiency}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
