"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
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
    <div className="w-full relative rounded-3xl bg-bg-card border border-border-subtle overflow-hidden shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-xl">
      {/* Top Header Simulation */}
      <div className="flex flex-wrap items-center justify-between pb-3 sm:pb-4 border-b border-border-subtle mb-4 sm:mb-6 text-[11px] font-mono gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-1 text-text-secondary font-medium truncate max-w-[160px] sm:max-w-none">
            system-topology.spec.ts
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-accent-success font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
          <span>Production Architecture</span>
        </div>
      </div>

      {/* Nodes Switcher: Responsive 2-column on mobile, 4-column on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {SYSTEM_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = node.id === activeNodeId;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNodeId(node.id)}
              className={cn(
                "relative text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[88px] sm:min-h-[104px]",
                isSelected
                  ? "bg-bg-elevated border-white/30 shadow-md"
                  : "bg-white/[0.02] border-border-subtle hover:border-white/15 hover:bg-white/[0.04]"
              )}
            >
              {isSelected && (
                <div 
                  className="absolute top-0 left-2 right-2 h-[2px] rounded-full"
                  style={{ backgroundColor: node.accent }}
                />
              )}

              <div className="flex items-center justify-between mb-1.5">
                <div 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border"
                  style={{ 
                    backgroundColor: `${node.accent}15`, 
                    borderColor: `${node.accent}40`,
                    color: node.accent
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  0{index + 1}
                </span>
              </div>

              <div>
                <div className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                  {node.name}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-text-muted truncate">
                  {node.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Node Inspector */}
      <div className="p-4 sm:p-5 rounded-2xl bg-bg-primary/95 border border-border-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-border-subtle text-xs font-mono">
          <div className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full shrink-0" 
              style={{ backgroundColor: activeNode.accent }} 
            />
            <span className="font-bold text-text-primary">
              {activeNode.name} Inspector
            </span>
            <span className="text-[10px] text-text-muted hidden sm:inline">
              // {activeNode.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-text-muted">Target Metric:</span>
            <span className="text-accent-cyan font-semibold">{activeNode.metrics}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          {activeNode.details}
        </p>

        {/* Guarantees Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <CheckCircle2 className="w-3 h-3 text-accent-success" /> Production-Ready
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <ShieldCheck className="w-3 h-3 text-accent-cyan" /> Secure Boundary
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-secondary">
            <Zap className="w-3 h-3 text-accent-primary" /> Low Latency
          </span>
        </div>
      </div>
    </div>
  );
}
