import { Suspense, lazy, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/effects/ScrollProgress'
import CustomCursor from './components/effects/CustomCursor'
import HeroSection from './components/sections/HeroSection'

const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))
const Footer = lazy(() => import('./components/sections/Footer'))

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      gsap.utils.toArray('.section-wrap').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          },
        )
      })

      mm.add('(min-width: 768px)', () => {
        gsap.to('.parallax-layer', {
          yPercent: 16,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to('.orb-glow.one', {
          yPercent: 24,
          xPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to('.orb-glow.two', {
          yPercent: -18,
          xPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      return () => mm.revert()
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-x-hidden bg-brand-bg text-brand-ice selection:bg-brand-neon/30 selection:text-white">
      <ScrollProgress />
      <CustomCursor />
      <div className="orb-glow one" />
      <div className="orb-glow two" />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[-1]" />
      <Navbar />
      <HeroSection />

      <Suspense
        fallback={
          <div className="flex h-24 items-center justify-center text-brand-muted">Loading immersive sections...</div>
        }
      >
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
