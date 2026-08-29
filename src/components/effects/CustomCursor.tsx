import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface CustomCursorProps {
  enabled?: boolean
}

const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.1,
      })

      gsap.to(cursorDot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.6,
      })
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
      gsap.to(cursorDot, { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 })
      gsap.to(cursorDot, { opacity: 0, duration: 0.3 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enabled])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-brand-neon rounded-full pointer-events-none z-50 opacity-0"
        initial={{ opacity: 0 }}
      />

      {/* Inner dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-brand-neon rounded-full pointer-events-none z-50 opacity-0"
        initial={{ opacity: 0 }}
      />
    </>
  )
}

export default CustomCursor
