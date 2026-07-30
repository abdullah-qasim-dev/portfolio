import { FiEdit3 } from "react-icons/fi";
import { Container } from "@/components/ui/Badge";

export default function Blog() {
  return (
    <section id="blog" className="relative py-20">
      <Container>
        <div className="glass mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-2xl p-10 text-center">
          <FiEdit3 className="text-violet-400" size={26} />
          <h3 className="font-display text-xl font-semibold text-mist-100">Blog</h3>
          <span className="font-mono-tag rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-cyan-400">
            [ coming soon ]
          </span>
          <p className="max-w-md text-sm text-mist-400">
            Writeups on ML experiments, NLP evaluation, and things I learn while building — on the way.
          </p>
        </div>
      </Container>
    </section>
  );
}
