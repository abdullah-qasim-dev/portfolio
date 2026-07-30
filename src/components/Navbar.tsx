import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-[70] w-full transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="font-display cursor-none text-lg font-semibold tracking-tight text-mist-100">
          <span className="text-gradient">H.</span>Abdullah<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`cursor-none whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? "text-violet-300" : "text-mist-300 hover:text-mist-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            className="cursor-none flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:text-violet-300"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <a
            href={PROFILE.resumeUrl}
            download
            className="cursor-none hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-void-950 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <FiDownload size={14} /> Resume
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="cursor-none flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-100 xl:hidden"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-void-950/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex justify-end px-5 py-5">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="cursor-none flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-100"
              >
                <FiX size={18} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-col items-center gap-6 px-8 pt-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-medium text-mist-100 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
