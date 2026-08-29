import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FaGithub, FaLinkedinIn, FaGlobe, FaEnvelope } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import HeroScene from '@/components/three/HeroScene'
import { developer } from '@/data/portfolio'

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to('.parallax-layer', {
        xPercent: x * 10,
        yPercent: y * 10,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'DSA', value: '500+' },
    { label: 'Experience', value: '2+' },
    { label: 'AI Tools', value: '5+' },
  ]

  const socialLinks = [
    { label: 'GitHub', url: developer.socials.github, icon: FaGithub },
    { label: 'LinkedIn', url: developer.socials.linkedin, icon: FaLinkedinIn },
    { label: 'LeetCode', url: developer.socials.leetcode, icon: SiLeetcode },
    { label: 'Portfolio', url: developer.socials.portfolio, icon: FaGlobe },
    { label: 'Email', url: developer.socials.email, icon: FaEnvelope },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <HeroScene />

      <div className="absolute inset-0 -z-20">
        <div className="parallax-layer absolute inset-0 bg-hero-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F6]/10 via-transparent to-[#FF1744]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(100,255,218,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(41,182,246,0.16),transparent_25%),radial-gradient(circle_at_center,_rgba(255,23,68,0.08),transparent_30%)]" />
      </div>

      <motion.div
        className="absolute left-[12%] top-28 h-48 w-48 rounded-full bg-[#29B6F6]/12 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.28, 0.45, 0.28] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] h-64 w-64 rounded-full bg-[#FF1744]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-left"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF1744] shadow-[0_0_18px_rgba(255,23,68,0.9)]" />
                <span className="hud-pill">WEB DEVELOPER // AI ENTHUSIAST</span>
              </div>

              <motion.h1
                className="hero-title font-heading text-5xl font-black leading-[0.88] md:text-6xl lg:text-[5.5rem]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.8 }}
              >
                Hi, I&apos;m{' '}
                <span className="hero-highlight">Shreyas</span>
              </motion.h1>

              <motion.p
                className="mt-6 font-heading text-xl font-semibold tracking-[0.08em] text-[#7DE8FF] md:text-2xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Full Stack Developer • AI Enthusiast
              </motion.p>

              <motion.p
                className="mt-6 max-w-2xl text-base leading-8 text-brand-muted md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {developer.longDescription}
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="cta-primary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="cta-secondary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-7 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
              >
                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-neon/35 bg-[#0b1723]/90 text-brand-neon shadow-[0_0_18px_rgba(100,255,218,0.15)] transition-all hover:border-brand-neon hover:bg-brand-neon/10 hover:text-white"
                      whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 20px rgba(100,255,218,0.28)' }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="glass-panel relative mx-auto max-w-md rounded-[2rem] p-5" style={{ transform: 'perspective(1200px) rotateX(6deg)' }}>
                <div className="mb-5 flex justify-between text-[0.62rem] uppercase tracking-[0.3em] text-brand-muted">
                  <span>SYSTEM ONLINE</span>
                  <span>WEB CONNECTION: ACTIVE</span>
                </div>

                <div className="space-y-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="hud-card">
                      <div className="text-[0.64rem] uppercase tracking-[0.28em] text-brand-muted">{stat.label}</div>
                      <div className="mt-2 font-heading text-3xl font-bold text-brand-ice">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-brand-muted">
                  <span>Rooftop // 08</span>
                  <span className="text-brand-neon">NEON LINK</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hud-card text-center md:text-left">
                <div className="font-heading text-2xl font-bold text-brand-neon md:text-3xl">{stat.value}</div>
                <div className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-[0.58rem] font-mono uppercase tracking-[0.28em] text-brand-muted">Scroll</p>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-brand-neon/40 bg-white/[0.02]">
            <motion.div
              className="mt-2 h-2.5 w-1 rounded-full bg-brand-neon"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
