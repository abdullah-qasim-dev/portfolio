import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Experience" title="Where I've Worked" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet-500 via-cyan-500/50 to-transparent sm:left-[9px]" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-4.5 sm:w-4.5 ${
                    exp.status === "current"
                      ? "border-signal-500 bg-signal-500/30 signal-dot"
                      : "border-violet-400 bg-violet-400/20"
                  }`}
                />

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-mist-100 sm:text-xl">
                      {exp.role} <span className="text-mist-400">·</span> {exp.company}
                    </h3>
                    {exp.status === "current" && (
                      <span className="font-mono-tag rounded-full border border-signal-500/30 bg-signal-500/10 px-2.5 py-1 text-[10px] text-signal-500">
                        current
                      </span>
                    )}
                  </div>
                  <p className="font-mono mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-mist-400">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span className="text-mist-400/40">•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.responsibilities.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-mist-300"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
