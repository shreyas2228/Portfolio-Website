export const clsx = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const cn = (...classes: (string | boolean | undefined)[]) => {
  return clsx(...classes)
}

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

export const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t
}

export const map = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value))
}

export const smoothstep = (t: number) => {
  return t * t * (3 - 2 * t)
}

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const prefixClass = (value: string, prefix: string) => {
  return `${prefix}${value}`
}
