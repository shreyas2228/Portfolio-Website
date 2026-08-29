import { useEffect, useRef, useState } from 'react'

export const useScrollProgress = () => {
  const progressRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      progressRef.current = scrolled
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progressRef
}

export const useMousePosition = () => {
  const mouseX = useRef<number>(0)
  const mouseY = useRef<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mouseX, mouseY }
}

export const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useRef<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.current = true
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
