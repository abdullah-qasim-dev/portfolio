import { FiAward } from "react-icons/fi";
import { CERTIFICATES } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Badge";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Certificates" title="Credentials & Coursework" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <GlassCard key={cert.title} delay={(i % 3) * 0.05} className="flex items-start gap-3 !p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                <FiAward size={16} />
              </span>
              <div>
                <h3 className="text-sm font-medium leading-snug text-mist-100">{cert.title}</h3>
                <p className="font-mono mt-1 text-xs text-mist-400">{cert.issuer}</p>
              </div>
            </GlassCard>
          ))}

          <div className="glass flex items-center justify-center rounded-2xl border-dashed p-5 text-center">
            <p className="font-mono-tag text-xs text-mist-400">[ more coming soon ]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
