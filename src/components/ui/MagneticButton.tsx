import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = btnRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={btnRef}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MagneticButton
