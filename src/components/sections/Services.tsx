import * as Icons from "react-icons/fi";
import { SERVICES } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Badge";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Services" title="How I Can Help" description="Open to freelance and full-time opportunities." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon] ?? Icons.FiCpu;
            return (
              <GlassCard key={service.title} delay={(i % 4) * 0.06} className="text-center">
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-sm font-semibold text-mist-100">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist-400">{service.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
