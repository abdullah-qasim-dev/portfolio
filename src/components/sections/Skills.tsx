import { motion } from "framer-motion";
import { SKILLS } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          tag="Skills"
          title="What I Bring to the Table"
          description="The core areas I work in day to day, on top of the tools listed above."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-violet-400/25 bg-violet-400/[0.04] px-5 py-2.5 text-sm font-medium text-violet-200 transition-colors hover:border-violet-400/50"
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}