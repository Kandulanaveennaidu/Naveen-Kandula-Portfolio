"use client";

import React, { useState } from "react";
import { Sparkles, ArrowDown, Bot, Check, ArrowRight, CornerDownRight, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const SAMPLE_CHANNELS = [
  { label: "Live Chat", count: 142, status: "Connected" },
  { label: "Support Email", count: 88, status: "Synchronized" },
  { label: "Customer Calls", count: 26, status: "Transcribed" },
];

export default function ProductIntelligence() {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <section className="py-24 sm:py-32 border-b border-border-subtle bg-bg-secondary/40 w-full" aria-label="Product Intelligence">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
            02 // EMBEDDED INTELLIGENCE
          </div>
          <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-4">
            Intelligence, Built into the Product
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            AI shouldn&apos;t feel like a disconnected experiment. I engineer deterministic systems where LLMs and machine intelligence operate natively inside real business workflows.
          </p>
        </div>

        {/* Desktop Presentation: Realistic Software Application Mockup */}
        <div className="hidden md:block rounded-2xl border border-border-strong bg-bg-card shadow-elevated overflow-hidden mb-16">
          {/* App Header */}
          <div className="px-6 py-3.5 bg-bg-elevated/70 border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="text-xs font-mono text-text-muted">
                Enterprise Workspace // Intelligence Routing Engine
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Model Pipeline: Online (gpt-4o / Claude 3.5 / Local Embeddings)</span>
            </div>
          </div>

          {/* Realistic App Canvas: User Input ➔ Processing ➔ Structured Action */}
          <div className="p-8 grid grid-cols-12 gap-8 items-stretch">
            {/* 1. Input Panel (4 Cols) */}
            <div className="col-span-4 p-5 rounded-xl bg-black/40 border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">
                  01 // Multi-Source Ingestion
                </div>
                <div className="text-sm font-semibold text-text-primary mb-4">
                  Incoming Customer Stream
                </div>
                <div className="space-y-2.5 mb-6">
                  {SAMPLE_CHANNELS.map((ch) => (
                    <div key={ch.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-border-subtle flex items-center justify-between text-xs">
                      <span className="text-text-secondary">{ch.label}</span>
                      <span className="font-mono text-accent-cyan font-semibold">{ch.count} events</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-border-subtle text-xs text-text-muted font-mono">
                &ldquo;Summarize pending critical issues and automatically assign technical teams.&rdquo;
              </div>
            </div>

            {/* 2. Processing Pipeline Bridge (4 Cols) */}
            <div className="col-span-4 p-5 rounded-xl bg-white/[0.02] border border-accent-primary/20 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider mb-2">
                  02 // Reasoning &amp; Extraction
                </div>
                <div className="text-sm font-semibold text-text-primary mb-3">
                  Context Orchestration
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-black/50 border border-border-subtle">
                    <div className="text-text-muted text-[10px] mb-1">STAGE: SEMANTIC CHUNKING</div>
                    <div className="text-text-secondary">256 vectorized message tokens parsed</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-border-subtle">
                    <div className="text-text-muted text-[10px] mb-1">STAGE: INTENT CLASSIFICATION</div>
                    <div className="text-emerald-400 font-medium">98.4% confidence (Billing Discrepancy)</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-border-subtle">
                    <div className="text-text-muted text-[10px] mb-1">STAGE: SCHEMA ENFORCEMENT</div>
                    <div className="text-accent-cyan">Strict Zod validation passed</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Deterministic output</span>
                <span className="text-emerald-400 font-semibold">Zero Hallucination</span>
              </div>
            </div>

            {/* 3. Actionable Result Panel (4 Cols) */}
            <div className="col-span-4 p-5 rounded-xl bg-black/40 border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  03 // Automated Business Action
                </div>
                <div className="text-sm font-semibold text-text-primary mb-3">
                  Dispatch &amp; Resolution
                </div>

                <div className="p-3.5 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20 mb-3">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-400 font-bold uppercase">Priority: Urgent</span>
                    <span className="text-text-muted text-[10px]">TICKET #8492</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-snug mb-2 font-sans">
                    Multiple users reported payment webhook timeouts during checkout surge.
                  </p>
                  <div className="text-[11px] font-mono text-accent-cyan">
                    Action: Dispatched Slack alert to Engineering On-Call
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <span>PostgreSQL DB Synced</span>
                <span className="text-text-primary font-bold">140ms Total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Composition: Clean Vertical Progression (320px–768px) */}
        <div className="md:hidden space-y-4 mb-12">
          {/* Step 01: Input */}
          <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">
              01 // INPUT
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Multi-Channel Ingestion
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Aggregating live customer chat, email inquiries, and voice transcripts into an orderly stream.
            </p>
            <div className="p-2.5 rounded-lg bg-black/50 font-mono text-[11px] text-accent-cyan">
              &ldquo;Summarize pending issues &amp; route to team.&rdquo;
            </div>
          </div>

          <div className="flex justify-center text-text-muted py-1">
            <ArrowDown className="w-4 h-4 text-accent-cyan" />
          </div>

          {/* Step 02: Intelligence */}
          <div className="p-5 rounded-2xl bg-bg-card border border-accent-primary/30">
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent-cyan mb-1">
              02 // INTELLIGENCE
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Context Understanding
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              LLMs analyze customer sentiment, extract urgent entities, and enforce strict type contracts.
            </p>
            <div className="space-y-1.5 font-mono text-[11px] text-text-muted">
              <div>• Vector embedding lookup</div>
              <div>• Strict schema validation</div>
              <div className="text-emerald-400">• Deterministic execution guaranteed</div>
            </div>
          </div>

          <div className="flex justify-center text-text-muted py-1">
            <ArrowDown className="w-4 h-4 text-accent-cyan" />
          </div>

          {/* Step 03: Action */}
          <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-1">
              03 // ACTION
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Automated Business Workflow
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Structured insights immediately update databases, dispatch team notifications, and resolve tasks.
            </p>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-text-primary font-mono">
              Priority: Urgent Ticket Triggered in &lt;150ms
            </div>
          </div>
        </div>

        {/* Value Proposition Note */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-text-primary">
              Ready to integrate intelligent workflows into your existing product?
            </div>
            <p className="text-xs text-text-secondary">
              From automated customer triage to autonomous backend agents, I design production AI systems that don&apos;t break.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-primary hover:text-accent-cyan transition-colors shrink-0 py-2"
          >
            <span>Discuss An AI Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
