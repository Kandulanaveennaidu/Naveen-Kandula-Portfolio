"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemNode {
  id: string;
  name: string;
  category: string;
  tech: string;
  icon: any;
  accent: string;
  status: string;
  metrics: string;
  details: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: "frontend",
    name: "Client Experience",
    category: "Presentation Layer",
    tech: "React.js • TypeScript • Tailwind",
    icon: Code2,
    accent: "#7C5CFF",
    status: "Active / Hydrated",
    metrics: "Sub-second FCP • Zero CLS",
    details: "Declarative React components, optimistic updates, client-side caching, and responsive layouts designed for intuitive usability."
  },
  {
    id: "backend",
    name: "API & Business Logic",
    category: "Application Layer",
    tech: "Node.js • Express.js • REST",
    icon: Server,
    accent: "#22D3EE",
    status: "Healthy / 99.9% Uptime",
    metrics: "< 35ms avg latency",
    details: "Robust REST endpoints, JWT authentication boundaries, request rate limiting, centralized error handling, and business logic execution."
  },
  {
    id: "database",
    name: "Relational Persistence",
    category: "Data Layer",
    tech: "PostgreSQL • SQL • ACID",
    icon: Database,
    accent: "#22C55E",
    status: "Indexed / Connected",
    metrics: "ACID Compliant • Normalized",
    details: "Normalized schema modeling, atomic transaction guarantees, composite indexes for rapid filtering, and automated backup schedules."
  },
  {
    id: "ai",
    name: "AI & LLM Services",
    category: "Intelligence Layer",
    tech: "AI APIs • Python • Structured JSON",
    icon: Sparkles,
    accent: "#EC4899",
    status: "Streaming Ready",
    metrics: "JSON Schema Verified",
    details: "Structured LLM completions, prompt guardrails, semantic data extraction, and fallback mechanisms embedded directly into workflows."
  }
];

export default function ArchitectureGraph() {
  const [activeNodeId, setActiveNodeId] = useState<string>("frontend");

  const activeNode = SYSTEM_NODES.find(n => n.id === activeNodeId) || SYSTEM_NODES[0];

  return (
    <div className="w-full relative rounded-2xl bg-bg-card border border-border-subtle overflow-hidden shadow-2xl p-5 sm:p-7 backdrop-blur-xl">
      {/* Subtle top header simulation */}
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6 text-xs text-text-muted font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-text-secondary font-medium">system-topology.spec.ts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
          <span className="text-text-secondary">Production Architecture</span>
        </div>
      </div>

      {/* Nodes visual flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 relative">
        {SYSTEM_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = node.id === activeNodeId;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNodeId(node.id)}
              className={cn(
                "relative text-left p-4 rounded-xl border transition-all duration-300 group focus:outline-none cursor-pointer",
                isSelected
                  ? "bg-bg-elevated border-white/30 shadow-[0_0_20px_rgba(124,92,255,0.15)]"
                  : "bg-white/[0.02] border-border-subtle hover:border-white/15 hover:bg-white/[0.04]"
              )}
            >
              {/* Active selection indicator bar */}
              {isSelected && (
                <div 
                  className="absolute top-0 left-4 right-4 h-[2px] rounded-full"
                  style={{ backgroundColor: node.accent }}
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
                  style={{ 
                    backgroundColor: `${node.accent}15`, 
                    borderColor: `${node.accent}40`,
                    color: node.accent
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-text-muted">
                  0{index + 1}
                </span>
              </div>

              <div className="text-xs font-mono text-text-muted mb-0.5">
                {node.category}
              </div>
              <div className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors mb-1">
                {node.name}
              </div>
              <div className="text-[11px] font-mono text-text-secondary truncate">
                {node.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Dataflow Pipeline Inspector */}
      <div className="p-4 sm:p-5 rounded-xl bg-bg-primary/90 border border-border-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: activeNode.accent }} 
            />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
              {activeNode.name} Inspector
            </span>
            <span className="text-[11px] font-mono text-text-muted hidden sm:inline">
              // {activeNode.status}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-text-muted">Metrics:</span>
            <span className="text-accent-cyan font-medium">{activeNode.metrics}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          {activeNode.details}
        </p>

        {/* Stack Capability Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-text-muted mr-1">Guarantees:</span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <CheckCircle2 className="w-3 h-3 text-accent-success" /> Production-Ready
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <ShieldCheck className="w-3 h-3 text-accent-cyan" /> Secure Boundaries
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <Zap className="w-3 h-3 text-accent-primary" /> Low Latency
          </span>
        </div>
      </div>
    </div>
  );
}
