import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface ScrollProgressProps {
  color?: string
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ color = '#7effdc' }) => {
  const progressRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{
        background: `linear-gradient(90deg, ${color}, rgba(126, 255, 220, 0.3))`,
        width: `${progress}%`,
        boxShadow: `0 0 20px ${color}`,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  )
}

export default ScrollProgress
