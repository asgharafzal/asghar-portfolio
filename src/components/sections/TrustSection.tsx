"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, GoldText } from "@/components/ui/shared";
import { Star } from "lucide-react";

const METRICS = [
  { label: "Client Satisfaction", value: "100%", sub: "No project left incomplete" },
  { label: "On-Time Delivery",    value: "100%", sub: "Every milestone met" },
  { label: "Code Review",         value: "100%", sub: "Zero unreviewed merges" },
  { label: "Repeat Engagements",  value: "80%+", sub: "Clients who return" },
];

const TESTIMONIALS = [
  { quote: "Asghar didn't just build our Design System — he architected it. The WCAG compliance, the Chromatic pipeline, the npm publishing workflow — everything was production-grade from day one. Our team shipped 3x faster once the system was in place.", name: "James M.", role: "Product Lead", company: "NHS Healthcare Platform", initials: "JM" },
  { quote: "We brought Asghar in to replace Jitsi on our telemedicine platform. He evaluated AWS Chime SDK, made the technical case for it, built the integration, and led the frontend team through deployment — all with zero patient-facing downtime. Exceptional ownership.", name: "Sarah R.", role: "CTO", company: "Telemedicine Startup", initials: "SR" },
  { quote: "What separates Asghar from most senior developers is his product thinking. He doesn't just ask 'how do I build this?' — he asks 'should we build this, and if so, what's the right way?' That mindset saved us weeks on our fintech platform.", name: "Ahmed K.", role: "Founder", company: "Fintech Platform", initials: "AK" },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 md:py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16">
          <SectionLabel>Trust & Reviews</SectionLabel>
          <SectionTitle>What Teams Say<br /><GoldText>After We Ship</GoldText></SectionTitle>
          <p className="mt-4 max-w-xl text-[15px]" style={{ color: "var(--ink-400)" }}>
            Feedback from clients and engineering leads across healthcare, fintech, and AI platforms.
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
                <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-gold text-gold" />)}
                </div>
                <p className="text-sm leading-relaxed italic flex-1 mb-6" style={{ color: "var(--ink-400)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--border-card)" }}>
                  <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-xs shrink-0"
                    style={{ color: "#1A1508" }}>{t.initials}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: "var(--ink-600)" }}>{t.role} · {t.company}</p>
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
