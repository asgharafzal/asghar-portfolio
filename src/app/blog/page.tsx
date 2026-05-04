import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { getPosts } from "@/lib/sanity/queries";
import { SectionLabel } from "@/components/ui/shared";

export const metadata: Metadata = {
  title: "Blog — Technical Articles on React, Next.js & Architecture",
  description: "In-depth technical articles on frontend architecture, design systems, performance, and full stack development.",
};

const FALLBACK = [
  { _id:"1", title:"How I Achieved 95+ Lighthouse Scores on a Production Next.js App",    slug:{current:"#"}, category:"Next.js · Performance", readTime:"8 min",  excerpt:"SSR vs SSG decisions, image optimization, and the bundle analysis that actually moves the needle.", publishedAt:"" },
  { _id:"2", title:"Building a Design System That Teams Actually Use — Lessons from NHS", slug:{current:"#"}, category:"Design Systems",        readTime:"11 min", excerpt:"Storybook, WCAG 2.1, Chromatic visual regression, and the adoption strategy that made ours stick.", publishedAt:"" },
  { _id:"3", title:"AWS Chime SDK vs Jitsi: A Real-World NHS Migration Story",            slug:{current:"#"}, category:"AWS · Healthcare",      readTime:"9 min",  excerpt:"Why we switched, how we migrated a live NHS telemedicine platform with zero downtime.", publishedAt:"" },
  { _id:"4", title:"The State Management Decision Framework I Use on Every Project",      slug:{current:"#"}, category:"React · Architecture",  readTime:"7 min",  excerpt:"When to use Redux, React Query, Context, Zustand — and the questions I ask before writing state code.", publishedAt:"" },
  { _id:"5", title:"Why I Choose MongoDB for Complex Domain Models (and When I Don't)",   slug:{current:"#"}, category:"Node.js · MongoDB",     readTime:"6 min",  excerpt:"Document databases aren't always the right choice. My framework with examples from fintech and healthcare.", publishedAt:"" },
  { _id:"6", title:"How I Got Hired for NHS Projects From Lahore, Pakistan",              slug:{current:"#"}, category:"Career · Remote",       readTime:"5 min",  excerpt:"The portfolio, communication approach, and technical depth that lands global clients remotely.", publishedAt:"" },
];

export default async function BlogPage() {
  const posts = await getPosts(20);
  const display = posts.length > 0 ? posts : FALLBACK;

  return (
    <div className="min-h-screen pt-28 pb-24 px-6" style={{ background: "var(--canvas)" }}>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-gold"
          style={{ color: "var(--ink-400)" }}>
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <SectionLabel>Writing</SectionLabel>
        <h1 className="text-5xl font-extrabold tracking-tight mb-3" style={{ color: "var(--ink)" }}>Insights & Articles</h1>
        <p className="text-lg mb-14 max-w-xl" style={{ color: "var(--ink-400)" }}>
          Technical deep-dives on architecture, performance, and building production web systems at scale.
        </p>
        <div className="space-y-3">
          {display.map((post: any) => (
            <Link key={post._id} href={post.publishedAt ? `/blog/${post.slug.current}` : "#"}
              className="group flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl border card-hover transition-all"
              style={{ background: "var(--surface)", borderColor: "var(--border-card)" }}>
              <div className="flex-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono border mb-2"
                  style={{ background: "rgba(232,168,32,0.07)", color: "#E8A820", borderColor: "rgba(232,168,32,0.15)" }}>
                  {post.category}
                </span>
                <h2 className="font-bold text-base leading-snug group-hover:text-gold transition-colors" style={{ color: "var(--ink)" }}>{post.title}</h2>
                <p className="text-sm mt-1 line-clamp-1" style={{ color: "var(--ink-400)" }}>{post.excerpt}</p>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 shrink-0">
                <span className="text-xs font-mono flex items-center gap-1" style={{ color: "var(--ink-600)" }}><Clock size={10} />{post.readTime}</span>
                <span className="text-xs font-mono" style={{ color: "var(--ink-600)", opacity: 0.6 }}>
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Coming Soon"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
