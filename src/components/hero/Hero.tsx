"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2 } from "lucide-react";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import ArchitectureGraph from "./ArchitectureGraph";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-gradient w-full"
      aria-label="Introduction & Overview"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-16">
          {/* Availability & Positioning Micro-badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <Badge variant="accent" size="sm">
              FULL-STACK × AI INTEGRATION
            </Badge>
            <Badge variant="success" size="sm" dot={true}>
              {profileData.availability.badgeText}
            </Badge>
          </div>

          {/* Primary Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08] mb-6">
            Building digital products that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-[#9B7BFF] to-accent-cyan">
              move businesses forward.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-normal max-w-2xl mb-8">
            I&apos;m <span className="text-text-primary font-medium">{profileData.name}</span>, a Full Stack Developer and AI Integration Engineer focused on building modern web applications, backend systems, APIs, and AI-powered products.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-semibold px-8"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-medium px-7"
              icon={<FolderGit2 className="w-4 h-4" />}
            >
              View My Work
            </Button>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="text-text-primary font-semibold">4+ Years</span>
              <span>Production Experience</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border-subtle hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan font-semibold">End-to-End</span>
              <span>Architecture to Deployment</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border-subtle hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent-success font-semibold">AI-Native</span>
              <span>Practical LLM Integration</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive System Architecture Visual */}
        <div className="mt-4">
          <ArchitectureGraph />
        </div>
      </div>
    </section>
  );
}
