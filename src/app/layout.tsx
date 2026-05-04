import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://asgharafzal.dev"),
  title: {
    default: "Asghar Afzal — Senior Full Stack Developer | React · Next.js · Node.js",
    template: "%s | Asghar Afzal",
  },
  description:
    "Senior Full Stack Developer with 5+ years building NHS-grade healthcare platforms, real-time applications, and enterprise design systems. React · Next.js · TypeScript · Node.js · AWS. Available for remote roles and consulting.",
  keywords: [
    "Full Stack Developer Pakistan","React Developer Lahore","Next.js Developer",
    "Node.js Developer","TypeScript Developer","Frontend Architect",
    "Hire React Developer","Remote Developer Pakistan","NHS Developer",
    "Healthcare Web Developer","Design System Developer","Senior Frontend Developer",
  ],
  authors: [{ name: "Asghar Afzal", url: "https://asgharafzal.dev" }],
  creator: "Asghar Afzal",
  openGraph: {
    type: "website", locale: "en_US", url: "https://asgharafzal.dev",
    siteName: "Asghar Afzal",
    title: "Asghar Afzal — Senior Full Stack Developer",
    description: "NHS-grade telemedicine, enterprise design systems, React, Next.js, Node.js, AWS",
  },
  twitter: { card: "summary_large_image", title: "Asghar Afzal — Senior Full Stack Developer", description: "React, Next.js, TypeScript, Node.js, AWS" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('aa-theme')||'dark';document.documentElement.className=t;})();` }} />
      </head>
      <body className={`${jakarta.variable} ${mono.variable} font-sans`} style={{ backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
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
