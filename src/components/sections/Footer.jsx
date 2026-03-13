import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { socialLinks } from '../../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-brand-muted md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Shreyas. Built with React, Three.js, GSAP, Framer Motion, and TailwindCSS.</p>
        <div className="flex items-center gap-3">
          <a className="social-icon" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a className="social-icon" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a className="social-icon" href={socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={16} />
          </a>
          <a className="social-icon" href={socialLinks.email} aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
