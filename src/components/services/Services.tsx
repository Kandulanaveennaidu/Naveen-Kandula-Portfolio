"use client";

import React from "react";
import { 
  Layers, 
  Sparkles, 
  Server, 
  Wrench, 
  Briefcase, 
  Cpu, 
  ArrowRight, 
  Check 
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/common/Badge";
import { servicesData, type Service } from "@/data/services";

const ICON_MAP: Record<string, any> = {
  Layers,
  Sparkles,
  Server,
  Wrench,
  Briefcase,
  Cpu,
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-14 sm:py-20 md:py-32 relative bg-bg-secondary/40 border-t border-border-subtle w-full" 
      aria-label="Services & Capabilities"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 // CLIENT SERVICES"
          title="What I Build For Businesses"
          description="Clear, scoped engineering engagements designed to deliver working digital products, modernize legacy systems, and implement high-value AI features."
        />

        {/* Responsive Grid: 1-col on mobile, 2-col on md, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Layers;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-accent-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-text-muted">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-1.5 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-cyan mb-3 leading-snug">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist (Always visible without hover) */}
                  <div className="mb-5 pt-4 border-t border-border-subtle">
                    <div className="text-[10px] sm:text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2.5">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Ideal For Note */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-4">
                    <div className="text-[10px] font-mono uppercase text-text-muted mb-0.5">
                      Best Suited For
                    </div>
                    <p className="text-xs text-text-secondary leading-snug">
                      {service.idealFor}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} size="sm" variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Inquiry CTA (Minimum 44px touch target) */}
                  <a
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-border-subtle hover:border-white/20 text-xs font-semibold text-accent-primary hover:text-white transition-all min-h-[44px]"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
