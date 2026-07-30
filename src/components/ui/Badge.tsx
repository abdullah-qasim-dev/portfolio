import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-tag rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-cyan-400">
      {children}
    </span>
  );
}

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}
