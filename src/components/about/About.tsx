"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-border-subtle bg-bg-secondary/40 w-full" aria-label="About Naveen Kandula">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-4">
          06 // THE ENGINEER BEHIND THE WORK
        </div>

        {/* Editorial 2-Column Composition (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Portrait (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border-strong bg-bg-card shadow-elevated group">
              <Image
                src="/images/naveen-profile.jpg"
                alt={`${profileData.name} — Full Stack Developer & AI Integration Engineer`}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Minimal caption ribbon */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-xs font-mono">
                <span className="text-text-primary font-semibold">{profileData.name}</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available for Hire
                </span>
              </div>
            </div>

            {/* Micro Details under Photo */}
            <div className="mt-4 p-4 rounded-xl bg-black/40 border border-border-subtle grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-text-muted block text-[10px] uppercase">Experience</span>
                <span className="text-text-primary font-semibold">4+ Years Active</span>
              </div>
              <div>
                <span className="text-text-muted block text-[10px] uppercase">Focus</span>
                <span className="text-accent-cyan font-semibold">Full Stack &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Philosophy & Approach (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-6">
              Engineering is more than writing code.
            </h2>

            <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed mb-8 font-normal">
              <p>
                Too many software projects fail not because the code was bad, but because nobody took the time to deeply understand what was actually needed.
              </p>
              <p>
                I partner with businesses, early-stage founders, and product teams to bridge the gap between abstract requirements and finished, high-performing software products.
              </p>
              <p>
                From designing intuitive user experiences to constructing fault-tolerant backend architectures and embedding deterministic AI workflows, I take end-to-end ownership of every milestone.
              </p>
            </div>

            {/* Operating Principles Minimal List */}
            <div className="space-y-4 mb-10 pb-8 border-b border-border-subtle">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Operating Principles
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-border-subtle flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block font-sans text-sm mb-0.5">Solve the Real Problem</strong>
                    <span className="text-text-muted font-sans">Never over-engineer when a simpler, faster architecture delivers 10x value.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-border-subtle flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block font-sans text-sm mb-0.5">Ship Working Software</strong>
                    <span className="text-text-muted font-sans">Frequent testable milestones instead of months of silent development.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-border-subtle flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block font-sans text-sm mb-0.5">Pragmatic AI Integration</strong>
                    <span className="text-text-muted font-sans">Embed AI where it creates leverage, not where it adds unreliable noise.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-border-subtle flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block font-sans text-sm mb-0.5">Transparent Communication</strong>
                    <span className="text-text-muted font-sans">Clear timelines, proactive risk alerts, and zero corporate jargon.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg-primary hover:bg-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <span>Work With Naveen</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919705627977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors py-2 px-3"
              >
                <span>WhatsApp: +91 9705627977</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
