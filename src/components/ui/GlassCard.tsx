import type { ReactNode, HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className = "", hover = true, delay = 0, ...rest }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -6, borderColor: "var(--color-violet-400)", transition: { duration: 0.15, delay: 0, ease: "easeOut" } } : undefined}
      className={`glass rounded-2xl p-6 transition-colors duration-300 ${className}`}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}