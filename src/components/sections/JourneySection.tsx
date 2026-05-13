"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, GoldText } from "@/components/ui/shared";

const JOURNEY = [
  {
    period: "Jan 2023 – Present", role: "Senior Full Stack Developer · Architect", company: "InnoSTARK Technologies", type: "current",
    bullets: [
      "Serve as engineer for NHS-grade healthcare platforms — owning technology stack selection, cloud infrastructure design, and system architecture decisions that affect thousands of patients across England.",
      "Architected and published a WCAG 2.1-compliant Design System (React + Storybook) to npm and Chromatic — reducing UI inconsistency across 3+ NHS portals by ~40% and cutting new feature UI delivery time significantly.",
      "Designed and built a real-time Video Consultation Platform replacing Jitsi with AWS Chime SDK, Lambda serverless APIs, and GraphQL — achieving zero patient-facing downtime during the full migration.",
      "Integrated AI-augmented development workflows using Claude, Cursor, and GitHub Copilot — accelerating team delivery velocity by ~35% while maintaining NHS-grade code quality and compliance.",
      "Led full application migration from Vue/Slim to React + Node.js; mentored 6 engineers on design systems, AWS architecture, and AI-assisted development best practices.",
    ],
  },
  {
    period: "Feb 2022 – Dec 2022", role: "Full Stack Developer · Lead Engineer", company: "Techbucks", type: "past",
    bullets: [
      "Led a cross-functional team of 3 engineers — sprint planning, Jira management, architecture reviews — delivering all projects on schedule with zero missed milestones.",
      "Architected a reusable UI component library eliminating ~35% of repetitive development effort across concurrent enterprise projects.",
      "Designed and built RESTful APIs with Node.js/Express.js and MongoDB; owned GCP deployments, CI/CD pipeline configuration, and production infrastructure.",
      "Ran internal engineering knowledge sessions on React architecture, Node.js patterns, and emerging AI-assisted development practices.",
    ],
  },
  {
    period: "Dec 2020 – Jan 2022", role: "Full Stack Developer", company: "Ursol", type: "past",
    bullets: [
      "Delivered enterprise-grade React UIs backed by Node.js APIs; led frontend architecture and full API integration for an AI-powered application from design to production.",
      "Established responsive design patterns and RESTful API standards adopted as team-wide engineering guidelines across all subsequent projects.",
    ],
  },
{ period: "2017 – 2021", role: "B.Sc. Software Engineering", company: "COMSATS University Islamabad, Lahore Campus", type: "education", bullets: [] },
];

export function JourneySection() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6" style={{ background: "var(--canvas)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16">
          <SectionLabel>Professional Journey</SectionLabel>
          <SectionTitle>5 Years of Architecture,<br /><GoldText>High-Impact Deliveries</GoldText></SectionTitle>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(232,168,32,0.4), rgba(232,168,32,0.15), transparent)" }} />

          <div className="space-y-8">
            {JOURNEY.map((item, i) => (
              <FadeUp key={item.company} delay={i * 0.1}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 hidden md:flex items-center justify-center`}
                    style={{
                      borderColor: item.type === "current" ? "#E8A820" : "var(--border-card)",
                      background: item.type === "current" ? "rgba(232,168,32,0.15)" : "var(--surface-200)",
                    }}>
                    {item.type === "current" && <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />}
                  </div>

                  <div className="p-7 rounded-2xl border card-hover"
                    style={{
                      background: item.type === "current" ? "var(--surface)" : "var(--canvas)",
                      borderColor: item.type === "current" ? "rgba(232,168,32,0.22)" : "var(--border-card)",
                    }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <p className="font-bold text-base" style={{ color: "var(--ink)" }}>{item.role}</p>
                        <p className="text-sm font-medium mt-0.5"
                          style={{ color: item.type === "current" ? "var(--tag-gold-text)" : "var(--ink-600)" }}>
                          {item.company}
                        </p>
                      </div>
                      <span className="font-mono text-xs mt-1" style={{ color: "var(--ink-600)" }}>{item.period}</span>
                    </div>

                    {item.bullets.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {item.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-400)" }}>
                            <span className="text-gold mt-1.5 shrink-0 text-xs">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
