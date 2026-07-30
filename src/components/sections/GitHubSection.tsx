import { useState } from "react";
import { FiGithub, FiExternalLink, FiAlertCircle } from "react-icons/fi";
import { PROFILE } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Badge";

// github-readme-stats.vercel.app (the original public instance) has been
// unstable/paused; github-stats-extended.vercel.app is the actively
// maintained successor with a stable public deployment and the same query
// params, so we use that instead.
const STATS_BASE = "https://github-stats-extended.vercel.app";
const THEME_PARAMS =
  "&bg_color=00000000&title_color=9b81ff&text_color=b4b9d1&icon_color=5fe3f5&border_color=1a1e33&hide_border=false";

function StatImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <FiAlertCircle className="text-mist-400" size={20} />
        <p className="text-xs text-mist-400">
          Live stats are temporarily unavailable.
          <br />
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-violet-300 underline">
            View directly on GitHub
          </a>
        </p>
      </div>
    );
  }

  return <img src={src} alt={alt} className="w-full rounded-lg" loading="lazy" onError={() => setFailed(true)} />;
}

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          tag="GitHub"
          title="Open Source Activity"
          description="Code speaks louder than a resume — here's what I've been shipping."
        />

        <div className="mx-auto max-w-3xl">
          <GlassCard className="text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
              <FiGithub size={26} />
            </span>
            <h3 className="font-display text-xl font-semibold text-mist-100">
              @{PROFILE.githubUsername}
            </h3>
            <p className="mt-2 text-sm text-mist-400">
              Explore pinned repositories, contribution history, and language breakdown.
            </p>
            <div className="mt-5 flex justify-center">
              <Button as="a" href={PROFILE.github} target="_blank" rel="noreferrer" variant="primary" icon={<FiExternalLink size={15} />}>
                View Full Profile
              </Button>
            </div>
          </GlassCard>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <GlassCard className="!p-4" delay={0.05} hover={false}>
              <StatImage
                src={`${STATS_BASE}/api?username=${PROFILE.githubUsername}&show_icons=true&count_private=true${THEME_PARAMS}`}
                alt={`${PROFILE.githubUsername} GitHub stats`}
              />
            </GlassCard>
            <GlassCard className="!p-4" delay={0.1} hover={false}>
              <StatImage
                src={`${STATS_BASE}/api/top-langs/?username=${PROFILE.githubUsername}&layout=compact${THEME_PARAMS}`}
                alt={`${PROFILE.githubUsername} most used languages`}
              />
            </GlassCard>
          </div>

          <GlassCard className="mt-6 !p-4" delay={0.15} hover={false}>
            <StatImage
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${PROFILE.githubUsername}&theme=react-dark&bg_color=00000000&color=5fe3f5&line=7c5cff&point=e3e5f2&hide_border=true`}
              alt={`${PROFILE.githubUsername} contribution graph`}
            />
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
