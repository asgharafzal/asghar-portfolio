export interface Project {
  id: string;
  domain: string;
  title: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  url?: string;
  accent: string;
  index: string;
}

export const PROJECTS: Project[] = [
  {
    id: "attendanywhere",
    domain: "Healthcare · NHS England",
    title: "AttendAnywhere — Telemedicine Platform",
    problem: "Jitsi video stack was failing at NHS scale — dropped calls, latency spikes, zero compliance alignment. Patient consultations were unreliable and the architecture couldn't support the growth trajectory.",
    solution: "Made the architectural decision to replace Jitsi with AWS Chime SDK on a fully serverless Node.js backend. Designed the entire application architecture from scratch, established a shared Design System across all clinician and patient portals, and defined GraphQL as the API contract layer. Used Cursor and Claude to accelerate architectural design and code review cycles.",
    results: ["Improved call reliability for NHS England patients", "WCAG 2.1 compliant across all portals", "40% reduction in UI inconsistency", "Zero patient-facing downtime during migration"],
    stack: ["Next.js", "AWS Chime SDK", "Node.js", "GraphQL", "Storybook", "TypeScript", "AWS Lambda", "Copilot"],
    url: "https://england.nhs.attendanywhere.com/",
    accent: "#3B82F6",
    index: "01",
  },
  {
    id: "zesty",
    domain: "Healthcare · NHS Hospitals UK",
    title: "Zesty — NHS Patient Portal",
    problem: "Fragmented Vue codebase across multiple UK hospital portals with no shared component system. Every new hospital required full duplicated effort.",
    solution: "Engineered a WCAG 2.1-compliant Design System in Storybook deployed to Chromatic with visual regression testing. Led the application migration from Vue to React.",
    results: ["Multi-award winning NHS platform", "Shared design system across all portals", "Continuous visual regression testing", "Reduced duplicate dev effort significantly"],
    stack: ["React.js", "TypeScript", "Storybook", "Chromatic", "Bootstrap", "Vue.js", "Ruby on Rails", "Copilot"],
    url: "https://www.inductionhealthcare.com/",
    accent: "#10B981",
    index: "02",
  },
  {
    id: "skainet",
    domain: "AI · SaaS · 0 → 1 Build",
    title: "Skainet — AI Document Platform",
    problem: "Greenfield product — no codebase, no stack, just a vision for real-time AI document collaboration. Every architecture decision had to be made from scratch under tight delivery pressure.",
    solution: "Owned all architecture decisions from day one: Next.js for SSR, WebSockets over polling for real-time sync, Redux with strict server/UI state separation, MongoDB for flexible document storage, and a Python NLP pipeline integration. Leveraged Claude AI for architectural reasoning and complex design trade-off analysis throughout the build.",
    results: ["Full 0→1 architecture ownership", "Real-time collaboration via WebSockets", "NLP pipeline integrated", "Led team from blank repo to production"],
    stack: ["Next.js", "Node.js", "WebSockets", "MongoDB", "Redux", "Python / NLP", "Claude AI", "Styled-Components"],
    url: "https://skainet.ai/",
    accent: "#8B5CF6",
    index: "03",
  },
  {
    id: "raas",
    domain: "Fintech · Crowdfunding",
    title: "RAAS — P2P Lending Platform",
    problem: "Complex financial data model connecting investors with borrowers — needed a flexible schema for varied loan structures, not rigid relational tables.",
    solution: "Defined full stack architecture: Next.js frontend, Node.js/Express.js API layer, MongoDB for flexible loan data modeling. Built a Storybook component library and integrated third-party financial services.",
    results: ["Full stack ownership from zero", "End-to-end loan origination workflows", "Secure document handling", "Third-party payment integrations"],
    stack: ["Next.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "Storybook", "Express.js"],
    index: "04",
    accent: "#E8A820",
  },
  {
    id: "suntrix",
    domain: "Energy · SEO · Performance",
    title: "Suntrix — Solar Energy Platform",
    problem: "Solar provider needed a fast, SEO-ranked marketing platform — existing setup had poor Core Web Vitals and was generating zero organic leads.",
    solution: "Selected the full tech stack and built application architecture using Next.js SSR with GraphQL. Achieved strong Core Web Vitals and SEO performance from day one of launch.",
    results: ["Strong Core Web Vitals from launch", "SSR-powered SEO performance", "Tech stack ownership end-to-end", "Organic search traffic from day one"],
    stack: ["Next.js", "SSR", "GraphQL", "React Query", "MUI", "Directus", "Claude"],
    url: "https://suntrix.com.pk/",
    index: "05",
    accent: "#F59E0B",
  },
];
