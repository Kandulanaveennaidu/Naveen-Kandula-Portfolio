"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import ProfileImage from "@/components/common/ProfileImage";
import { profileData } from "@/data/profile";
import { ArrowRight, CheckCircle2, Workflow } from "lucide-react";
import Button from "@/components/common/Button";

const LIFECYCLE_STAGES = [
  "Idea & Scope",
  "Architecture",
  "Development",
  "Integration",
  "Hardening",
  "Launch & Ops",
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-32 relative bg-bg-primary w-full" aria-label="About Naveen Kandula">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="01 // PHILOSOPHY & PROFILE"
          title={profileData.bio.aboutLead}
          description="I bridge technical architecture with tangible business results, ensuring every line of code serves your product goals."
        />

        {/* Lifecycle Flow Ribbon: 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <div className="mb-10 sm:mb-16 p-4 sm:p-6 rounded-2xl bg-bg-card border border-border-subtle">
          <div className="text-[11px] sm:text-xs font-mono text-text-muted uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-accent-cyan shrink-0" />
            <span>End-to-End Product Lifecycle Ownership</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {LIFECYCLE_STAGES.map((stage, idx) => (
              <div
                key={stage}
                className="p-3 rounded-xl bg-white/[0.02] border border-border-subtle flex flex-col justify-between min-h-[64px]"
              >
                <span className="text-[10px] font-mono text-accent-cyan">0{idx + 1}</span>
                <span className="text-xs sm:text-sm font-medium text-text-primary mt-1">{stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Single-Column Stack, Desktop Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Professional Narrative & Principles (Top on Mobile) */}
          <div className="lg:col-span-7 order-1 flex flex-col justify-center">
            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {profileData.bio.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Operating Principles Cards: 1-col on mobile, 2-col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {profileData.bio.operatingPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary mb-1">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                    <span>{principle.title}</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <Button 
                href="/services" 
                variant="outline" 
                size="md" 
                className="w-full sm:w-auto justify-center min-h-[44px]"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Capabilities & Services
              </Button>
            </div>
          </div>

          {/* Profile Photo Card (Order 2 on Mobile, Centered) */}
          <div className="lg:col-span-5 order-2 flex justify-center w-full max-w-[320px] sm:max-w-[380px] mx-auto">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}
