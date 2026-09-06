"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { whyWorkWithMeData } from "@/data/whyWorkWithMe";
import { 
  Maximize2, 
  Cpu, 
  ShieldCheck, 
  Target, 
  MessageSquare, 
  FileCheck 
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Maximize2,
  Cpu,
  ShieldCheck,
  Target,
  MessageSquare,
  FileCheck,
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-20 md:py-32 relative bg-bg-primary" aria-label="Why Work With Naveen Kandula">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="07 // CLIENT ADVANTAGE"
          title="Why Work With Me"
          description="Concrete reasons founders and businesses partner with me directly rather than juggling fractured freelance teams or bloated agencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMeData.map((item) => {
            const Icon = ICON_MAP[item.iconName] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-cyan mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle">
                  <div className="text-[11px] font-mono text-accent-success font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
