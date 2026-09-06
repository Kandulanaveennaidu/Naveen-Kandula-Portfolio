import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Database, 
  Server, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { projectsData, type Project } from "@/data/projects";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Case Study | Naveen Kandula`,
    description: project.shortDescription,
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const hasLiveUrl = Boolean(project.links.liveUrl && !project.links.liveUrl.includes("[ADD"));
  const hasGithubUrl = Boolean(project.links.githubUrl && !project.links.githubUrl.includes("[ADD"));

  return (
    <div className="pt-28 pb-24 min-h-screen bg-bg-primary">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors py-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {hasLiveUrl && (
          <a
            href={project.links.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/30 text-accent-cyan hover:text-white text-xs font-mono font-medium transition-all"
          >
            <span>Visit Live Product</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Case Study Main Article */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Box */}
        <header className="p-8 sm:p-12 rounded-2xl bg-bg-card/70 border border-border-strong mb-10 relative overflow-hidden shadow-elevated">
          <div className="relative z-10">
            {/* Engineer Identity & Categories */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent-primary/40 shrink-0 bg-bg-card">
                  <Image
                    src="/images/naveen-profile.jpg"
                    alt="Naveen Kandula"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-primary">Naveen Kandula</div>
                  <div className="text-[11px] font-mono text-accent-cyan">Role: {project.role}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan" size="sm">
                  {project.category}
                </Badge>
                <Badge variant="outline" size="sm">
                  {project.timeline}
                </Badge>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
              {project.tagline}
            </p>

            {/* Metrics Highlight Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
              {project.metricsPlaceholder.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-accent-cyan font-medium">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-text-muted">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Real Product Screenshot Display */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-border-subtle mb-12 shadow-2xl bg-bg-elevated">
            <Image
              src={project.image}
              alt={`${project.title} Interface Preview`}
              fill
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
        )}

        {/* Section 1: Problem & Engineered Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-2.5 text-xs font-mono text-red-400 uppercase tracking-wider mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>The Business Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              What Problem Did This Solve?
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-2.5 text-xs font-mono text-accent-success uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineered Solution</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Architectural Approach
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Section 2: Full-Stack Architecture Breakdown */}
        <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-subtle mb-12">
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">
            System Topology
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Architecture & Component Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-1">
                <Cpu className="w-4 h-4 text-accent-primary" />
                <span>Frontend Layer</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.architecture.frontend}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-1">
                <Server className="w-4 h-4 text-accent-cyan" />
                <span>Backend & API Layer</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.architecture.backend}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-1">
                <Database className="w-4 h-4 text-accent-success" />
                <span>Database & Persistence</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.architecture.database}
              </p>
            </div>

            {project.architecture.aiLayer && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-1">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>AI & Intelligence Pipeline</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.architecture.aiLayer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Technical Challenges & Resolutions */}
        <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-subtle mb-12">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">
            Engineering Rigor
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Key Technical Challenges & Resolutions
          </h2>

          <div className="space-y-6">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-border-subtle"
              >
                <div className="text-sm font-semibold text-text-primary mb-2 flex items-start gap-2">
                  <span className="text-accent-primary font-mono">0{idx + 1}.</span>
                  <span>{item.challenge}</span>
                </div>
                <div className="text-xs text-text-secondary pl-6 border-l-2 border-accent-cyan/40">
                  <span className="font-semibold text-accent-cyan">Resolution: </span>
                  {item.resolution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Key Features & Deliverables */}
        <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-subtle mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Core Features & Functional Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] text-xs text-text-secondary"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Previous / Next Case Study Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-4 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all flex items-center gap-3 group"
          >
            <ChevronLeft className="w-5 h-5 text-accent-cyan group-hover:-translate-x-1 transition-transform" />
            <div className="text-left overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase">Previous Project</span>
              <div className="text-xs font-semibold text-text-primary truncate">{prevProject.title}</div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-4 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all flex items-center justify-between group text-right"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase">Next Project</span>
              <div className="text-xs font-semibold text-text-primary truncate">{nextProject.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom CTA for Project Inquiry */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-bg-card via-bg-elevated to-bg-card border border-border-subtle text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            Need a Similar System Built?
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto mb-6">
            I can architect and build a tailored full-stack application or AI pipeline matching your company&apos;s exact operational requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Discuss Your Project
            </Button>
            <Button href="/projects" variant="outline">
              Browse More Case Studies
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
