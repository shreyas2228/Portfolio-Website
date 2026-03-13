import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) {
        setProgress(0)
        return
      }

      setProgress((window.scrollY / scrollHeight) * 100)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[80] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-neon via-brand-accent to-brand-neon shadow-[0_0_25px_rgba(127,255,212,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
