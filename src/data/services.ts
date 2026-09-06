export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
  iconName: string;
}

export const servicesData: Service[] = [
  {
    id: "full-stack-web",
    number: "01",
    title: "Full-Stack Web Development",
    tagline: "Complete, production-ready web applications built from the ground up.",
    description: "End-to-end development of responsive, high-performance web products. I handle everything from modern React/TypeScript frontends and component systems to resilient Node.js backends, secure authentication, and PostgreSQL data persistence.",
    deliverables: [
      "Modern React & TypeScript responsive UI",
      "Custom RESTful APIs & business logic",
      "Role-based authentication & session security",
      "PostgreSQL schema design & optimization",
      "Admin portals, dashboards & customer views",
      "Production deployment with CI/CD setup"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    idealFor: "Startups and businesses launching a new digital product, SaaS MVP, or customer portal.",
    iconName: "Layers"
  },
  {
    id: "ai-integration",
    number: "02",
    title: "AI Integration & Automation",
    tagline: "Embed intelligent capabilities directly into your existing or new products.",
    description: "Move beyond standard AI chat widgets. I design and build structured LLM integrations, retrieval workflows, semantic processing pipelines, and intelligent automated tasks that save operational hours and delight end users.",
    deliverables: [
      "Custom LLM & AI API pipeline integration",
      "Intelligent text & document extraction workflows",
      "Context-aware AI assistants & copilot interfaces",
      "Automated prompt engineering & guardrails",
      "Structured JSON output parsing & schema validation",
      "Rate-limit handling, caching & fallback strategies"
    ],
    technologies: ["Python", "AI APIs", "LLM Integration", "Node.js", "Vector Workflows", "Automation"],
    idealFor: "Companies seeking to supercharge existing software with practical, high-value AI capabilities.",
    iconName: "Sparkles"
  },
  {
    id: "backend-api",
    number: "03",
    title: "Backend & API Architecture",
    tagline: "Scalable server-side foundations, robust APIs, and clean data modeling.",
    description: "High-performance backend engineering built for reliability and speed. I architect modular REST APIs, secure token-based authentication systems, third-party payment/service integrations, and relational database layers designed to scale.",
    deliverables: [
      "Modular REST API architecture & documentation",
      "JWT & OAuth2 authentication / authorization",
      "PostgreSQL relational modeling, migrations & indexing",
      "Third-party webhook & service integrations",
      "Server-side validation & error-handling boundaries",
      "Performance optimization & database query tuning"
    ],
    technologies: ["Node.js", "Express.js", "Python", "PostgreSQL", "REST APIs", "SQL"],
    idealFor: "Teams needing a rock-solid server foundation or dedicated API backend for mobile/web apps.",
    iconName: "Server"
  },
  {
    id: "product-enhancement",
    number: "04",
    title: "Existing Product Enhancement",
    tagline: "Modernize legacy systems, resolve bottlenecks, and ship critical features.",
    description: "For established businesses that already run software but need experienced engineering firepower to refactor debt, eliminate bugs, upgrade legacy user interfaces, and integrate modern third-party APIs.",
    deliverables: [
      "Comprehensive codebase & performance audit",
      "Bug fixing & technical debt elimination",
      "Frontend UI/UX modernization & design refresh",
      "API refactoring & latency reduction",
      "Integration of modern payment, CRM, or email APIs",
      "Code documentation & developer onboarding notes"
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Refactoring", "Performance"],
    idealFor: "Companies with an existing codebase that feels slow, brittle, or behind on features.",
    iconName: "Wrench"
  },
  {
    id: "business-systems",
    number: "05",
    title: "Custom Business Applications",
    tagline: "Internal tools, CRMs, and management platforms tailored to your operations.",
    description: "Off-the-shelf software often forces you to compromise on your unique business logic. I build tailored internal platforms, booking engines, inventory dashboards, and customer management systems tailored exactly to how your team works.",
    deliverables: [
      "Custom CRM & pipeline management interfaces",
      "Operational dashboards & real-time analytics",
      "Multi-tenant role & permission hierarchies",
      "Automated email notifications & event webhooks",
      "Exportable reporting (CSV/PDF) and data syncing",
      "Secure cloud deployment and backup configuration"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    idealFor: "Operational teams looking to replace clunky spreadsheets or rigid SaaS platforms.",
    iconName: "Briefcase"
  },
  {
    id: "ai-native-products",
    number: "06",
    title: "AI-Powered Product Development",
    tagline: "Greenfield products where artificial intelligence is the core engine.",
    description: "From concept to full deployment, I architect applications where AI is woven deeply into every user interaction—transforming manual human input into automated, actionable intelligence with real-time feedback and state management.",
    deliverables: [
      "AI-native user interaction architecture",
      "Streaming responses & optimistic UI states",
      "Human-in-the-loop validation checkpoints",
      "Hybrid storage (relational data + AI state cache)",
      "Continuous prompt evaluation & telemetry",
      "Production deployment with monitoring"
    ],
    technologies: ["Python", "Node.js", "React.js", "LLM APIs", "PostgreSQL", "Streaming UI"],
    idealFor: "Founders creating AI-first SaaS products, specialized copilots, or intelligent agents.",
    iconName: "Cpu"
  }
];
