import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiInfo, FiX, FiCheck } from "react-icons/fi";
import { PROJECTS, PROFILE } from "@/data/content";
import type { ProjectItem } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Badge, Container } from "@/components/ui/Badge";

function ProjectImage({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .filter((w) => w.length > 2 || /^[A-Z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="bg-grid relative flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-void-800">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 30% 20%, var(--color-violet-500), transparent 60%)" }}
      />
      <span className="font-display relative text-4xl font-bold text-white/10">{initials}</span>
    </div>
  );
}

function ProjectCard({ project, onOpen, delay }: { project: ProjectItem; onOpen: () => void; delay: number }) {
  return (
    <GlassCard delay={delay} className="flex flex-col">
      <ProjectImage title={project.title} />

      <h3 className="font-display mt-5 text-lg font-semibold text-mist-100">{project.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-4">
        <a
          href={project.github ?? PROFILE.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="cursor-none flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-mist-200 transition-colors hover:border-violet-400 hover:text-violet-300"
        >
          <FiGithub size={13} /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="cursor-none flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-mist-200 transition-colors hover:border-violet-400 hover:text-violet-300"
          >
            <FiExternalLink size={13} /> Demo
          </a>
        )}
        <button
          onClick={onOpen}
          className="cursor-none ml-auto flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-mist-200 transition-colors hover:border-violet-400 hover:text-violet-300"
        >
          <FiInfo size={13} /> Details
        </button>
      </div>
    </GlassCard>
  );
}

export default function Projects() {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          tag="Projects"
          title="Things I've Built"
          description="A mix of applied ML, NLP, computer vision, and data engineering work — more on the way."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={(i % 3) * 0.08} onOpen={() => setActive(project)} />
          ))}

          <div className="glass flex flex-col items-center justify-center gap-2 rounded-2xl border-dashed p-8 text-center">
            <span className="font-mono-tag text-xs text-mist-400">[ next ]</span>
            <p className="font-display text-base font-medium text-mist-300">More projects shipping soon</p>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-void-950/80 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-7"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="cursor-none absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-mist-300 hover:text-violet-300"
              >
                <FiX size={16} />
              </button>

              <h3 className="font-display pr-10 text-2xl font-semibold text-mist-100">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">{active.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <p className="font-mono-tag mt-6 text-xs text-mist-400">Key Features</p>
              <ul className="mt-3 space-y-2">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist-200">
                    <FiCheck className="mt-0.5 shrink-0 text-signal-500" size={14} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex gap-3">
                <a
                  href={active.github ?? PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-none flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-mist-200 hover:border-violet-400 hover:text-violet-300"
                >
                  <FiGithub size={14} /> View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
