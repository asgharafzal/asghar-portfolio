"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, ResultPill, StackTag } from "@/components/ui/shared";
import { PROJECTS } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16">
          <SectionLabel>Major Projects</SectionLabel>
          <SectionTitle>
            Real-World Implementations<br />
            <span style={{ color: "var(--ink-600)" }}>Driving Digital Transformation</span>
          </SectionTitle>
          <p className="mt-4 max-w-xl text-[15px]" style={{ color: "var(--ink-400)" }}>
            Enterprise and healthcare-grade products built with the architecture and quality standards that complex domains demand.
          </p>
        </FadeUp>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.06}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-[1fr_200px] rounded-2xl border card-hover overflow-hidden"
                style={{ background: "var(--canvas)", borderColor: "var(--border-card)" }}>

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: project.accent }} />

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: "var(--emerald-text)" }}>{project.domain}</p>
                      <h3 className="font-bold text-xl leading-snug" style={{ color: "var(--ink)" }}>{project.title}</h3>
                    </div>
                    <span className="font-mono text-5xl font-extrabold leading-none select-none shrink-0"
                      style={{ color: "var(--surface-300)" }}>{project.index}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-[11px] font-mono text-gold uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-400)" }}>{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-gold uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-400)" }}>{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">{project.results.map(r => <ResultPill key={r}>{r}</ResultPill>)}</div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex flex-wrap gap-1.5">{project.stack.map(s => <StackTag key={s}>{s}</StackTag>)}</div>
                    {project.url && (
                      <Link href={project.url} target="_blank" rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 font-mono shrink-0 transition-colors">
                        View Live <ExternalLink size={11} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center relative border-l overflow-hidden"
                  style={{ background: "var(--surface)", borderColor: "var(--border-card)" }}>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }} />
                  <span className="font-mono font-extrabold text-8xl select-none opacity-[0.08] group-hover:opacity-[0.16] transition-opacity"
                    style={{ color: project.accent }}>{project.index}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
