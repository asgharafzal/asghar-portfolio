"use client";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { SectionLabel, SectionTitle } from "@/components/ui/shared";

const POSTS = [
  { id:"1", title:"How I Achieved 95+ Lighthouse Scores on a Production Next.js App",         tag:"Next.js · Performance", read:"8 min",  desc:"SSR vs SSG decisions, image optimization, and the bundle analysis that actually moves the needle.", slug:"#" },
  { id:"2", title:"Building a Design System That Teams Actually Use — Lessons from NHS",      tag:"Design Systems",        read:"11 min", desc:"Storybook, WCAG 2.1, Chromatic visual regression, and the adoption strategy that made ours stick.", slug:"#" },
  { id:"3", title:"AWS Chime SDK vs Jitsi: A Real-World NHS Migration Story",                 tag:"AWS · Healthcare",      read:"9 min",  desc:"Why we switched, how we migrated a live NHS telemedicine platform with zero downtime.", slug:"#" },
];

export function BlogPreviewSection({ posts = [] }: { posts?: any[] }) {
  const display = posts.length > 0 ? posts : POSTS;
  return (
    <section id="blog" className="py-24 md:py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Writing</SectionLabel>
            <SectionTitle>Insights & Technical <span style={{ color: "var(--ink-600)" }}>Deep-Dives</span></SectionTitle>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all font-medium shrink-0">
            All Articles <ArrowRight size={14} />
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {display.map((post: any, i: number) => (
            <FadeUp key={post.id ?? post._id} delay={i * 0.09}>
              <Link href={`/blog/${post.slug?.current ?? post.slug ?? "#"}`}
                className="flex flex-col h-full p-6 rounded-2xl border card-hover group"
                style={{ background: "var(--canvas)", borderColor: "var(--border-card)" }}>
                <span className="inline-block self-start px-2.5 py-1 rounded-md text-[11px] font-mono border mb-4"
                  style={{ background: "rgba(232,168,32,0.07)", color: "#E8A820", borderColor: "rgba(232,168,32,0.16)" }}>
                  {post.tag ?? post.category ?? "Article"}
                </span>
                <h3 className="font-bold text-base leading-snug mb-3 flex-1 transition-colors group-hover:text-gold"
                  style={{ color: "var(--ink)" }}>{post.title}</h3>
                <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: "var(--ink-400)" }}>
                  {post.desc ?? post.excerpt}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono pt-4"
                  style={{ borderTop: "1px solid var(--border-card)", color: "var(--ink-600)" }}>
                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Coming Soon"}</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{post.read ?? post.readTime ?? "5 min"}</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
