import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/helpers'

interface NavbarProps {
  isHidden?: boolean
}

const navItems = [
  { id: '1', label: 'Home', href: '#hero' },
  { id: '2', label: 'About', href: '#about' },
  { id: '3', label: 'Work', href: '#projects' },
  { id: '4', label: 'Contact', href: '#contact' },
  { id: '5', label: 'Get in touch', href: '#contact' },
]

const Navbar: React.FC<NavbarProps> = ({ isHidden = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'pt-3' : 'pt-4'
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? -20 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-page">
        <div className={cn(
          'mx-auto flex h-16 items-center justify-between rounded-full border px-4 shadow-[0_0_35px_rgba(41,182,246,0.12)] backdrop-blur-xl transition-all duration-300 md:h-[4.25rem] md:px-6',
          scrolled
            ? 'border-white/12 bg-[#070d18]/80 shadow-[0_0_35px_rgba(100,255,218,0.08)]'
            : 'border-white/10 bg-white/3'
        )}>
          <motion.a
            href="#hero"
            className="relative flex items-center gap-3 font-heading text-base font-bold uppercase tracking-[0.28em] text-brand-ice"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-accent/50 bg-gradient-to-br from-brand-accent/20 to-brand-neon/20 text-[0.72rem] text-brand-neon shadow-[0_0_18px_rgba(41,182,246,0.3)]">
              SS
            </span>
            <span className="hidden sm:inline">Shreyas</span>
          </motion.a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={cn(
                  'text-[0.68rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300',
                  item.label === 'Get in touch' ? 'rounded-full border border-brand-neon/40 bg-brand-neon/8 px-3 py-2 text-brand-neon shadow-[0_0_24px_rgba(100,255,218,0.15)]' : 'text-brand-ice/80 hover:text-brand-neon'
                )}
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-brand-neon"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-brand-neon"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-brand-neon"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>

        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto mt-2 w-[92%] rounded-2xl border border-white/10 bg-[#08111b]/85 p-4 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block border-b border-white/5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-brand-ice/80 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
