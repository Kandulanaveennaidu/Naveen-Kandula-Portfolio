"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/common/Badge";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";
import { CheckCircle2, PackageCheck } from "lucide-react";

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-20 md:py-32 relative bg-bg-secondary/40 border-t border-border-subtle" aria-label="Development Process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="06 // METHODOLOGY"
          title="Predictable, 5-Step Execution"
          description="How an idea evolves from discovery and architectural blueprint to production deployment and smooth client handover."
        />

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {processSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between",
                  isSelected
                    ? "bg-bg-elevated border-accent-primary/60 shadow-[0_0_20px_rgba(124,92,255,0.15)]"
                    : "bg-bg-card border-border-subtle hover:border-white/20 hover:bg-white/[0.02]"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={cn(
                    "text-xs font-mono font-bold",
                    isSelected ? "text-accent-primary" : "text-text-muted"
                  )}>
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted uppercase">
                    Phase {idx + 1}
                  </span>
                </div>

                <div className="text-sm font-bold text-text-primary tracking-tight">
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-border-subtle">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-border-subtle">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  Phase {activeStep.step} // {activeStep.phase}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                {activeStep.title}
              </h3>
              <p className="text-xs font-mono text-text-muted mt-1">
                {activeStep.subtitle}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-border-subtle flex items-center gap-3">
              <PackageCheck className="w-5 h-5 text-accent-success shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-text-muted">
                  Phase Milestone Deliverable
                </div>
                <div className="text-xs font-semibold text-text-primary">
                  {activeStep.deliverable}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                Approach & Objective
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                {activeStep.description}
              </p>
            </div>

            <div className="lg:col-span-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                Concrete Activities & Outputs
              </h4>
              <ul className="space-y-3">
                {activeStep.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
