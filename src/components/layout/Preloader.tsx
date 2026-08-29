import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
}

const webRings = [52, 86, 120, 154]
const webSpokes = Array.from({ length: 12 }, (_, index) => {
  const angle = (index / 12) * Math.PI * 2
  const inner = 48
  const outer = 150
  return {
    x1: 210 + Math.cos(angle) * inner,
    y1: 210 + Math.sin(angle) * inner,
    x2: 210 + Math.cos(angle) * outer,
    y2: 210 + Math.sin(angle) * outer,
    color: index % 2 === 0 ? '#64FFDA' : '#29B6F6',
  }
})

const webNodes = [
  { left: '50%', top: '0%', color: '#64FFDA' },
  { left: '84%', top: '20%', color: '#29B6F6' },
  { left: '95%', top: '50%', color: '#FF1744' },
  { left: '76%', top: '86%', color: '#29B6F6' },
  { left: '24%', top: '86%', color: '#64FFDA' },
  { left: '5%', top: '50%', color: '#29B6F6' },
  { left: '16%', top: '20%', color: '#FF1744' },
]

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100

        if (prev < 22) return prev + 18 + Math.random() * 20
        if (prev < 58) return prev + 12 + Math.random() * 12
        if (prev < 90) return prev + 6 + Math.random() * 8
        return 100
      })
    }, 170)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !isComplete) {
      const timer = window.setTimeout(() => {
        setIsComplete(true)
        onComplete?.()
      }, 450)
      return () => window.clearTimeout(timer)
    }

    return undefined
  }, [progress, isComplete, onComplete])

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100)
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070D]"
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: isComplete ? 0 : 1,
        scale: isComplete ? 0.96 : 1,
      }}
      transition={{ duration: 0.7, ease: 'easeInOut', delay: isComplete ? 0 : 0 }}
      style={{ pointerEvents: isComplete ? 'none' : 'auto' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(41,182,246,0.24),transparent_20%),radial-gradient(circle_at_top,_rgba(100,255,218,0.08),transparent_30%),radial-gradient(circle_at_bottom,_rgba(255,23,68,0.08),transparent_30%),linear-gradient(180deg,#05070D,#07121d,#05070D)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)]" />
      </div>

      <motion.div
        className="relative flex items-center justify-center"
        animate={
          isComplete
            ? { scale: 0.8, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <div className="relative h-[420px] w-[420px]">
          <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="webGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(100,255,218,0.9)" />
                <stop offset="55%" stopColor="rgba(41,182,246,0.18)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <linearGradient id="webStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64FFDA" />
                <stop offset="50%" stopColor="#29B6F6" />
                <stop offset="100%" stopColor="#FF1744" />
              </linearGradient>
            </defs>

            <circle cx="210" cy="210" r="158" fill="url(#webGlow)" opacity={0.36} />

            {webRings.map((radius, ringIndex) => (
              <motion.circle
                key={radius}
                cx="210"
                cy="210"
                r={radius}
                fill="none"
                stroke="url(#webStroke)"
                strokeWidth="0.9"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: Math.min(1, progress / 100 + ringIndex * 0.12),
                  opacity: progress > ringIndex * 18 ? 0.9 : 0.18,
                }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: ringIndex * 0.08 }}
              />
            ))}

            {webSpokes.map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={line.color}
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: Math.min(1, progress / 100 + index * 0.04),
                  opacity: progress > index * 8 ? 0.95 : 0.2,
                }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
              />
            ))}

            {webSpokes.map((line, index) => (
              <motion.line
                key={`secondary-${index}`}
                x1={210}
                y1={210}
                x2={(line.x1 + line.x2) / 2}
                y2={(line.y1 + line.y2) / 2}
                stroke={index % 2 === 0 ? '#EAF2FF' : '#64FFDA'}
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.min(1, progress / 100 + index * 0.05) }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
              />
            ))}

            <motion.circle
              cx="210"
              cy="210"
              r="7"
              fill="#64FFDA"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: progress > 20 ? 1 : 0.5, opacity: progress > 20 ? 1 : 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </svg>

          {webNodes.map((node, index) => (
            <motion.div
              key={index}
              className="absolute h-2.5 w-2.5 rounded-full"
              style={{ left: node.left, top: node.top, background: node.color }}
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.2, 1, 0.3],
                boxShadow: [
                  `0 0 0 rgba(255,255,255,0)`,
                  `0 0 18px ${node.color}`,
                  `0 0 0 rgba(255,255,255,0)`,
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(100,255,218,0.15),rgba(41,182,246,0.04)_40%,transparent_70%)] shadow-[0_0_40px_rgba(100,255,218,0.25)]"
            animate={{
              scale: [0.95, 1.08, 0.95],
              boxShadow: [
                '0 0 24px rgba(100,255,218,0.18)',
                '0 0 42px rgba(41,182,246,0.28)',
                '0 0 24px rgba(100,255,218,0.18)',
              ],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="font-heading text-xl font-black tracking-[0.2em] text-[#EAF2FF] drop-shadow-[0_0_18px_rgba(100,255,218,0.8)]">
              SS
            </span>
          </motion.div>
        </div>

        <motion.div
          className="absolute left-1/2 top-[calc(100%+20px)] -translate-x-1/2 text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-[0.58rem] font-mono uppercase tracking-[0.36em] text-[#8EA2BF]">WEB LIVE</div>
          <div className="mt-2 text-sm font-mono tracking-[0.22em] text-[#EAF2FF]">{Math.round(progress)}%</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
