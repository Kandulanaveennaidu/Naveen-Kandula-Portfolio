export interface ValueProp {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export const whyWorkWithMeData: ValueProp[] = [
  {
    id: "full-stack-ownership",
    iconName: "Maximize2",
    title: "Full-Stack Ownership",
    subtitle: "One cohesive engineer across frontend, backend, and database.",
    description: "No lost-in-translation handoffs between disconnected frontend coders and backend architects. You communicate with one senior engineer who understands how every layer connects.",
    highlight: "Zero vendor friction, unified delivery accountability."
  },
  {
    id: "practical-ai",
    iconName: "Cpu",
    title: "AI-Native Engineering",
    subtitle: "Real intelligence integrated directly into business workflows.",
    description: "I don't just wrap generic chatbot templates. I build structured, schema-validated LLM pipelines with guardrails, streaming states, and relational storage that provide measurable business value.",
    highlight: "Hardened AI pipelines with verified schema outputs."
  },
  {
    id: "production-standards",
    iconName: "ShieldCheck",
    title: "Production-Minded Standards",
    subtitle: "Clean architecture, type safety, and defensive resilience.",
    description: "Every line of code is structured with maintainability in mind: strict TypeScript, modular components, normalized PostgreSQL schemas, and clear error boundaries that don't crash under stress.",
    highlight: "Software built to run reliably in production from day one."
  },
  {
    id: "business-first",
    iconName: "Target",
    title: "Business-First Product Thinking",
    subtitle: "Code written to solve real customer and revenue problems.",
    description: "Having worked on products end-to-end, I evaluate technical decisions through the lens of user experience, speed-to-market, and long-term operating costs rather than personal engineering vanity.",
    highlight: "Pragmatic technical choices that drive actual ROI."
  },
  {
    id: "transparent-cadence",
    iconName: "MessageSquare",
    title: "Responsive, Transparent Collaboration",
    subtitle: "Direct communication with clear milestones and zero jargon.",
    description: "You'll never wonder what's happening with your project. Regular progress updates, functional staging demos, documented milestones, and asynchronous availability keep you fully in control.",
    highlight: "Direct founder-level access with predictable shipping cadences."
  },
  {
    id: "sustainable-handover",
    iconName: "FileCheck",
    title: "Zero Lock-In & Clean Handover",
    subtitle: "Well-documented codebases your future team can easily extend.",
    description: "I build on industry-standard technologies (React, Node.js, TypeScript, PostgreSQL) and deliver clean README documentation so your internal team or future hires can seamlessly continue where I left off.",
    highlight: "100% intellectual property ownership with clean documentation."
  }
];
