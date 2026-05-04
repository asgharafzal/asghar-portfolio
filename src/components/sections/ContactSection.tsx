"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle, GoldText } from "@/components/ui/shared";

const SERVICES = [
  { icon: "🏗️", title: "Full Stack Development",    desc: "End-to-end React + Node.js applications, from architecture to deployment." },
  { icon: "🎨", title: "Design System Architecture", desc: "WCAG-compliant Storybook component libraries published to npm." },
  { icon: "☁️", title: "AWS Integration",            desc: "Chime SDK, Lambda, S3, real-time systems built on serverless infrastructure." },
  { icon: "👥", title: "Technical Leadership",       desc: "Team lead, PR reviews, architecture consulting, and engineering mentorship." },
];

const LINKS = [
  { icon: Mail,    label: "Email",            value: "asgharafzal479@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=asgharafzal479@gmail.com" },
  { icon: Phone,   label: "Phone / WhatsApp", value: "+92 316 4343973",           href: "tel:+923164343973" },
  { icon: Linkedin,label: "LinkedIn",         value: "linkedin.com/in/asghar-afzal", href: "https://linkedin.com/in/asghar-afzal/" },
  { icon: MapPin,  label: "Location",         value: "Lahore, Pakistan · Remote Worldwide", href: null },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6" style={{ background: "var(--canvas)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-16">
          <SectionLabel className="justify-center">Contact</SectionLabel>
          <SectionTitle className="mb-4">
            Ready to Build Something<br /><GoldText>That Actually Matters?</GoldText>
          </SectionTitle>
          <p className="max-w-xl mx-auto text-[15px]" style={{ color: "var(--ink-400)" }}>
            Whether you need a senior full stack engineer for your team, a technical co-founder for your product,
            or a trusted consultant to untangle your architecture — let&apos;s talk.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <FadeUp>
            <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--tag-gold-text)" }}>What I can help with</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SERVICES.map((s) => (
                <div key={s.title} className="p-4 rounded-xl border"
                  style={{ background: "var(--surface)", borderColor: "var(--border-card)" }}>
                  <span className="text-2xl mb-3 block">{s.icon}</span>
                  <h4 className="font-bold text-sm mb-1" style={{ color: "var(--ink)" }}>{s.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--ink-400)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://mail.google.com/mail/?view=cm&to=asgharafzal479@gmail.com"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient font-bold text-sm shadow-gold-md hover:shadow-gold-lg hover:opacity-95 hover:-translate-y-0.5 transition-all"
                style={{ color: "#1A1508" }}>
                <Mail size={15} /> Send Me an Email
              </a>
              <a href="/resume.pdf" download="Asghar Afzal.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border text-gold font-semibold text-sm hover:bg-gold/10 transition-all"
                style={{ borderColor: "var(--tag-gold-border)", color: "var(--tag-gold-text)" }}>
                <Download size={15} /> Download Resume
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="p-8 rounded-2xl border shadow-gold-sm"
              style={{ background: "var(--surface)", borderColor: "rgba(232,168,32,0.16)" }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--ink-600)" }}>Direct Contact</p>
              <div className="space-y-5">
                {LINKS.map((l) => {
                  const El = l.href ? "a" : "div";
                  return (
                    <El key={l.label}
                      {...(l.href ? { href: l.href, target: l.href.startsWith("http") ? "_blank" : undefined, rel: l.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                      className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{ background: "rgba(232,168,32,0.09)" }}>
                        <l.icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--ink-600)" }}>{l.label}</p>
                        <p className="text-sm font-medium transition-colors group-hover:text-gold" style={{ color: "var(--ink)" }}>{l.value}</p>
                      </div>
                    </El>
                  );
                })}
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border-card)" }}>
                <p className="text-xs font-mono" style={{ color: "var(--ink-600)" }}>Response time: typically within 24 hours</p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
