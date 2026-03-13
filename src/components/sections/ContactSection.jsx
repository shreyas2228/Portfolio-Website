import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import { contactMeta, socialLinks } from '../../data/portfolioData'

const initialForm = { name: '', email: '', message: '' }

function ContactSection() {
  const formRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('EmailJS keys are missing. Add them in .env to enable form delivery.')
      return
    }

    try {
      setStatus('loading')
      setFeedback('Sending message...')

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      setStatus('success')
      setFeedback('Message sent successfully. Thank you for reaching out.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setFeedback('Failed to send message. Please try again later.')
      console.error(error)
    }
  }

  return (
    <section id="contact" className="section-wrap pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let Us Build Something Exceptional"
          subtitle="Open to full stack opportunities, product engineering roles, and ambitious collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            ref={formRef}
            className="glass-card-strong space-y-5 p-7"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <label className="block">
              <span className="mb-2 block text-sm text-brand-muted">Name</span>
              <input
                className="input-control"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={onChange}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-brand-muted">Email</span>
              <input
                className="input-control"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
                value={form.email}
                onChange={onChange}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-brand-muted">Message</span>
              <textarea
                className="input-control min-h-36 resize-none"
                name="message"
                placeholder="Tell me about your project or opportunity"
                required
                value={form.message}
                onChange={onChange}
              />
            </label>

            <button className="btn-primary inline-flex items-center gap-2" disabled={status === 'loading'} type="submit">
              <Send size={16} />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback && (
              <p className={`text-sm ${status === 'success' ? 'text-brand-neon' : 'text-red-300'}`}>{feedback}</p>
            )}
          </motion.form>

          <motion.aside
            className="glass-card p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl text-brand-ice">Connect</h3>
            <p className="mt-3 text-brand-muted">
              Reach out for product engineering roles, freelance projects, or collaboration on innovative web experiences.
            </p>

            <div className="panel-stroke mt-6 space-y-2 p-4 text-sm">
              <p className="text-brand-muted">Location: <span className="text-brand-ice">{contactMeta.location}</span></p>
              <p className="text-brand-muted">Email: <span className="text-brand-ice">{contactMeta.email}</span></p>
              <p className="text-brand-muted">Availability: <span className="text-brand-ice">{contactMeta.availability}</span></p>
            </div>

            <div className="mt-8 space-y-3">
              <a className="social-link" href={socialLinks.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a className="social-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a className="social-link" href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <Twitter size={17} /> Twitter
              </a>
              <a className="social-link" href={socialLinks.email}>
                <Mail size={17} /> Email
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
