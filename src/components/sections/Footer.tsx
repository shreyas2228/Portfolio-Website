import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaGlobe, FaEnvelope } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { developer } from '@/data/portfolio'

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'GitHub', url: developer.socials.github, icon: FaGithub },
    { label: 'LinkedIn', url: developer.socials.linkedin, icon: FaLinkedinIn },
    { label: 'LeetCode', url: developer.socials.leetcode, icon: SiLeetcode },
    { label: 'Portfolio', url: developer.socials.portfolio, icon: FaGlobe },
    { label: 'Email', url: developer.socials.email, icon: FaEnvelope },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-dark border-t border-brand-border/30">
      <div className="container-page py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Social links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, i) => {
              const Icon = link.icon

              return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-ice transition-all hover:border-brand-neon/50 hover:bg-brand-neon/10"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(126, 255, 220, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mx-auto" />

          {/* Footer text */}
          <div className="text-center space-y-2">
            <p className="text-sm text-brand-muted">
              Crafted with <span className="text-brand-neon">✨</span> by Shreyas Sheregar
            </p>
            <p className="text-xs text-brand-muted/50">
              © {currentYear} All rights reserved. Built with React, Three.js, and GSAP.
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto block px-4 py-2 rounded-lg bg-brand-neon/10 border border-brand-neon/40 text-brand-neon text-xs font-medium hover:bg-brand-neon/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
