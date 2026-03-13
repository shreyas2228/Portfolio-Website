import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { developer } from '../../data/portfolioData'

const HeroScene = lazy(() => import('../three/HeroScene'))

function HeroSection() {
  const headline = 'Building High-Performance Products That Feel Effortless.'

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      <div className="parallax-layer absolute inset-0 -z-20 bg-hero-grid" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(126,255,220,0.18),transparent_42%)]" />
      <div className="parallax-layer absolute inset-0 -z-10 opacity-90">
        <Suspense fallback={<div className="h-full w-full" />}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-center px-4 md:px-8">
        <motion.p
          className="mb-6 text-xs uppercase tracking-[0.4em] text-brand-neon"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {developer.role}
        </motion.p>

        <motion.h1
          className="max-w-4xl font-heading text-4xl leading-[1.03] text-brand-ice md:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
        >
          {developer.name}
          <span className="mt-2 block bg-gradient-to-r from-brand-ice via-brand-neon to-brand-accent bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Focused on web development, problem solving, and data structures and algorithms. Currently shipping{' '}
          <span className="text-brand-ice">{developer.currentProject.title}</span>, a modern platform crafted for scale and delightful UX.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
        >
          <a className="interactive btn-primary" href="#projects">
            View Projects
          </a>
          <a className="interactive btn-secondary" href="#contact">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          <div className="panel-stroke px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Focus</p>
            <p className="mt-1 text-sm font-medium text-brand-ice">Full Stack Web</p>
          </div>
          <div className="panel-stroke px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Current Build</p>
            <p className="mt-1 text-sm font-medium text-brand-ice">Moment Crafters</p>
          </div>
          <div className="panel-stroke px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Approach</p>
            <p className="mt-1 text-sm font-medium text-brand-ice">Performance First</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
