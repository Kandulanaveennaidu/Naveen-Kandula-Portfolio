"use client";

import React, { useState } from "react";
import { Terminal, Database, Cpu, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CanvasTab = "api" | "database" | "intelligence";

export default function ProductCanvas() {
  const [activeTab, setActiveTab] = useState<CanvasTab>("api");

  return (
    <div className="w-full rounded-2xl border border-border-strong bg-bg-card/70 backdrop-blur-xl shadow-elevated overflow-hidden">
      {/* Top Window Bar */}
      <div className="px-4 py-3 border-b border-border-subtle bg-bg-secondary/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>
          <span className="text-[11px] font-mono text-text-muted ml-2 hidden sm:inline">
            workspace.production.env
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-border-subtle text-xs font-mono">
          <button
            onClick={() => setActiveTab("api")}
            className={cn(
              "px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5",
              activeTab === "api" ? "bg-white/10 text-white font-medium" : "text-text-muted hover:text-text-secondary"
            )}
          >
            <Terminal className="w-3 h-3 text-accent-cyan" />
            <span>API</span>
          </button>
          <button
            onClick={() => setActiveTab("database")}
            className={cn(
              "px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5",
              activeTab === "database" ? "bg-white/10 text-white font-medium" : "text-text-muted hover:text-text-secondary"
            )}
          >
            <Database className="w-3 h-3 text-accent-primary" />
            <span>PostgreSQL</span>
          </button>
          <button
            onClick={() => setActiveTab("intelligence")}
            className={cn(
              "px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5",
              activeTab === "intelligence" ? "bg-white/10 text-white font-medium" : "text-text-muted hover:text-text-secondary"
            )}
          >
            <Cpu className="w-3 h-3 text-emerald-400" />
            <span>Intelligence</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Body */}
      <div className="p-4 sm:p-6 font-mono text-xs">
        {activeTab === "api" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-[11px]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">POST</span>
                <span className="text-text-primary font-semibold">/api/v1/intelligence/stream</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <span>Latency: <strong className="text-emerald-400 font-normal">38ms</strong></span>
                <span>Status: <strong className="text-text-primary font-normal">200 OK</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle">
                <div className="text-[10px] uppercase text-text-muted mb-2 tracking-wider">Incoming Client Payload</div>
                <pre className="text-text-secondary leading-relaxed overflow-x-auto text-[11px]">
{`{
  "project_scope": "Full-Stack Web App",
  "ai_pipeline": true,
  "database": "PostgreSQL",
  "latency_target": "<100ms"
}`}
                </pre>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle">
                <div className="text-[10px] uppercase text-emerald-400 mb-2 tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Execution Response</span>
                </div>
                <pre className="text-text-secondary leading-relaxed overflow-x-auto text-[11px]">
{`{
  "system_status": "healthy",
  "architecture": "Clean decoupled services",
  "deployment": "Automated CI/CD",
  "shipped": true
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "database" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-[11px]">
              <div className="flex items-center gap-2 text-text-primary">
                <Database className="w-3.5 h-3.5 text-accent-primary" />
                <span>neon_production_pool // schema: public</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Connection Pool: Active
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle">
              <div className="text-[10px] uppercase text-text-muted mb-2 tracking-wider">Optimized SQL Execution</div>
              <pre className="text-text-secondary leading-relaxed overflow-x-auto text-[11px]">
{`SELECT inquiries.id, inquiries.project_type, inquiries.status, COUNT(logs.id)
FROM contact_inquiries inquiries
LEFT JOIN audit_logs logs ON inquiries.id = logs.inquiry_id
WHERE inquiries.status != 'archived'
GROUP BY inquiries.id
ORDER BY inquiries.created_at DESC
LIMIT 5;`}
              </pre>
            </div>
          </div>
        )}

        {activeTab === "intelligence" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-[11px]">
              <div className="flex items-center gap-2 text-text-primary">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Context Orchestration Pipeline</span>
              </div>
              <span className="text-accent-cyan">Structured JSON Output</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-black/40 border border-border-subtle">
                <div className="text-[10px] text-text-muted uppercase mb-1">Step 01</div>
                <div className="text-text-primary font-semibold text-xs mb-1">Intent Parsing</div>
                <p className="text-[11px] text-text-secondary font-sans leading-snug">Extract entity & operational requirements.</p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-border-subtle">
                <div className="text-[10px] text-text-muted uppercase mb-1">Step 02</div>
                <div className="text-text-primary font-semibold text-xs mb-1">RAG Context</div>
                <p className="text-[11px] text-text-secondary font-sans leading-snug">Vector search across historical business data.</p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-border-subtle">
                <div className="text-[10px] text-text-muted uppercase mb-1">Step 03</div>
                <div className="text-emerald-400 font-semibold text-xs mb-1">Deterministic Action</div>
                <p className="text-[11px] text-text-secondary font-sans leading-snug">Trigger transactional business workflow.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Ticker */}
      <div className="px-4 py-2 bg-bg-secondary/40 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span>Production Ready Infrastructure</span>
        </div>
        <span>Naveen Kandula • Full Stack & AI</span>
      </div>
    </div>
  );
}
