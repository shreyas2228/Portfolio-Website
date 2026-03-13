import { useEffect, useState } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const activate = () => setActive(true)
    const deactivate = () => setActive(false)
    const hideCursor = () => setVisible(false)

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('mouseout', hideCursor)
    document.querySelectorAll('a, button, .interactive').forEach((el) => {
      el.addEventListener('mouseenter', activate)
      el.addEventListener('mouseleave', deactivate)
    })

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('mouseout', hideCursor)
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.removeEventListener('mouseenter', activate)
        el.removeEventListener('mouseleave', deactivate)
      })
    }
  }, [])

  return (
    <>
      <span
        className="pointer-events-none fixed z-[70] hidden rounded-full border border-brand-neon/40 mix-blend-screen md:block"
        style={{
          width: active ? 54 : 36,
          height: active ? 54 : 36,
          transform: `translate(${position.x - (active ? 27 : 18)}px, ${position.y - (active ? 27 : 18)}px)`,
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.14s ease-out, opacity 0.2s ease',
        }}
      />
      <span
        className="pointer-events-none fixed z-[71] hidden h-2 w-2 rounded-full bg-brand-neon md:block"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: visible ? 1 : 0,
          transition: 'transform 0.08s linear, opacity 0.2s ease',
        }}
      />
    </>
  )
}

export default CustomCursor
