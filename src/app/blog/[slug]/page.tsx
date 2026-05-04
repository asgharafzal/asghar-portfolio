import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPost, getPosts } from "@/lib/sanity/queries";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await getPosts(50);
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink mb-10 transition-colors">
          <ArrowLeft size={14} /> All Articles
        </Link>
        <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-gold/8 text-gold border border-gold/15 mb-5">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-ink mb-4">{post.title}</h1>
        <p className="text-ink/55 text-lg mb-6">{post.excerpt}</p>
        <div className="flex items-center gap-5 text-xs font-mono text-ink/30 border-t border-surface-300 pt-5 mb-12">
          <span className="flex items-center gap-1.5"><Calendar size={11} />{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
        </div>
        <article className="prose prose-invert max-w-none">
          <p className="text-ink/40 italic font-mono text-sm">
            [Render post.body with @portabletext/react here — run: npm install @portabletext/react]
          </p>
        </article>
      </div>
    </div>
  );
}
