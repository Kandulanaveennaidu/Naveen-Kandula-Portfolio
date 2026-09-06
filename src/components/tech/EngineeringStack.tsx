"use client";

import React from "react";
import { Terminal, Database, Server, Cpu, Globe } from "lucide-react";

const STACK_GROUPS = [
  {
    category: "Frontend Engineering",
    icon: Globe,
    headline: "Interactive, Accessible, High-Performance UIs",
    tools: [
      { name: "React.js", note: "Component architecture & custom hooks" },
      { name: "Next.js", note: "App Router, SSR, SSG & Server Actions" },
      { name: "TypeScript", note: "Strict type safety & interface contracts" },
      { name: "Tailwind CSS", note: "Design system tokens & responsive layouts" },
      { name: "State Architecture", note: "Zustand, Context & Server Cache" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    icon: Server,
    headline: "Resilient APIs, Microservices & Real-Time Comms",
    tools: [
      { name: "Node.js", note: "Event-driven asynchronous backend runtime" },
      { name: "Express.js", note: "RESTful endpoints & custom middleware" },
      { name: "Python", note: "Data processing, scripts & AI pipelines" },
      { name: "WebSockets / WebRTC", note: "Real-time bidirectional communication" },
      { name: "Auth & Security", note: "JWT, OAuth, RBAC & secure session cookies" },
    ],
  },
  {
    category: "Data & Persistence",
    icon: Database,
    headline: "Relational Modeling, Indexing & Cloud Caching",
    tools: [
      { name: "PostgreSQL", note: "Complex queries, ACID transactions & schema design" },
      { name: "Neon Cloud", note: "Serverless Postgres & connection pooling" },
      { name: "Redis", note: "In-memory caching, rate-limiting & session store" },
      { name: "SQL & Query Tuning", note: "Execution plans, B-tree indexes & optimization" },
    ],
  },
  {
    category: "AI & Machine Intelligence",
    icon: Cpu,
    headline: "Deterministic LLM Workflows & Structured Outputs",
    tools: [
      { name: "OpenAI & Anthropic APIs", note: "GPT-4o, Claude 3.5 Sonnet integrations" },
      { name: "RAG & Vector Search", note: "Context retrieval with semantic embeddings" },
      { name: "Autonomous Agents", note: "Tool-calling, workflow loops & schema validation" },
      { name: "Prompt Architecture", note: "System design for zero-hallucination outputs" },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: Terminal,
    headline: "Continuous Delivery, Monitoring & Deployment",
    tools: [
      { name: "Vercel & AWS", note: "Edge networks, serverless functions & S3" },
      { name: "Docker", note: "Containerized reproducible development environments" },
      { name: "Git & GitHub Actions", note: "Automated CI/CD pipelines & lint validation" },
      { name: "Performance & SEO", note: "Core Web Vitals tuning & structured data" },
    ],
  },
];

export default function EngineeringStack() {
  return (
    <section className="py-24 sm:py-32 border-b border-border-subtle bg-bg-secondary/30 w-full" aria-label="Engineering Stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
            04 // TECHNICAL MASTERY
          </div>
          <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-4">
            Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Technology is proof of capability, not the entire personality. I select battle-tested tools designed to solve real business problems reliably and scale effortlessly.
          </p>
        </div>

        {/* Typographic Metadata Layout (Clean, organized list format) */}
        <div className="space-y-8">
          {STACK_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-card/40 hover:border-white/15 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-4 mb-6 border-b border-border-subtle">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-accent-cyan shrink-0" />
                    <h3 className="text-lg font-bold text-text-primary tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    {group.headline}
                  </span>
                </div>

                {/* Structured Tools List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-border-subtle hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="font-semibold text-text-primary mb-1">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-text-muted font-sans leading-snug">
                        {tool.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
