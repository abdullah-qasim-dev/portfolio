import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { PROFILE, ROLES } from "@/data/content";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import NeuralBackground from "@/components/NeuralBackground";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Badge";

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <NeuralBackground />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-violet-500), transparent 70%)" }}
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="font-mono-tag mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] text-signal-500">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-500 signal-dot" />
            Status: available for work
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] text-mist-100 sm:text-5xl md:text-6xl">
            Hafiz Abdullah <span className="text-gradient">Qasim</span>
          </h1>

          <div className="font-mono mt-5 flex h-8 items-center text-lg text-mist-300 sm:text-xl">
            <span className="mr-2 text-violet-400">{">"}</span>
            <span>{typedRole}</span>
            <span className="caret ml-0.5 text-cyan-400">▌</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {PROFILE.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as="a" href={PROFILE.resumeUrl} variant="primary" icon={<FiDownload size={16} />}>
              Download Resume
            </Button>
            <Button as="a" href="#projects" variant="outline" icon={<FiArrowRight size={16} />}>
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="ghost" icon={<FiMail size={16} />}>
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="cursor-none text-mist-400 transition-colors hover:text-violet-300"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="cursor-none text-mist-400 transition-colors hover:text-violet-300"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
            <motion.div
              className="absolute -inset-3 rounded-[2.2rem] opacity-70 blur-md"
              style={{ background: "conic-gradient(from 0deg, var(--color-violet-500), var(--color-cyan-500), var(--color-signal-500), var(--color-violet-500))" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
            <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2rem] p-1.5">
              <img
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                className="h-full w-full rounded-[1.6rem] object-cover"
                loading="eager"
              />
            </div>
            {/* <div className="glass absolute -bottom-4 -left-4 rounded-xl px-3 py-2 text-center sm:-left-8">
              <p className="font-mono text-[10px] text-mist-400">status</p>
              <p className="text-xs font-semibold text-signal-500">Open to work</p>
            </div> */}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
