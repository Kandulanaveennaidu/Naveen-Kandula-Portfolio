"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2, Terminal } from "lucide-react";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import ArchitectureGraph from "./ArchitectureGraph";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-tech-grid bg-radial-gradient w-full"
      aria-label="Introduction & Overview"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[220px] sm:h-[350px] bg-accent-primary/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Availability & Positioning Micro-badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5 sm:mb-6">
            <Badge variant="accent" size="sm">
              FULL-STACK × AI
            </Badge>
            <Badge variant="success" size="sm" dot={true}>
              {profileData.availability.badgeText}
            </Badge>
          </div>

          {/* Fluid Responsive Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 max-w-4xl">
            Building digital products that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-[#9B7BFF] to-accent-cyan block sm:inline">
              move businesses forward.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-sm sm:text-base md:text-xl text-text-secondary leading-relaxed font-normal max-w-2xl mb-7 sm:mb-8 px-2">
            I&apos;m <span className="text-text-primary font-semibold">{profileData.name}</span>, a Full Stack Developer and AI Integration Engineer building modern web applications, backend systems, APIs, and AI-powered products.
          </p>

          {/* Dual Action CTAs: Stacked Full-Width on Mobile, Side-by-Side on Desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto mb-8 sm:mb-10">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-semibold px-7 min-h-[48px] text-sm justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-medium px-6 min-h-[48px] text-sm justify-center"
              icon={<FolderGit2 className="w-4 h-4" />}
            >
              View My Work
            </Button>
          </div>

          {/* Mobile Profile Visual Preview (Responsive 180px–220px) */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl p-1.5 bg-gradient-to-b from-white/10 to-transparent border border-border-subtle shadow-2xl mb-8 group overflow-hidden">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg-elevated">
              <Image
                src={profileData.profileImage}
                alt={profileData.name}
                fill
                sizes="(max-width: 640px) 180px, 220px"
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 py-1 px-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-accent-cyan flex items-center justify-between">
                <span>{profileData.name}</span>
                <span className="text-accent-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
                  Live
                </span>
              </div>
            </div>
          </div>

          {/* Quick Trust Bar */}
          <div className="pt-5 border-t border-border-subtle w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-1.5">
              <span className="text-text-primary font-semibold">4+ Years</span>
              <span>Production Experience</span>
            </div>
            <span className="hidden sm:inline text-border-subtle">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-accent-cyan font-semibold">Full Stack</span>
              <span>Architecture to Cloud</span>
            </div>
            <span className="hidden sm:inline text-border-subtle">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-accent-success font-semibold">AI-Native</span>
              <span>Practical LLM Integrations</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive System Architecture Visual */}
        <div className="mt-4 sm:mt-6">
          <ArchitectureGraph />
        </div>
      </div>
    </section>
  );
}
