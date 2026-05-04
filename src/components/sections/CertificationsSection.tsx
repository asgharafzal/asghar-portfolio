"use client";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle } from "@/components/ui/shared";
import { ExternalLink, Award, Clock } from "lucide-react";

interface Cert { id:string; issuer:string; title:string; type:string; url?:string; status:"earned"|"in-progress"|"placeholder"; issuerInitial:string; color:string; }

const CERTS: Cert[] = [
  {
    id: "aws-dev",
    issuer: "Amazon Web Services",
    title: "AWS Certified Developer – Associate",
    type: "Cloud · Serverless · Infrastructure",
    status: "in-progress",
    issuerInitial: "A",
    color: "#FF9900",
  },
  {
    id: "aws-sa",
    issuer: "Amazon Web Services",
    title: "AWS Solutions Architect – Associate",
    type: "System Design · Cloud Architecture",
    status: "in-progress",
    issuerInitial: "A",
    color: "#FF9900",
  },
  {
    id: "meta-fe",
    issuer: "Meta / Coursera",
    title: "Meta Front-End Developer",
    type: "Professional Certificate",
    status: "in-progress",
    issuerInitial: "M",
    color: "#0866FF",
  },
];

export function CertificationsSection() {
  const hasCerts = CERTS.some(c => c.status === "earned");
  return (
    <section id="certifications" className="py-24 md:py-32 px-6" style={{ background: "var(--canvas)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-14">
          <SectionLabel>Certifications</SectionLabel>
          <SectionTitle>Continuous Learning &<br /><span style={{ color: "var(--ink-600)" }}>Verifiable Growth</span></SectionTitle>
          {!hasCerts && (
            <p className="mt-4 text-sm font-mono px-4 py-3 rounded-lg inline-block"
              style={{ color: "var(--ink-400)", background: "rgba(232,168,32,0.06)", border: "1px solid rgba(232,168,32,0.15)" }}>
              ✦ Open <code className="text-gold">CertificationsSection.tsx</code> and add your real certifications
            </p>
          )}
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <FadeUp key={cert.id} delay={i * 0.07}>
              <div className={`relative h-full p-6 rounded-xl border card-hover ${cert.status === "placeholder" ? "opacity-40" : ""}`}
                style={{ background: "var(--surface)", borderColor: cert.status === "placeholder" ? "var(--border-card)" : cert.status === "earned" ? "var(--border-card)" : "rgba(232,168,32,0.2)" }}>

                {cert.status === "in-progress" && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full border"
                    style={{ background: "rgba(232,168,32,0.08)", borderColor: "rgba(232,168,32,0.2)" }}>
                    <Clock size={9} className="text-gold" />
                    <span className="text-[9px] font-mono text-gold">In Progress</span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-card"
                    style={{ background: cert.status === "placeholder" ? "var(--surface-200)" : cert.color }}>
                    {cert.status === "placeholder" ? <Award size={18} style={{ color: "var(--ink-600)" }} /> : cert.issuerInitial}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--ink-600)" }}>{cert.issuer}</p>
                    <h4 className="font-bold text-sm leading-snug mt-0.5" style={{ color: "var(--ink)" }}>{cert.title}</h4>
                    <p className="text-[11px] mt-1" style={{ color: "var(--ink-400)" }}>{cert.type}</p>
                  </div>
                </div>

                {cert.url && cert.status === "earned" && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-gold hover:opacity-70 font-mono transition-opacity">
                    View Certificate <ExternalLink size={10} />
                  </a>
                )}
                {cert.status === "placeholder" && (
                  <p className="text-[10px] font-mono italic" style={{ color: "var(--ink-600)" }}>Add your certification here</p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
