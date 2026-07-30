import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ tag, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="font-mono-tag flex items-center gap-2 text-xs text-cyan-400">
        <span className="h-1.5 w-1.5 rounded-full bg-signal-500 signal-dot" />
        [ {tag} ]
      </span>
      <h2 className="font-display text-3xl font-bold text-mist-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-mist-300 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
