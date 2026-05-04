import type { Config } from "tailwindcss";

const config: Config = {
  // We toggle themes by adding/removing .dark/.light class on <html>
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        // These are resolved via CSS variables at runtime —
        // both themes share the same class names, different values
        canvas:  {
          DEFAULT: "var(--canvas)",
          200:     "var(--canvas-200)",
          300:     "var(--canvas-300)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          200:     "var(--surface-200)",
          300:     "var(--surface-300)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          200:     "var(--ink-200)",
          400:     "var(--ink-400)",
          600:     "var(--ink-600)",
        },
        gold: {
          DEFAULT: "#E8A820",
          50:  "#FEF9EC",
          100: "#FDF0C4",
          200: "#FBDE85",
          300: "#F9C848",
          400: "#E8A820",
          500: "#C98A0A",
        },
      },
      backgroundImage: {
        "gold-gradient":   "linear-gradient(135deg, #E8A820 0%, #F9C848 50%, #C98A0A 100%)",
        "gold-gradient-h": "linear-gradient(90deg, #E8A820, #F9C848)",
      },
      boxShadow: {
        "gold-sm":  "var(--shadow-gold-sm)",
        "gold-md":  "var(--shadow-gold-md)",
        "gold-lg":  "var(--shadow-gold-lg)",
        "card":     "var(--shadow-card)",
        "card-h":   "var(--shadow-card-h)",
      },
      keyframes: {
        shimmer:   { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        blink:     { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        shimmer:   "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        blink:     "blink 1.2s step-end infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--ink-200)",
            a: { color: "#E8A820" },
            strong: { color: "var(--ink)" },
            code: { color: "#F9C848" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
