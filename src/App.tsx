import { useState, Suspense } from 'react'
import { lazy } from 'react'
import useLenisScroll from '@/hooks/useLenisScroll'
import ErrorBoundary from '@/components/ErrorBoundary'
import Preloader from '@/components/layout/Preloader'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/effects/ScrollProgress'
import CustomCursor from '@/components/effects/CustomCursor'
import FloatingParticles from '@/components/effects/ParticleEffect'

// Lazy load sections
const HeroSection = lazy(() => import('@/components/sections/HeroSection'))
const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'))
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'))
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'))
const JourneySection = lazy(() => import('@/components/sections/JourneySection'))
const ContactSection = lazy(() => import('@/components/sections/ContactSection'))
const Footer = lazy(() => import('@/components/sections/Footer'))

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)
  useLenisScroll()

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <ErrorBoundary>
      <>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

        <ScrollProgress />
        <CustomCursor enabled={!isLoading} />
        {!isLoading && <FloatingParticles count={15} />}

        <Navbar isHidden={isLoading} />

        <main className="relative w-full">
          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <ExperienceSection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <SkillsSection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <JourneySection />
          </Suspense>

          <Suspense fallback={<div className="h-screen bg-brand-bg" />}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<div className="h-20 bg-brand-bg" />}>
            <Footer />
          </Suspense>
        </main>
      </>
    </ErrorBoundary>
  )
}

export default App
