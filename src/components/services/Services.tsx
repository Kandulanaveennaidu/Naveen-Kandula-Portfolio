"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Sparkles, 
  Server, 
  Wrench, 
  Briefcase, 
  Cpu, 
  ArrowRight, 
  Check, 
  HelpCircle 
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { servicesData, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, any> = {
  Layers,
  Sparkles,
  Server,
  Wrench,
  Briefcase,
  Cpu,
};

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 relative bg-bg-secondary/40 border-t border-border-subtle" aria-label="Services & Capabilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 // CLIENT SERVICES"
          title="What I Build For Businesses"
          description="Clear, scoped engineering engagements designed to deliver working digital products, modernize legacy systems, and implement high-value AI features."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Layers;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all duration-300 hover:shadow-card-glow group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-accent-primary group-hover:border-accent-primary/40 group-hover:bg-accent-primary/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-text-muted">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-cyan mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mb-6 pt-4 border-t border-border-subtle">
                    <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-3">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Ideal For Note */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] mb-5">
                    <div className="text-[10px] font-mono uppercase text-text-muted mb-0.5">
                      Best Suited For
                    </div>
                    <p className="text-[11px] text-text-secondary leading-snug">
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

                  {/* Service Inquiry CTA */}
                  <a
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-white transition-colors group-hover:translate-x-1 duration-200"
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
