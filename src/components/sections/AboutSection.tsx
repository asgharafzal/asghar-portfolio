"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, GoldText } from "@/components/ui/shared";
import { Building2, Zap, ShieldCheck, Cpu } from "lucide-react";

const PILLARS = [
  { icon: Building2, title: "Architecture First",       desc: "I own the stack decision, structure the codebase, write the ADRs, and set patterns the team can follow for years — not just the next sprint." },
  { icon: Zap,       title: "Performance Obsessed",     desc: "Core Web Vitals, SSR strategy, bundle optimization, and load time are non-negotiables on every project I touch." },
  { icon: ShieldCheck, title: "Healthcare Grade",       desc: "WCAG 2.1, NHS-grade reliability, audit-ready code. I understand what it means when architecture decisions affect patient outcomes." },
  { icon: Cpu,       title: "AI-Augmented Delivery",    desc: "Claude, Cursor, and GitHub Copilot aren't shortcuts — they're force multipliers. I leverage AI tools to accelerate reviews, sharpen system design, and elevate team output to enterprise standards." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <SectionTitle className="mb-4">
              I&apos;ve Architected Systems<br />
              NHS England Trusts.<br />
              <GoldText>Let&apos;s Build Yours.</GoldText>
            </SectionTitle>
            <p className="text-sm font-mono mb-8" style={{ color: "var(--ink-600)" }}>
              I Design the System &middot; Build the Stack &middot; Lead the Team to Ship
            </p>
            <div className="space-y-5 text-[15px] leading-[1.85]" style={{ color: "var(--ink-400)" }}>
              <p>Most developers pick a side. I didn&apos;t. Over <strong style={{ color: "var(--ink)", fontWeight: 600 }}>15 years</strong> I&apos;ve owned entire product stacks — from pixel-perfect React interfaces to Node.js APIs, cloud infrastructure, and system architecture — on products where failure isn&apos;t an option: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>live NHS healthcare platforms</strong> serving thousands of patients across England.</p>
              <p>I specialize in the intersection of <strong style={{ color: "var(--ink)", fontWeight: 600 }}>architecture and delivery</strong>. I decide the tech stack, design scalable systems, write Architecture Decision Records, define API contracts, review every PR, and ship — on time, tested, and documented. Today I amplify this with AI tools: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Claude</strong> for complex reasoning and design, <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Cursor</strong> for development velocity, and <strong style={{ color: "var(--ink)", fontWeight: 600 }}>GitHub Copilot</strong> for continuous code quality.</p>
              <p>Based in <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Lahore, Pakistan</strong>. Working with global teams. Open to Senior Architect roles, fractional CTO engagements, and high-value consulting.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="h-full p-5 rounded-xl border card-hover group"
                  style={{ background: "var(--canvas)", borderColor: "var(--border-card)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors"
                    style={{ background: "rgba(232,168,32,0.1)" }}>
                    <p.icon size={17} className="text-gold" />
                  </div>
                  <h4 className="font-bold text-sm mb-2" style={{ color: "var(--ink)" }}>{p.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--ink-400)" }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
