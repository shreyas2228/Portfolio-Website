import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const onNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 py-4 transition-all duration-500 md:px-8 ${
        isScrolled ? 'bg-brand-bg/40 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 shadow-[0_10px_38px_rgba(2,8,20,0.28)] md:px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="font-heading text-lg tracking-[0.2em] text-brand-ice">
            SHREYAS
          </a>

          <ul className="hidden items-center gap-6 text-sm text-brand-muted md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a className="story-link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="panel-stroke inline-flex h-10 w-10 items-center justify-center text-brand-ice md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            type="button"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <ul className="mt-4 grid gap-2 text-sm text-brand-muted md:hidden">
            {links.map((link) => (
              <li key={link.id}>
                <a className="panel-stroke block px-4 py-2" href={`#${link.id}`} onClick={onNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar
