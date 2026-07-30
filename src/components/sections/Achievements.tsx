import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { ACHIEVEMENTS } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Achievements" title="Highlights" />

        <div className="glass-strong mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
          <ul className="space-y-4">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0 last:pb-0"
              >
                <FiCheckCircle className="mt-0.5 shrink-0 text-signal-500" size={18} />
                <span className="text-sm text-mist-200 sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
