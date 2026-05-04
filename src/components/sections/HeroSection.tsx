"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";

const STATS = [
  { num: "5+", label: "Years",         sub: "Production Experience" },
  { num: "10+", label: "Products",      sub: "Shipped to Production" },
  { num: "3",   label: "NHS Platforms", sub: "Healthcare Grade" },
  { num: "5+",  label: "Teams Led",     sub: "Engineers Mentored" },
];
const TRUSTED = ["NHS England","Induction Healthcare","InnoSTARK","Techbucks","GLT Logistics"];
const STACK   = ["React","Next.js","TypeScript","Node.js","AWS","GraphQL","Claude AI"];
const FADE    = (d: number) => ({
  initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.25,0.46,0.45,0.94] },
});

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at top, var(--glow-hero) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-center">

          <div>
            {/* Eyebrow */}
            <motion.div {...FADE(0)} className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest"
                style={{ color: "var(--ink-600)" }}>
                <MapPin size={11} style={{ color: "var(--tag-gold-text)" }} /> Lahore, Pakistan
              </span>
              <span className="w-px h-3" style={{ background: "var(--border-card)" }} />
              <span className="flex items-center gap-1.5 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--emerald-text)" }} />
                <span style={{ color: "var(--emerald-text)" }}>Available for Remote &amp; Freelance</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...FADE(0.08)}
              className="font-extrabold tracking-tight mb-3"
              style={{ color: "var(--ink)" }}>
              <span className="block text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08]">I Architect Systems</span>
              <span className="block text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] mt-1" style={{ color: "var(--ink-600)" }}>Full Stack. Cloud-Native. AI-Augmented.</span>
              <span className="block text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] mt-1">Built for <span className="text-gold-shimmer">Enterprise.</span></span>
            </motion.h1>

            <motion.p {...FADE(0.16)} className="text-sm leading-relaxed max-w-[520px] mb-5"
              style={{ color: "var(--ink-400)" }}>
              Senior Full Stack Architect · Developer specializing in{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>React · Next.js · Node.js · AWS</strong>.
              Leading architecture decisions on NHS healthcare platforms, designing real-time cloud infrastructure,
              and shipping enterprise-grade products. Augmented by{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Claude · Cursor · Copilot</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...FADE(0.22)} className="flex flex-wrap gap-3 mb-7">
              <Link href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient font-bold text-sm shadow-gold-md hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ color: "#1A1508" }}>
                View My Work <ArrowRight size={15} />
              </Link>
              <a href="/resume.pdf" download="Asghar Afzal.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-sm hover:opacity-80 transition-all"
                style={{ borderColor: "rgba(232,168,32,0.30)", color: "var(--tag-gold-text)" }}>
                <Download size={15} /> Download Resume
              </a>
              <Link href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-medium text-sm transition-all"
                style={{ borderColor: "var(--border-card)", color: "var(--ink-400)" }}>
                Let&apos;s Talk
              </Link>
            </motion.div>

            {/* Trusted by — ink-600 verified ≥6.8:1 */}
            <motion.div {...FADE(0.3)}>
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--ink-600)" }}>Trusted by</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {TRUSTED.map(n => <span key={n} className="text-sm font-medium" style={{ color: "var(--ink-600)" }}>{n}</span>)}
              </div>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div initial={{ opacity:0, x:32 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.2, ease:[0.25,0.46,0.45,0.94] }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: "rgba(232,168,32,0.05)" }} />
              <div className="relative rounded-2xl p-6 border shadow-card"
                style={{ background: "var(--surface)", borderColor: "var(--border-subtle)" }}>

                <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border-card)" }}>
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center font-bold text-sm shadow-gold-sm"
                    style={{ color: "#1A1508" }}>AA</div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--ink)" }}>Asghar Afzal</p>
                    {/* ink-600 on surface verified ≥5.5:1 in light, ≥4.8:1 in dark */}
                    <p className="text-[10px] font-mono whitespace-nowrap" style={{ color: "var(--ink-600)" }}>Senior Full Stack Architect · Developer</p>
                  </div>
                  {/* Availability — uses emerald-text which is accessible in both themes */}
                  <span className="ml-auto emerald-pill text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "currentColor" }} />
                    Open
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden mb-4"
                  style={{ background: "var(--surface-300)" }}>
                  {STATS.map(s => (
                    <div key={s.label} className="p-3" style={{ background: "var(--surface-200)" }}>
                      {/* Gold stats numerals — decorative large text, gradient ok */}
                      <p className="text-2xl font-extrabold text-gold leading-none mb-1">{s.num}</p>
                      <p className="text-xs font-semibold" style={{ color: "var(--ink)" }}>{s.label}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--ink-600)" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {STACK.map(t => <span key={t} className="stack-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5, duration:0.8 }}
        className="relative z-10 border-t" style={{ background:"var(--surface)", borderColor:"var(--border-card)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--ink-600)" }}>At a glance</p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["NHS England · Architecture Lead","Enterprise Design Systems","AWS · Serverless · Real-time","AI-Augmented Dev · Claude · Cursor","WCAG 2.1 Compliant"].map(t => (
              <span key={t} className="text-xs font-medium" style={{ color: "var(--ink-600)" }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
