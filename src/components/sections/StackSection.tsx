"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle } from "@/components/ui/shared";

const GROUPS = [
  { label: "Frontend",                  color: "#38BDF8", tags: ["React.js","Next.js","TypeScript","Vue.js","Redux","React Query","Framer Motion","Tailwind CSS","Styled-Components","MUI","Ant Design"] },
  { label: "Design Systems",            color: "#A78BFA", tags: ["Storybook","Chromatic","WCAG 2.1","Accessibility","Design Tokens","npm Publishing","Visual Regression"] },
  { label: "Backend & APIs",            color: "#34D399", tags: ["Node.js","Express.js","GraphQL Server","REST API","WebSockets","AWS Lambda","Serverless","Python"] },
  { label: "Cloud & Databases",         color: "#FCD34D", tags: ["AWS Chime SDK","EC2 · S3 · CloudFormation","GCP","Vercel","MongoDB","MySQL","DynamoDB","CI/CD"] },
  { label: "AI & Developer Tools",      color: "#F87171", tags: ["Claude AI","Cursor","GitHub Copilot","ChatGPT","Prompt Engineering","AI Code Review","AI-Assisted Architecture"] },
  { label: "Architecture & Leadership", color: "#E8A820", tags: ["System Design","Tech Stack Selection","Jest","React Testing Library","PR Reviews","Sprint Planning","Agile · Scrum"] },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6" style={{ background: "var(--canvas)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-14">
          <SectionLabel>Engineering Stack</SectionLabel>
          <SectionTitle>
            Building Robust Applications<br />
            <span style={{ color: "var(--ink-600)" }}>Requires More Than Syntax</span>
          </SectionTitle>
          <p className="mt-4 max-w-xl text-[15px]" style={{ color: "var(--ink-400)" }}>
            5 years of scaling micro-services, cloud-native architecture, and real-time systems — battle-tested in production and amplified by AI tools.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, gi) => (
            <FadeUp key={g.label} delay={gi * 0.06}>
              <div className="h-full p-6 rounded-xl border card-hover"
                style={{ background: "var(--surface)", borderColor: "var(--border-card)" }}>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] mb-4 font-semibold" style={{ color: g.color }}>
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-[12px] border transition-all cursor-default"
                      style={{ background: "var(--canvas)", borderColor: "var(--border-card)", color: "var(--ink-400)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--tag-gold-border)"; e.currentTarget.style.color = "var(--tag-gold-text)"; e.currentTarget.style.background = "var(--tag-gold-bg)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-card)"; e.currentTarget.style.color = "var(--ink-400)"; e.currentTarget.style.background = "var(--canvas)"; }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
