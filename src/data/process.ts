export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    phase: "Discovery",
    title: "Understand the Core Problem",
    subtitle: "Aligning technical scope with business objectives.",
    description: "Before writing a line of code, we clarify what success looks like. We map user journeys, define functional constraints, analyze existing systems, and establish measurable project goals.",
    activities: [
      "Requirements gathering & workflow mapping",
      "Identification of technical bottlenecks & constraints",
      "Scope prioritization (MVP vs. subsequent phases)",
      "Feasibility assessment for AI or third-party integrations"
    ],
    deliverable: "Scoped Technical Brief & Feature Matrix"
  },
  {
    step: "02",
    phase: "Architecture & Plan",
    title: "Design the Technical Blueprint",
    subtitle: "Choosing the right architecture to prevent costly rewrites.",
    description: "I map out the complete technical foundation—from PostgreSQL schema definitions and API contracts to component hierarchy and deployment topology. Everything is planned for scalability and maintainability.",
    activities: [
      "Database schema & entity-relationship modeling",
      "RESTful API contract & endpoint specification",
      "Component architecture & state strategy in React",
      "Milestone breakdown with clear delivery timelines"
    ],
    deliverable: "Architecture Plan & Milestone Schedule"
  },
  {
    step: "03",
    phase: "Engineering & Build",
    title: "Full-Stack Development",
    subtitle: "Iterative, production-quality implementation.",
    description: "Developing the application in transparent sprints. Clean TypeScript code, modular React interfaces, hardened Node.js/Python server logic, and robust database migrations built to production standards.",
    activities: [
      "Frontend UI implementation with responsive precision",
      "Backend API development & database integration",
      "Secure authentication & authorization setup",
      "AI pipeline orchestration & prompt guardrails"
    ],
    deliverable: "Functional Staging Application & Weekly Demos"
  },
  {
    step: "04",
    phase: "Testing & Hardening",
    title: "Rigor & Edge-Case Verification",
    subtitle: "Ensuring speed, security, and responsive reliability.",
    description: "Comprehensive testing across devices, network conditions, and error states. We verify form validations, handle edge cases gracefully, optimize database queries, and audit performance.",
    activities: [
      "Cross-browser and mobile responsive auditing",
      "API error handling and validation boundary tests",
      "Performance optimization & bundle profiling",
      "Security review (sanitization, auth checks, rate limits)"
    ],
    deliverable: "Production-Hardened, Audited Release Candidate"
  },
  {
    step: "05",
    phase: "Deployment & Handover",
    title: "Production Launch & Support",
    subtitle: "Smooth zero-downtime deployment and knowledge transfer.",
    description: "Deploying the software to cloud infrastructure with SSL, domain configuration, and environment isolation. I provide comprehensive handover documentation so your team can confidently manage the system.",
    activities: [
      "Production deployment & DNS/domain configuration",
      "Database migration execution & backup scheduling",
      "Codebase documentation & architecture walkthrough",
      "Post-launch warranty & stabilization window"
    ],
    deliverable: "Live Production Product & Clean Handover Docs"
  }
];
