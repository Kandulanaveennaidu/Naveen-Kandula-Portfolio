"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import ProductCanvas from "./ProductCanvas";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 border-b border-border-subtle bg-radial-gradient w-full overflow-hidden"
      aria-label="Introduction & Overview"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow & Live Availability Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-border-strong text-xs font-mono uppercase tracking-wider text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Freelance Projects</span>
          </div>
          <span className="text-xs font-mono text-text-muted hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
            <MapPin className="w-3.5 h-3.5 text-accent-primary" />
            <span>Based in India // Working Globally</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl mb-6 sm:mb-8">
          <h1 className="text-fluid-headline font-bold text-text-primary tracking-tighter mb-4 sm:mb-6">
            I build software people actually use.
          </h1>
          <p className="text-base sm:text-xl text-text-secondary font-normal leading-relaxed max-w-2xl">
            I&apos;m <strong className="text-text-primary font-medium">{profileData.name}</strong>, a Full Stack Developer and AI Integration Engineer designing and shipping resilient web applications, backend architectures, and AI-powered products.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12 sm:mb-16 max-w-sm sm:max-w-none">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-text-primary text-bg-primary hover:bg-white text-sm font-semibold uppercase tracking-wider transition-all min-h-[48px] shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border-strong text-text-secondary hover:text-text-primary hover:bg-white/[0.03] text-sm font-medium transition-all min-h-[48px]"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Selected Work</span>
          </Link>
        </div>

        {/* Product Canvas Visual System */}
        <div className="w-full">
          <div className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3 flex items-center justify-between">
            <span>Production Engine Topology</span>
            <span className="text-accent-cyan">Full-Stack &amp; AI Stack</span>
          </div>
          <ProductCanvas />
        </div>
      </div>
    </section>
  );
}
