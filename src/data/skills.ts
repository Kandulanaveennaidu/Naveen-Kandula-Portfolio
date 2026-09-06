export interface SkillCategory {
  id: string;
  category: string;
  headline: string;
  skills: {
    name: string;
    level: string; // e.g., "Advanced", "Production Experience"
    highlight?: boolean;
    description: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend Architecture",
    headline: "High-performance, accessible, and responsive user interfaces.",
    skills: [
      { name: "React.js", level: "Production Core", highlight: true, description: "Declarative component trees, custom hooks, performance profiling, and state management." },
      { name: "TypeScript", level: "Production Core", highlight: true, description: "Strict end-to-end typing, type inference, interface contracts, and maintainability." },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Asynchronous runtime, event loop, closures, modern ES features, and DOM manipulation." },
      { name: "HTML5 & Semantic Markup", level: "Advanced", description: "Accessible hierarchy, semantic elements, SEO readiness, and screen reader compatibility." },
      { name: "CSS3 & Modern Styling", level: "Advanced", description: "Flexbox, CSS Grid, responsive design, animations, and Tailwind utility systems." },
      { name: "Modern Component Architecture", level: "Advanced", highlight: true, description: "Modular design systems, atomic patterns, reusability, and clean separation of concerns." },
      { name: "Responsive UI Development", level: "Advanced", description: "Mobile-first layouts, adaptive touch interactions, and fluid typography systems." }
    ]
  },
  {
    id: "backend",
    category: "Backend & API Systems",
    headline: "Resilient server-side architecture, secure APIs, and data modeling.",
    skills: [
      { name: "Node.js", level: "Production Core", highlight: true, description: "Event-driven runtime, asynchronous I/O, middleware pipelines, and scalable microservices." },
      { name: "Express.js", level: "Production Core", highlight: true, description: "Robust routing, centralized error handlers, RESTful controllers, and security headers." },
      { name: "Python", level: "Core", highlight: true, description: "Backend scripting, AI pipeline orchestration, data processing, and automation utilities." },
      { name: "RESTful API Design", level: "Advanced", highlight: true, description: "Resource-oriented routing, idempotent methods, JSON contracts, and versioning strategies." },
      { name: "Authentication & Authorization", level: "Advanced", description: "JWT tokens, HTTP-only cookies, OAuth2 flows, and role-based access control (RBAC)." },
      { name: "API Integrations", level: "Advanced", description: "Third-party webhook ingestion, rate limiting, retry backoff, and payment gateway hooks." },
      { name: "Server-Side Architecture", level: "Advanced", description: "Layered architectures (controller-service-repository), caching layers, and modular design." }
    ]
  },
  {
    id: "ai",
    category: "AI Integration & Workflows",
    headline: "Transforming raw language models into practical business workflows.",
    skills: [
      { name: "AI API Integration", level: "Production Core", highlight: true, description: "Connecting web backends to foundational LLM APIs with streaming and resilient fallbacks." },
      { name: "LLM Orchestration", level: "Production Core", highlight: true, description: "Structured JSON schema outputs, multi-step prompt chains, and context injection." },
      { name: "Intelligent Automation", level: "Advanced", highlight: true, description: "Automating manual business workflows, classification tasks, and repetitive data extraction." },
      { name: "AI-Powered Feature Engineering", level: "Advanced", description: "Embedding smart search, text synthesis, and contextual assistance into existing user interfaces." },
      { name: "AI-Assisted Workflows", level: "Advanced", description: "Human-in-the-loop validation, confidence scoring, and review queue integration." },
      { name: "Prompt Architecture & Guardrails", level: "Advanced", description: "Defensive prompt design, deterministic constraints, token budgeting, and output verification." }
    ]
  },
  {
    id: "database",
    category: "Database & Data Modeling",
    headline: "Relational integrity, schema design, and query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Production Core", highlight: true, description: "Relational database design, ACID compliance, composite indexing, and schema migrations." },
      { name: "SQL & Query Optimization", level: "Advanced", highlight: true, description: "Complex joins, indexing strategies, query execution analysis, and performance tuning." },
      { name: "Database Design & Data Modeling", level: "Advanced", description: "Entity-relationship diagrams, foreign key constraints, normalization, and data governance." },
      { name: "API & Database Integration", level: "Advanced", description: "Connection pooling, transactional safety, ORM/query builder efficiency, and audit logging." }
    ]
  },
  {
    id: "engineering",
    category: "Production Engineering & Tools",
    headline: "Clean operations, testing, deployment, and performance assurance.",
    skills: [
      { name: "Full-Stack Architecture", level: "Advanced", highlight: true, description: "Cohesive integration of frontend, server, database, and cloud layers for production." },
      { name: "Git & Version Control", level: "Advanced", description: "Branching strategies, semantic commits, code reviews, and Git repository workflows." },
      { name: "Docker & Containerization", level: "Practical", description: "Reproducible development containers, environment parity, and lightweight images." },
      { name: "Production Debugging", level: "Advanced", description: "Root-cause diagnosis, server log tracing, network inspection, and bug mitigation." },
      { name: "Performance Optimization", level: "Advanced", description: "Code splitting, bundle analysis, asset compression, database indexing, and caching." },
      { name: "Deployment & CI/CD", level: "Advanced", description: "Cloud hosting platforms, automated build verification, SSL certificates, and zero-downtime deploys." }
    ]
  }
];
