"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { engagementModels } from "@/data/engagement";
import { ArrowRight, Check } from "lucide-react";

export default function Engagement() {
  return (
    <section id="engagement" className="py-20 md:py-32 relative bg-bg-secondary/30 border-t border-border-subtle" aria-label="Freelance Engagement Models">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="08 // COLLABORATION FORMATS"
          title="Have an Idea? Let's Turn It Into a Product."
          description="Flexible freelance engagement models tailored for early-stage founders, growing startups, and established software businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="cyan" size="sm">
                    {model.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-text-muted">
                    {model.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2 group-hover:text-white transition-colors">
                  {model.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {model.summary}
                </p>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] mb-6">
                  <div className="text-[10px] font-mono uppercase text-text-muted mb-0.5">
                    Recommended For
                  </div>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {model.idealFor}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {model.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                      <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <Button
                  href={`#contact?type=${encodeURIComponent(model.title)}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Tell Me About Your Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
