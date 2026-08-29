import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-tag mb-4">Featured Projects</div>
          <h2 className="section-heading">
            Digital work with <span className="highlight">real impact</span>
          </h2>
          <p className="section-copy max-w-2xl">
            Cinematic showcases of my best work across web development, AI, and real-world product thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="project-panel group relative overflow-hidden rounded-[2rem]"
            >
              <div className="relative h-72 overflow-hidden md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent}`} />
                <div className="absolute inset-0 border border-white/5" />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-brand-neon/30 bg-[#071119]/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-brand-neon backdrop-blur-md">
                    {project.status === 'completed' ? 'Built' : 'In progress'}
                  </span>
                  <span className="rounded-full border border-white/10 bg-[#071119]/60 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-brand-ice backdrop-blur-md">
                    {project.featured ? 'Featured' : 'Case study'}
                  </span>
                </div>
              </div>

              <div className="relative p-6 md:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 text-[0.6rem] uppercase tracking-[0.28em] text-brand-muted">{project.subtitle}</div>
                    <h3 className="font-heading text-2xl font-bold text-brand-ice md:text-[2rem]">{project.title}</h3>
                  </div>

                  {project.status && (
                    <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.2em] ${
                      project.status === 'completed'
                        ? 'border-brand-neon/30 bg-brand-neon/10 text-brand-neon'
                        : 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent'
                    }`}>
                      {project.status === 'completed' ? 'Live' : 'Active'}
                    </span>
                  )}
                </div>

                <p className="mb-6 text-base leading-7 text-brand-muted">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary flex-1 px-4 py-2.5 text-[0.62rem]"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary flex-1 px-4 py-2.5 text-[0.62rem]"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
