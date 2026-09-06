"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/common/Badge";
import { skillsData } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Disciplines" },
    ...skillsData.map((cat) => ({ id: cat.id, label: cat.category.replace(" Architecture", "").replace(" Systems", "").replace(" & Tools", "") })),
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.id === selectedCategory);

  return (
    <section 
      id="skills" 
      className="py-14 sm:py-20 md:py-32 relative bg-bg-primary w-full" 
      aria-label="Technical Stack & Competencies"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 // TECHNICAL MASTERY"
          title="Battle-Tested Tech Stack"
          description="A focused stack honed through 4+ years of production engineering. Every technology here is actively used to build real products."
        />

        {/* Swipeable Filter Pills with Hidden Scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[44px] shrink-0",
                  isSelected
                    ? "bg-accent-primary text-white shadow-[0_0_15px_rgba(124,92,255,0.3)] border border-accent-primary/60"
                    : "bg-bg-card text-text-secondary hover:text-text-primary border border-border-subtle hover:border-white/20"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-8 sm:space-y-12">
          {displayedCategories.map((group) => (
            <div
              key={group.id}
              className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-bg-card border border-border-subtle"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-border-subtle">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs font-mono text-text-muted mt-0.5">
                    {group.headline}
                  </p>
                </div>
                <div className="self-start sm:self-auto">
                  <Badge variant="cyan" size="sm">
                    {group.skills.length} Technologies
                  </Badge>
                </div>
              </div>

              {/* Responsive 2-column mobile grid, 3-column desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-xs sm:text-sm text-text-primary">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-accent-primary/15 text-accent-primary border border-accent-primary/30 shrink-0">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3">
                        {skill.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-text-muted pt-2 border-t border-white/[0.04]">
                      <span>Level</span>
                      <span className="text-accent-cyan font-medium">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
