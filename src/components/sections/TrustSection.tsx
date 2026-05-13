"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, GoldText } from "@/components/ui/shared";
import { Hash } from "lucide-react";

const METRICS = [
  { label: "Client Rating",        value: "4.9/5",  sub: "Across all engagements" },
  { label: "Faster Delivery",      value: "~35%",   sub: "Via AI-augmented workflow" },
  { label: "UI Inconsistency Cut", value: "~40%",   sub: "Across NHS portals" },
  { label: "Repeat Clients",       value: "80%+",   sub: "Return for more projects" },
];

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  via: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A shoutout to Asghar for fine tuning the front-end — tackling a long list of UI requests to pixel perfection. Let's keep this momentum.",
    name: "Felipe Moscon",
    role: "Senior Product Designer",
    company: "Induction Healthcare · NHS",
    initials: "FM",
    via: "Slack · NHS Team",
    date: "Aug 2024",
  },
  {
    quote: "Asghar has been diligently working for both the AttendAnywhere and Zesty teams. He has done some fantastic work across both applications, and a great legacy of high quality work",
    name: "Ed",
    role: "Head of Engineering, Zesty",
    company: "Induction Healthcare · NHS",
    initials: "E",
    via: "Slack · NHS Team",
    date: "2024",
  },
  {
    quote: "Big thanks to Asghar and the GC team — we've accomplished so much in such a short time, despite numerous challenges. Everyone at the Friday showcase was impressed by the work done on GC. We're thrilled about the upcoming launch of the GC feature on New CallScreen.",
    name: "Fareez Ahmed",
    role: "Frontend Lead, AttendAnywhere",
    company: "Induction Healthcare · NHS",
    initials: "FA",
    via: "Slack · NHS Team",
    date: "Apr 2024",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 md:py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16">
          <SectionLabel>Trust & Reviews</SectionLabel>
          <SectionTitle>What the NHS Team Says<br /><GoldText>After We Ship</GoldText></SectionTitle>
          <p className="mt-4 max-w-xl text-[15px]" style={{ color: "var(--ink-400)" }}>
            Real feedback from the engineering and product team at{" "}
            <strong style={{ color: "var(--ink)" }}>Induction Healthcare</strong> — the company behind NHS England&apos;s telemedicine and patient portal platforms.
          </p>
        </FadeUp>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {METRICS.map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.07}>
              <div className="p-5 rounded-xl border text-center"
                style={{ background: "var(--surface-200)", borderColor: "var(--border-subtle)" }}>
                <p className="text-3xl font-extrabold text-gold mb-1">{m.value}</p>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--ink)" }}>{m.label}</p>
                <p className="text-[10px]" style={{ color: "var(--ink-600)" }}>{m.sub}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="flex flex-col h-full p-7 rounded-2xl border card-hover"
                style={{ background: "var(--canvas)", borderColor: "var(--border-card)" }}>

                {/* Slack badge + date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                    style={{ background: "rgba(74,144,226,0.08)", borderColor: "rgba(74,144,226,0.2)" }}>
                    <Hash size={10} style={{ color: "#4A90E2" }} />
                    <span className="text-[10px] font-mono" style={{ color: "#4A90E2" }}>{t.via}</span>
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: "var(--ink-600)" }}>{t.date}</span>
                </div>

                <p className="text-sm leading-relaxed italic flex-1 mb-6" style={{ color: "var(--ink-400)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--border-card)" }}>
                  <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-xs shrink-0"
                    style={{ color: "#1A1508" }}>{t.initials}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: "var(--ink-600)" }}>{t.role}</p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "var(--tag-gold-text)" }}>{t.company}</p>
                  </div>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
