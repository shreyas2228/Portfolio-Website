import React, { useRef } from 'react'
import { motion } from 'framer-motion'

interface FloatingParticlesProps {
  count?: number
  color?: string
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count = 20, color = 'rgba(126, 255, 220, 0.5)' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 6,
  }))

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
