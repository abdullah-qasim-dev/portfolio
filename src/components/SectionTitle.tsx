import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <span className="eyebrow text-[color:var(--color-rose)] flex items-center gap-3 mb-4 dark:text-[color:var(--color-rose)] light:text-[color:var(--color-wine)]"
        style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span className="inline-block h-px w-8 bg-[color:var(--color-rose)]" />
        {eyebrow}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[color:var(--color-ink)] light:text-[color:var(--color-light-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[color:var(--color-mauve)] light:text-[color:var(--color-light-dim)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
