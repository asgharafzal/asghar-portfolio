import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://asgharafzal.com"),
  title: {
    // 60 chars max — Google truncates beyond this in search results
    default: "Asghar Afzal — Senior Full Stack Architect | React · Node.js",
    template: "%s | Asghar Afzal",
  },
  // 155 chars max — everything beyond is invisible in Google search snippets
  description:
    "Full Stack Architect · 5+ yrs · NHS England · React · Next.js · Node.js · AWS. AI-augmented with Claude & Cursor. Available for remote roles & consulting.",
  keywords: [
    // ── High-intent hire / recruiter searches ──
    "Hire Full Stack Developer",
    "Hire React Developer",
    "Freelance Full Stack Developer",
    "Full Stack Developer for Hire",
    "Full Stack Consultant",
    "Fractional CTO",
    // ── Role titles (international market) ──
    "Senior Full Stack Architect",
    "Senior Full Stack Developer",
    "Frontend Architect",
    "Web Application Architect",
    "React Architect",
    "Next.js Architect",
    // ── Tech stack (what recruiters search) ──
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "GraphQL Developer",
    // ── Domain expertise ──
    "NHS Healthcare Developer",
    "Healthcare Web Developer",
    "Enterprise Design System Developer",
    "Design System Architect",
    // ── Pakistan + remote market ──
    "Full Stack Developer Lahore",
    "Full Stack Developer Pakistan",
    "Senior Developer Pakistan",
    "Remote Developer Pakistan",
    "Remote Full Stack Developer",
    // ── AI tooling (emerging searches) ──
    "AI-Augmented Development",
    "AI Developer Tools",
  ],
  authors: [{ name: "Asghar Afzal", url: "https://asgharafzal.com" }],
  creator: "Asghar Afzal",
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
    ],
    apple:    [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asgharafzal.com",
    siteName: "Asghar Afzal",
    // Clean single title — this is what shows on LinkedIn shares
    title: "Asghar Afzal — Senior Full Stack Architect | React · Next.js · AWS",
    description:
      "NHS-grade healthcare platforms, enterprise design systems, real-time AWS infrastructure. React · Next.js · Node.js · AWS. AI-augmented with Claude & Cursor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asghar Afzal — Senior Full Stack Architect | React · Next.js · AWS",
    description:
      "React · Next.js · TypeScript · Node.js · AWS · Claude & Cursor. 5+ years. NHS-grade. Enterprise-ready.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('aa-theme')||'dark';document.documentElement.className=t;})();` }} />
      </head>
      <body className={`${jakarta.variable} ${mono.variable} font-sans`} style={{ backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.032]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <ThemeProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
