import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  icon,
  ...rest
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 cursor-none";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-violet-500 to-cyan-500 text-void-950 font-semibold shadow-[0_0_0_0_rgba(124,92,255,0.5)] hover:shadow-[0_0_30px_2px_rgba(124,92,255,0.45)] hover:-translate-y-0.5",
    outline:
      "border border-white/25 bg-white/[0.03] text-mist-100 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300 hover:-translate-y-0.5",
    ghost:
      "border border-white/15 text-mist-200 hover:border-violet-400/60 hover:text-violet-300 hover:-translate-y-0.5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...(rest as any)}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
