import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BIO, INTERESTS, STATS } from "@/data/content";
import { useCounter } from "@/hooks/useCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Badge";

function StatBox({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCounter(value, isInView);

  return (
    <div ref={ref} className="glass flex flex-col items-center gap-1.5 rounded-2xl px-4 py-7 text-center">
      <span className="font-display text-3xl font-extrabold text-violet-300 sm:text-4xl">
        {count}
        {suffix ?? ""}
      </span>
      <span className="font-mono-tag text-[10px] text-mist-400 sm:text-[11px]">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container className="max-w-4xl">
        <SectionHeading tag="About" title={BIO.headline} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass space-y-4 rounded-2xl p-6 sm:p-8"
        >
          <p className="leading-relaxed text-mist-200">
            {BIO.paragraph1.split("FAST NUCES Lahore").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="font-semibold text-mist-100">FAST NUCES Lahore</span>
                </span>
              ) : (
                part
              )
            )}
          </p>
          <p className="leading-relaxed text-mist-200">
            {BIO.paragraph2.split(/(MeissaSoft|Nepta Solutions \(UK\))/).map((part, i) =>
              part === "MeissaSoft" || part === "Nepta Solutions (UK)" ? (
                <span key={i} className="font-semibold text-mist-100">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </p>
          <p className="leading-relaxed text-mist-300">{BIO.paragraph3}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          {INTERESTS.map((interest) => (
            <span
              key={interest.title}
              className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.04] px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:border-cyan-400/50"
            >
              {interest.title}
            </span>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatBox key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
