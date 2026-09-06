"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function SelectedWork() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-border-subtle bg-bg-primary w-full" aria-label="Selected Work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Architect Signature */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-border-subtle">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
              01 // PROVEN TRACK RECORD
            </div>
            <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-3">
              Selected Work &amp; Case Studies
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              A selection of production systems, software applications, and AI integrations I&apos;ve engineered for businesses, startups, and enterprise operations.
            </p>
          </div>

          {/* Lead Engineer Signature Badge with Photo */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-border-strong shrink-0 shadow-sm">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-accent-primary/40 shrink-0 bg-bg-card">
              <Image
                src="/images/naveen-profile.jpg"
                alt="Naveen Kandula — Lead Engineer & Architect"
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-text-primary block leading-tight">
                Naveen Kandula
              </span>
              <span className="text-[11px] font-mono text-accent-cyan block">
                Lead Engineer &amp; Architect
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Production Work
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Project Showcases (One per block, immersive visual space) */}
        <div className="space-y-24 sm:space-y-36">
          {featuredProjects.map((project, index) => {
            const hasLive = project.links.liveUrl && !project.links.liveUrl.includes("[ADD");
            const projectNumber = `0${index + 1}`;

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center group"
              >
                {/* Visual Showcase (7 Cols on desktop) */}
                <div className="lg:col-span-7 order-1">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border-strong bg-bg-card shadow-elevated">
                    {/* Browser header bar */}
                    <div className="px-3.5 py-2.5 bg-bg-secondary/80 border-b border-border-subtle flex items-center justify-between z-10 relative">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[11px] font-mono text-text-muted truncate max-w-[200px]">
                        {hasLive ? new URL(project.links.liveUrl).hostname : `${project.slug}.production`}
                      </span>
                      <span className="w-4" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative w-full h-[calc(100%-37px)] overflow-hidden bg-bg-elevated">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} Interface`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-xs text-text-muted">
                          {project.title} Interface
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content & Engineering Details (5 Cols on desktop) */}
                <div className="lg:col-span-5 order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
                    <span className="text-accent-cyan font-bold">{projectNumber}</span>
                    <span>//</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Approach Brief */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-border-subtle mb-6 text-xs text-text-secondary space-y-2">
                    <div>
                      <strong className="text-text-primary font-medium">Core Challenge: </strong>
                      <span>{project.problem}</span>
                    </div>
                  </div>

                  {/* Technology Metadata Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-border-subtle text-[11px] font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-border-strong text-xs font-mono uppercase tracking-wider text-text-primary transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {hasLive && (
                      <a
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-accent-cyan hover:text-white transition-colors py-2"
                      >
                        <span>Visit Live Product</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Architect Commitment Banner with Photo */}
        <div className="mt-24 p-6 sm:p-8 rounded-2xl border border-border-strong bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-border-strong shrink-0 bg-bg-card shadow-md">
              <Image
                src="/images/naveen-profile.jpg"
                alt="Naveen Kandula"
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary">
                Every project above was engineered with end-to-end production rigor.
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                Have a similar challenge or need high-velocity development? Let&apos;s discuss architecture and timeline.
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-text-primary text-bg-primary hover:bg-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shrink-0 min-h-[44px]"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Link to all projects archive */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-text-muted">
            Looking for more architecture examples and technical breakdowns?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-primary hover:text-accent-cyan transition-colors"
          >
            <span>Explore Complete Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
