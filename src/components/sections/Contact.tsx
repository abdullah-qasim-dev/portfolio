import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fi";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { CONTACT_CARDS, EMAILJS_CONFIG } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Badge";

type Status = "idle" | "sending" | "success" | "error";

const isConfigured = Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!isConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          tag="Contact"
          title="Let's Build Something"
          description="Have a project, internship, or role in mind? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {CONTACT_CARDS.map((card) => {
              const Icon = (Icons as any)[card.icon] ?? Icons.FiMail;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="glass cursor-none flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-violet-400/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono-tag text-[10px] text-mist-400">{card.label}</p>
                    <p className="truncate text-sm font-medium text-mist-100">{card.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          <GlassCard hover={false} className="!p-7 sm:!p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono-tag mb-2 block text-[11px] text-mist-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition-colors focus:border-violet-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono-tag mb-2 block text-[11px] text-mist-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition-colors focus:border-violet-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-mono-tag mb-2 block text-[11px] text-mist-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition-colors focus:border-violet-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono-tag mb-2 block text-[11px] text-mist-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about it..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition-colors focus:border-violet-400"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-none group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-void-950 transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <FiLoader className="animate-spin" size={16} /> Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-signal-500">
                  <FiCheckCircle size={16} /> Message sent — I'll get back to you soon!
                </p>
              )}
              {status === "error" && !isConfigured && (
                <p className="flex items-start gap-2 text-sm text-mist-400">
                  <FiAlertCircle className="mt-0.5 shrink-0" size={16} />
                  Contact form isn't wired up yet — email me directly at{" "}
                  <a href="mailto:abdullahqasim607@gmail.com" className="text-violet-300 underline">
                    abdullahqasim607@gmail.com
                  </a>{" "}
                  in the meantime.
                </p>
              )}
              {status === "error" && isConfigured && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <FiAlertCircle size={16} /> Something went wrong — please try again or email me directly.
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
