import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import { projects } from '../../data/portfolioData'

function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Flagship Product Work"
          subtitle="Interfaces and systems designed for usability, speed, and measurable real-world impact."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="interactive project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${project.accent}`} />
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-neon">{project.subtitle}</p>
                <h3 className="mt-2 font-heading text-2xl text-brand-ice">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li className="rounded-full border border-white/15 px-3 py-1 text-xs text-brand-muted" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a className="btn-inline" href={project.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                  <a className="btn-inline" href={project.demo} target="_blank" rel="noreferrer">
                    <ArrowUpRight size={16} /> Live Demo
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
