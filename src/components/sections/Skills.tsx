import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-mist-200">{name}</span>
        <span className="font-mono text-xs text-cyan-400">{isInView ? level : 0}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Skills" title="What I Bring to the Table" />

        <div className="mx-auto grid max-w-4xl gap-x-12 gap-y-7 sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
