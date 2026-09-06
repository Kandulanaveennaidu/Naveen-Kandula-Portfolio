"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import AIPipelineVisual from "./AIPipelineVisual";
import { Sparkles, FileText, Bot, Zap, Search, ShieldCheck } from "lucide-react";

const AI_CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Structured JSON Output Enforcement",
    description: "Ensuring models return strictly typed, schema-validated data structures that application backends can ingest without runtime errors."
  },
  {
    icon: FileText,
    title: "Document & Contract Intelligence",
    description: "Transforming messy PDFs, invoices, and unstructured business text into normalized PostgreSQL database records automatically."
  },
  {
    icon: Bot,
    title: "Context-Aware Copilots & Assistants",
    description: "Building conversational interfaces grounded in company documentation with strict negative constraints to prevent hallucinations."
  },
  {
    icon: Zap,
    title: "Intelligent Workflow Automation",
    description: "Automating repetitive multi-step operational tasks, classification decisions, and data verification routines."
  },
  {
    icon: Search,
    title: "Semantic & Hybrid Search",
    description: "Powering intuitive internal searches that understand intent and concepts rather than relying on brittle exact keyword matches."
  },
  {
    icon: ShieldCheck,
    title: "Guardrails, Caching & Cost Control",
    description: "Defensive prompt engineering, token budgeting, prompt response caching, and automated fallback endpoints."
  }
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="py-20 md:py-32 relative bg-bg-primary" aria-label="AI Engineering & Capabilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="05 // AI ENGINEERING"
          title="Where Software Meets Intelligence"
          description="I don't treat AI as a decorative chatbot. I embed language models and intelligent automation directly into business logic to make software noticeably faster, smarter, and more autonomous."
        />

        {/* Interactive Pipeline Visualizer */}
        <div className="mb-14">
          <AIPipelineVisual />
        </div>

        {/* 6 Core AI Engineering Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
