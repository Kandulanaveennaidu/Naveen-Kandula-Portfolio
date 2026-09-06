"use client";

import React, { useState } from "react";
import { 
  User, 
  Layers, 
  Sparkles, 
  SlidersHorizontal, 
  Database, 
  CheckCircle2, 
  ShieldAlert,
  ArrowDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineStep {
  id: string;
  step: string;
  label: string;
  icon: any;
  accent: string;
  action: string;
  payloadExample: string;
  securityGuardrail: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "user",
    step: "01",
    label: "User Request",
    icon: User,
    accent: "#F5F7FA",
    action: "Natural language query or unstructured document upload",
    payloadExample: '{ "input": "Extract line items from invoice_august.pdf and reconcile balances" }',
    securityGuardrail: "Client-side sanitization & size throttling"
  },
  {
    id: "app",
    step: "02",
    label: "Application Gateway",
    icon: Layers,
    accent: "#22D3EE",
    action: "Authentication verification, rate-limit check, and session validation",
    payloadExample: '{ "userId": "usr_4921", "rateLimitRemaining": 94, "authValid": true }',
    securityGuardrail: "JWT validation & IP token bucket algorithm"
  },
  {
    id: "ai",
    step: "03",
    label: "AI & LLM Orchestration",
    icon: Sparkles,
    accent: "#7C5CFF",
    action: "Structured prompt injection, schema enforcement, and model inference",
    payloadExample: '{ "targetSchema": "InvoiceRecord", "temperature": 0.1, "enforceJson": true }',
    securityGuardrail: "Strict negative constraints & Pydantic schema validation"
  },
  {
    id: "logic",
    step: "04",
    label: "Business Rules & Logic",
    icon: SlidersHorizontal,
    accent: "#F59E0B",
    action: "Discrepancy calculation, tax verification, and threshold checks",
    payloadExample: '{ "calculatedTotal": 1420.50, "discrepancyDetected": false, "status": "APPROVED" }',
    securityGuardrail: "Deterministic calculation boundaries without hallucination"
  },
  {
    id: "db",
    step: "05",
    label: "Database Persistence",
    icon: Database,
    accent: "#22C55E",
    action: "Atomic PostgreSQL transaction with audit logging and event emission",
    payloadExample: 'INSERT INTO invoices (id, total, status, verified_at) VALUES (...) RETURNING *;',
    securityGuardrail: "ACID rollback protection on schema mismatch"
  },
  {
    id: "result",
    step: "06",
    label: "Streamed Action / Output",
    icon: CheckCircle2,
    accent: "#38BDF8",
    action: "Real-time client state update and automated downstream dispatch",
    payloadExample: '{ "event": "invoice.reconciled", "durationMs": 412, "clientNotified": true }',
    securityGuardrail: "End-to-end encrypted payload delivery"
  }
];

export default function AIPipelineVisual() {
  const [activeStepId, setActiveStepId] = useState<string>("ai");

  const currentStep = PIPELINE_STEPS.find((s) => s.id === activeStepId) || PIPELINE_STEPS[2];

  return (
    <div className="w-full rounded-3xl bg-bg-card border border-border-subtle p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-border-subtle gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-primary shrink-0" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
            Production AI Pipeline Topology
          </span>
        </div>
        <span className="text-[11px] font-mono text-text-muted">
          Tap any stage to inspect guardrails & dataflow
        </span>
      </div>

      {/* Responsive Step Selector: 2-col on mobile, 3-col on sm, 6-col on lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4 sm:mb-6">
        {PIPELINE_STEPS.map((step) => {
          const Icon = step.icon;
          const isSelected = step.id === activeStepId;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepId(step.id)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[76px]",
                isSelected
                  ? "bg-bg-elevated border-white/30 shadow-md"
                  : "bg-white/[0.02] border-border-subtle hover:border-white/15 hover:bg-white/[0.04]"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-text-muted">{step.step}</span>
                <Icon 
                  className="w-3.5 h-3.5" 
                  style={{ color: isSelected ? step.accent : undefined }} 
                />
              </div>
              <div className="text-xs font-semibold text-text-primary truncate">
                {step.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Terminal Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-bg-primary/95 border border-border-subtle font-mono text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-border-subtle gap-2">
          <div className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full shrink-0" 
              style={{ backgroundColor: currentStep.accent }} 
            />
            <span className="text-text-primary font-bold">
              Stage {currentStep.step}: {currentStep.label}
            </span>
          </div>
          <div className="flex items-center gap-1 text-accent-cyan text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Guardrail: {currentStep.securityGuardrail}</span>
          </div>
        </div>

        <div className="mb-3 text-text-secondary text-xs leading-relaxed">
          <span className="text-text-muted">// Execution: </span>
          {currentStep.action}
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-text-primary overflow-x-auto">
          <div className="text-[10px] text-text-muted uppercase mb-1">Schema Payload Contract</div>
          <pre className="text-accent-cyan text-[11px] leading-relaxed whitespace-pre-wrap break-all sm:break-normal">
            {currentStep.payloadExample}
          </pre>
        </div>
      </div>
    </div>
  );
}
