"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Activity 
} from "lucide-react";
import Badge from "@/components/common/Badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasLiveUrl = Boolean(project.links.liveUrl && !project.links.liveUrl.includes("[ADD"));
  const hasGithubUrl = Boolean(project.links.githubUrl && !project.links.githubUrl.includes("[ADD"));

  return (
    <article className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-card-glow group flex flex-col justify-between">
      {/* Visual Header / Real Screenshot Mockup Preview */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] bg-bg-elevated border-b border-border-subtle overflow-hidden">
        {project.image && !imgError ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/20 to-transparent" />
          </div>
        ) : (
          <div className="p-5 sm:p-6 flex flex-col justify-between h-full relative">
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
            <div 
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: project.visual.accentColor }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <Badge variant="default" size="sm" className="bg-black/40 border-white/10">
                {project.visual.badgeText}
              </Badge>
              <span className="text-[11px] font-mono text-text-muted">
                {project.timeline}
              </span>
            </div>

            <div className="relative z-10 my-auto p-4 rounded-xl bg-bg-primary/80 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px] font-mono text-text-muted">
                <span className="text-text-primary font-medium">{project.slug}.architecture</span>
                <span className="text-accent-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
                  Verified Spec
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-text-muted">FE: </span>
                  <span className="text-text-secondary truncate">{project.architecture.frontend.split(',')[0]}</span>
                </div>
                <div>
                  <span className="text-text-muted">BE: </span>
                  <span className="text-text-secondary truncate">{project.architecture.backend.split(' ')[0]} API</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top Badges overlay */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <Badge variant="default" size="sm" className="bg-black/60 backdrop-blur-md border-white/15">
            {project.visual.badgeText}
          </Badge>
          <span className="text-[11px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
            {project.timeline}
          </span>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
          {project.metricsPlaceholder.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="text-accent-cyan font-bold">{metric.value}</span>
              <span className="text-text-muted text-[10px] hidden sm:inline">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Title */}
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
            {project.shortDescription}
          </p>

          {/* Problem / Solution Summary */}
          <div className="space-y-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-border-subtle text-xs">
            <div>
              <span className="font-semibold text-text-primary">Problem: </span>
              <span className="text-text-secondary">{project.problem}</span>
            </div>
            <div>
              <span className="font-semibold text-accent-cyan">Solution: </span>
              <span className="text-text-secondary">{project.solution}</span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} size="sm" variant="default">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono text-text-muted self-center">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary group-hover:text-white transition-colors"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {hasGithubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/[0.03] border border-border-subtle text-text-muted hover:text-text-primary hover:border-white/20 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {hasLiveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/[0.03] border border-border-subtle text-accent-cyan hover:text-white hover:border-white/20 transition-colors flex items-center gap-1 text-xs font-mono"
                aria-label="Live Demo"
                title="Open Live Product"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
