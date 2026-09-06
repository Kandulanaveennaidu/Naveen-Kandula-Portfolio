"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All",
  "Full Stack",
  "AI Integration",
  "Business Systems",
];

export default function ProjectGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-bg-secondary/30 border-t border-border-subtle" aria-label="Featured Projects & Case Studies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="04 // EVIDENCE & CASE STUDIES"
          title="Featured Engineering Work"
          description="Real-world case studies and reference architectures demonstrating how I solve business bottlenecks, engineer AI pipelines, and build production web applications."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-accent-primary text-white shadow-[0_0_15px_rgba(124,92,255,0.3)] border border-accent-primary/60"
                    : "bg-bg-card text-text-secondary hover:text-text-primary border border-border-subtle hover:border-white/20"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
