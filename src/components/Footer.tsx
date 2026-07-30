import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PROFILE } from "@/data/content";
import { Container } from "@/components/ui/Badge";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <Container className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-mist-400">
          © 2026 {PROFILE.name}. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="cursor-none text-mist-300 transition-colors hover:text-violet-300"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="cursor-none text-mist-300 transition-colors hover:text-violet-300"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="cursor-none text-mist-300 transition-colors hover:text-violet-300"
          >
            <FiMail size={18} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-mist-400">
          Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.
        </p>
      </Container>
    </footer>
  );
}
