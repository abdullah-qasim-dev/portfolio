import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { EDUCATION } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Education" title="Academic Background" />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col gap-3 rounded-2xl p-6"
            >
              <FiBookOpen className="text-violet-400" size={22} />
              <div>
                <p className="font-mono text-xs text-cyan-400">{edu.period}</p>
                <h3 className="font-display mt-1 text-base font-semibold text-mist-100">{edu.degree}</h3>
                <p className="mt-1 text-sm text-mist-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
