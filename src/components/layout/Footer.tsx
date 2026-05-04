import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: "var(--border-card)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-gold-gradient flex items-center justify-center font-bold text-xs" style={{ color: "#1A1508" }}>AA</span>
          <span className="text-sm font-mono" style={{ color: "var(--ink-600)" }}>© {new Date().getFullYear()} Asghar Afzal</span>
        </div>
        <p className="text-xs font-mono" style={{ color: "var(--ink-600)", opacity: 0.5 }}>
          Built with Next.js · TypeScript · Tailwind · Framer Motion
        </p>
        <div className="flex items-center gap-6 text-xs" style={{ color: "var(--ink-600)" }}>
          <Link href="https://linkedin.com/in/asghar-afzal/" target="_blank" className="hover:text-gold transition-colors">LinkedIn</Link>
          <Link href="https://mail.google.com/mail/?view=cm&to=asgharafzal479@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Email</Link>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
