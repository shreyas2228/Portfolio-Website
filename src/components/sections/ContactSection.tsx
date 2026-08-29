import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { developer } from '@/data/portfolio'

const formId = (import.meta as any).env?.VITE_FORMSPREE_FORM_ID as string | undefined
const formEndpoint = formId ? `https://formspree.io/f/${formId}` : ''

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formEndpoint) {
      setMessage('Contact form is not configured yet. Add VITE_FORMSPREE_FORM_ID to your environment file.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setFormData({ name: '', email: '', message: '' })
      setMessage('Message sent successfully!')
    } catch (error) {
      setMessage('Something went wrong. Please email me directly at ' + developer.email)
    } finally {
      setIsSubmitting(false)
      window.setTimeout(() => setMessage(''), 4000)
    }
  }

  const contactInfo = [
    { label: 'Availability', value: 'Open to work' },
    { label: 'Location', value: 'Mysore, India' },
    { label: 'Focus', value: 'AI + Web' },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#29B6F6]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="section-tag mb-5">Contact</div>
          <h2 className="section-heading">
            Let&apos;s build something <span className="highlight">great</span>
          </h2>
          <p className="section-copy mx-auto">
            Have a project in mind? Let&apos;s talk about how I can help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="identity-stat">
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">{item.label}</div>
                <div className="mt-3 font-heading text-xl font-bold text-brand-ice">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="web-frame rounded-[2rem] p-5 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[0.64rem] uppercase tracking-[0.28em] text-brand-muted">Message relay</span>
                <span className="signal-dot" />
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/8 bg-[#09131f] px-4 py-3 text-brand-ice placeholder-brand-muted/60 outline-none transition-all focus:border-brand-neon/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/8 bg-[#09131f] px-4 py-3 text-brand-ice placeholder-brand-muted/60 outline-none transition-all focus:border-brand-neon/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/8 bg-[#09131f] px-4 py-3 text-brand-ice placeholder-brand-muted/60 outline-none transition-all focus:border-brand-neon/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-primary w-full px-6 py-3 text-[0.62rem]"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-brand-neon"
                  >
                    {message}
                  </motion.p>
                )}
              </div>
            </form>

            <div className="grid gap-4">
              <a href={`mailto:${developer.email}`} className="contact-card">
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">Email</div>
                <div className="mt-3 break-all font-heading text-lg font-semibold text-brand-neon">{developer.email}</div>
              </a>

              <div className="contact-card">
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">Location</div>
                <div className="mt-3 font-heading text-lg font-semibold text-brand-ice">{developer.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
