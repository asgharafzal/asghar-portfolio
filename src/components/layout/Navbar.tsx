"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#about",    label: "About" },
  { href: "#stack",    label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#journey",  label: "Journey" },
  { href: "#trust",    label: "Trust" },
  { href: "/blog",     label: "Blog" },
  { href: "#contact",  label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500", scrolled ? "backdrop-blur-xl border-b" : "bg-transparent")}
        style={scrolled ? { backgroundColor:"var(--canvas)", borderColor:"var(--border-card)", opacity:0.97 } : {}}>
        <nav className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-gold-gradient flex items-center justify-center font-extrabold text-sm shadow-gold-md"
              style={{ color: "#1A1508" }}>AA</span>
            <span className="font-bold hidden sm:block" style={{ color: "var(--ink)" }}>Asghar Afzal</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: "var(--ink-400)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-400)")}>
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Resume link — tag-gold-text is 5.8:1 AA on canvas in both themes */}
            <a href="/resume.pdf" download="Asghar Afzal.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold hover:opacity-80 transition-all"
              style={{ borderColor: "var(--tag-gold-border)", color: "var(--tag-gold-text)" }}>
              <Download size={13} /> Resume
            </a>
            <Link href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient text-sm font-bold hover:opacity-90 transition-all shadow-gold-md"
              style={{ color: "#1A1508" }}>
              Hire Me
            </Link>
            <button className="md:hidden w-9 h-9 flex items-center justify-center"
              style={{ color: "var(--ink-400)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.2 }}
            className="fixed top-[68px] inset-x-0 z-40 backdrop-blur-xl border-b md:hidden"
            style={{ backgroundColor:"var(--canvas)", borderColor:"var(--border-card)" }}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-0.5">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-lg text-sm font-medium border-b transition-all"
                  style={{ color: "var(--ink-400)", borderColor: "var(--border-card)" }}>
                  {n.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <a href="/resume.pdf" download="Asghar Afzal.pdf" className="flex-1 py-3 text-center rounded-lg border text-sm font-semibold"
                  style={{ borderColor:"var(--tag-gold-border)", color:"var(--tag-gold-text)" }}>Download Resume</a>
                <Link href="#contact" onClick={() => setOpen(false)}
                  className="flex-1 py-3 text-center rounded-lg bg-gold-gradient text-sm font-bold"
                  style={{ color:"#1A1508" }}>Hire Me</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
