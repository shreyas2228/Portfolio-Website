import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mb-14 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <p className="mb-3 text-xs uppercase tracking-[0.34em] text-brand-neon/90">{eyebrow}</p>
      <h2 className="font-heading text-3xl leading-tight text-brand-ice md:text-5xl md:leading-[1.08]">{title}</h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}

export default SectionTitle
