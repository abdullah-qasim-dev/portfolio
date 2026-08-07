import * as Icons from "react-icons/fi";
import { TECH_STACK } from "@/data/content";
import { getTechIconUrl } from "@/data/techIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Badge";

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading tag="Tech Stack" title="Tools of the Trade" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon] ?? Icons.FiCode;
            return (
              <GlassCard key={cat.category} delay={(i % 3) * 0.06}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-mist-100">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const iconUrl = getTechIconUrl(item);
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-mist-300 transition-colors hover:border-violet-400/50 hover:text-violet-300"
                      >
                        {iconUrl && (
                          <img src={iconUrl} alt="" className="h-3.5 w-3.5 rounded-sm" loading="lazy" aria-hidden="true" />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}