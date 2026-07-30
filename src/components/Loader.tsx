import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "loading weights...",
  "initializing model...",
  "connecting layers...",
  "calibrating output...",
  "ready.",
];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100);
        return next;
      });
    }, 180);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setHidden(true);
        setTimeout(onDone, 600);
      }, 350);
      return () => clearTimeout(t);
    }
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 420);
    return () => clearInterval(lineTimer);
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void-950"
        >
          <div className="flex flex-col items-center gap-6 px-6">
            <div className="font-display text-2xl font-semibold tracking-tight text-mist-100 sm:text-3xl">
              <span className="text-gradient">H.</span> Abdullah Qasim
            </div>

            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="font-mono h-4 text-xs text-mist-400">
              <span>{BOOT_LINES[lineIndex]}</span>
              <span className="caret">_</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
