"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Code, Server, Sparkles, RefreshCw } from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Full-Stack Web Products",
    subtitle: "Turn early concepts into scalable, production web applications.",
    description: "End-to-end architecture and implementation: modern frontends with React and Next.js paired with resilient backend services and cloud databases. Built with speed, security, and accessibility from the ground up.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    useCase: "Founders launching a new SaaS MVP or businesses digitizing manual operations with custom web software.",
    icon: Code,
  },
  {
    number: "02",
    title: "Backend Systems & APIs",
    subtitle: "High-performance services designed for reliability and uptime.",
    description: "Designing RESTful and real-time APIs, robust relational database schemas in PostgreSQL, session/token authentication, caching layers, and third-party platform webhooks that handle high concurrent traffic without degradation.",
    technologies: ["Node.js", "Express.js", "Python", "PostgreSQL", "REST APIs"],
    useCase: "Companies needing scalable server infrastructure, third-party API orchestration, or database migration.",
    icon: Server,
  },
  {
    number: "03",
    title: "AI Integration & Pipelines",
    subtitle: "Embedded machine intelligence solving concrete operational problems.",
    description: "Integrating modern LLMs, autonomous agents, retrieval-augmented generation (RAG), and deterministic structured outputs directly into production apps. Strict prompt defense and schema verification ensure zero hallucinations.",
    technologies: ["OpenAI API", "Anthropic Claude", "LangChain / RAG", "Vector Search", "Python"],
    useCase: "Products adding intelligent automation, customer conversation summarization, semantic search, or AI document parsing.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Product Enhancement & Scaling",
    subtitle: "Modernize existing codebases, squash bottlenecks, and scale.",
    description: "Auditing sluggish applications, upgrading legacy stacks, refactoring complex code, eliminating technical debt, and optimizing database query latency to improve Core Web Vitals and user retention.",
    technologies: ["Performance Tuning", "Database Indexing", "Refactoring", "Code Audits", "DevOps"],
    useCase: "Businesses with an existing software product suffering from performance lag, flaky bugs, or scaling constraints.",
    icon: RefreshCw,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 border-b border-border-subtle bg-bg-primary w-full" aria-label="Engineering Capabilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
            03 // WHAT I BUILD
          </div>
          <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-4">
            Focused Engineering Capabilities
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            I don&apos;t offer an endless menu of buzzwords. I focus on four foundational pillars of modern software engineering to deliver real business outcomes.
          </p>
        </div>

        {/* Editorial 2-Column Grid (Desktop) / 1-Column (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.number}
                className="p-8 sm:p-10 rounded-2xl border border-border-strong bg-bg-card/50 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                    <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest">
                      {cap.number} // CAPABILITY
                    </span>
                    <Icon className="w-5 h-5 text-text-muted" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-text-muted mb-4">
                    {cap.subtitle}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>

                  {/* Typical Use Case Box */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle mb-6">
                    <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">
                      Ideal For
                    </div>
                    <div className="text-xs text-text-secondary leading-snug">
                      {cap.useCase}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle mb-6">
                    {cap.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-border-subtle text-[11px] font-mono text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/#contact?capability=${encodeURIComponent(cap.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-primary hover:text-accent-cyan transition-colors"
                  >
                    <span>Discuss This Requirement</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
