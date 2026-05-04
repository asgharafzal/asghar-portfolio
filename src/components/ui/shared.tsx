import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("label-line text-xs font-mono font-semibold uppercase tracking-[0.18em] mb-4", className)}
      style={{ color: "var(--tag-gold-text)" }}>
      {children}
    </p>
  );
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight", className)}
      style={{ color: "var(--ink)" }}>
      {children}
    </h2>
  );
}

export function GoldText({ children }: { children: React.ReactNode }) {
  /* Decorative only — not for small inline text that needs AA contrast */
  return <span className="text-gold">{children}</span>;
}

export function StackTag({ children }: { children: React.ReactNode }) {
  return <span className="stack-tag">{children}</span>;
}

export function ResultPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="result-pill">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path d="M4 7V1M1 4l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {children}
    </span>
  );
}

export function EmeraldBadge({ children }: { children: React.ReactNode }) {
  return <span className="emerald-pill">{children}</span>;
}
