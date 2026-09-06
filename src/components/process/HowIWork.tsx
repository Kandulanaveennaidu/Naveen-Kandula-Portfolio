"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PHASES = [
  {
    number: "01",
    phase: "UNDERSTAND",
    title: "Deconstruct Requirements & Define Success",
    description: "Every successful product starts with clarity. I dive deep into your business problem, target audience, technical constraints, and risk factors before writing a single line of code.",
    deliverables: "Technical specification, user journey map, feasibility report.",
  },
  {
    number: "02",
    phase: "ARCHITECT",
    title: "System Topology & API Contracts",
    description: "I map data schemas, relational models, API payload contracts, and infrastructure blueprints. Clean architecture in week one prevents costly rewrites in month six.",
    deliverables: "PostgreSQL schema design, API contract specifications, component breakdown.",
  },
  {
    number: "03",
    phase: "BUILD",
    title: "Iterative, Type-Safe Development",
    description: "Implementation using clean React/Next.js and Node.js code with strict TypeScript enforcement. Work is delivered in transparent milestones so you can test features as they are built.",
    deliverables: "Production codebase, milestone staging previews, responsive UI implementation.",
  },
  {
    number: "04",
    phase: "INTEGRATE",
    title: "Intelligence & Third-Party Plumbing",
    description: "Connecting external platforms, secure payment gateways, authentication providers, and deterministic AI/LLM pipelines. Comprehensive error handling and rate-limit defenses.",
    deliverables: "Live API integrations, AI prompt defense systems, webhook listeners.",
  },
  {
    number: "05",
    phase: "SHIP",
    title: "Production Deployment & Observability",
    description: "Pushing to production environments on Vercel or cloud providers, tuning Core Web Vitals, configuring database indexing, and handing over complete documentation for long-term independence.",
    deliverables: "Live deployment, automated CI/CD pipeline, system walkthrough documentation.",
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-24 sm:py-32 border-b border-border-subtle bg-bg-primary w-full" aria-label="Execution Methodology">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
            05 // EXECUTION RIGOR
          </div>
          <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-4">
            How I Work
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            A disciplined, 5-phase software development lifecycle that takes ideas from ambiguous whiteboards to resilient production deployments.
          </p>
        </div>

        {/* Editorial Process Progression (Large numbers, minimal text) */}
        <div className="space-y-6 sm:space-y-8">
          {PHASES.map((phase) => (
            <div
              key={phase.number}
              className="p-6 sm:p-10 rounded-2xl border border-border-subtle bg-bg-card/40 hover:border-white/20 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
            >
              {/* Big Editorial Number & Phase Label (3 Cols) */}
              <div className="lg:col-span-3 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                <span className="font-mono text-4xl sm:text-6xl font-extrabold text-white/20 group-hover:text-accent-primary transition-colors">
                  {phase.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-semibold">
                  // {phase.phase}
                </span>
              </div>

              {/* Title & Description (6 Cols) */}
              <div className="lg:col-span-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-normal">
                  {phase.description}
                </p>
              </div>

              {/* Concrete Deliverable (3 Cols) */}
              <div className="lg:col-span-3 p-3.5 rounded-xl bg-black/40 border border-border-subtle text-xs">
                <div className="text-[10px] font-mono uppercase text-text-muted mb-1">
                  Deliverable
                </div>
                <div className="text-text-secondary font-sans leading-snug">
                  {phase.deliverables}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
