export interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  summary: string;
  idealFor: string;
  deliverables: string[];
  timeline: string;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "new-product",
    badge: "MVP & Greenfield",
    title: "New Product Development",
    summary: "Take your product idea from concept through complete architecture, full-stack engineering, and production launch.",
    idealFor: "Founders and businesses building a new web application, SaaS MVP, or internal operating platform from scratch.",
    deliverables: [
      "Technical architecture and database schema design",
      "Full frontend & backend implementation",
      "Authentication, roles, and core business workflows",
      "Cloud deployment setup and post-launch stability"
    ],
    timeline: "Scoped per project roadmap"
  },
  {
    id: "existing-app",
    badge: "Modernization",
    title: "Existing Application Modernization",
    summary: "Refactor technical debt, resolve persistent bugs, modernize UI/UX, and optimize slow database queries or APIs.",
    idealFor: "Companies with established software that needs senior engineering attention to scale, stabilize, or refresh.",
    deliverables: [
      "Codebase audit & architectural assessment",
      "Performance optimization & latency reduction",
      "Component refactoring & modern design update",
      "API stabilization and test coverage"
    ],
    timeline: "Flexible milestone sprints"
  },
  {
    id: "ai-integration",
    badge: "Intelligence Layer",
    title: "AI Capability Integration",
    summary: "Augment your existing product with custom LLM features, intelligent automation, semantic search, or AI assistants.",
    idealFor: "Businesses looking to integrate intelligent workflows, document parsing, or AI copilots without rebuilding everything.",
    deliverables: [
      "AI API and LLM pipeline engineering",
      "Structured output validation & guardrails",
      "Interactive UI states (streaming, citations, feedback)",
      "Caching, rate-limiting, and cost containment"
    ],
    timeline: "Scoped feature engagement"
  },
  {
    id: "feature-development",
    badge: "Modular Sprints",
    title: "Dedicated Feature Development",
    summary: "Ship high-priority features, custom integrations, or complex modules that your internal team hasn't had the bandwidth to tackle.",
    idealFor: "Growing engineering teams needing targeted, senior full-stack capability to clear a high-value backlog.",
    deliverables: [
      "Autonomous end-to-end feature delivery",
      "Seamless integration with your existing codebase",
      "Clean TypeScript typing and documentation",
      "Pull request reviews and developer handover"
    ],
    timeline: "Short-cycle sprints (1–3 weeks)"
  },
  {
    id: "technical-consultation",
    badge: "Advisory",
    title: "Technical Architecture Consultation",
    summary: "Strategic advice on system architecture, database design, technology stack selection, and AI implementation feasibility.",
    idealFor: "Non-technical founders or teams needing an expert second opinion before committing to a costly development path.",
    deliverables: [
      "Technical feasibility evaluation",
      "Database schema & API design review",
      "AI vendor and infrastructure recommendations",
      "Actionable engineering roadmap"
    ],
    timeline: "Session-based / Advisory"
  }
];
