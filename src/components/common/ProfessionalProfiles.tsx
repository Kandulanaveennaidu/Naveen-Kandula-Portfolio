"use client";

import React from "react";
import { Github, Linkedin, MessageSquare, Mail, ArrowUpRight } from "lucide-react";
import { professionalProfiles, type ProfileCardItem } from "@/data/socials";
import { cn } from "@/lib/utils";

const ICON_COMPONENTS: Record<string, any> = {
  Github,
  Linkedin,
  MessageSquare,
  Mail,
};

interface ProfessionalProfilesProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function ProfessionalProfiles({
  className,
  title = "Professional Profiles",
  subtitle = "Direct communication channels and verified engineering profiles.",
}: ProfessionalProfilesProps) {
  return (
    <div className={cn("w-full", className)}>
      {(title || subtitle) && (
        <div className="mb-6 sm:mb-8">
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1.5">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Responsive Grid: 1-col on 320px, 2-col on 640px, 4-col on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {professionalProfiles.map((item) => {
          const Icon = ICON_COMPONENTS[item.iconName] || Mail;

          return (
            <a
              key={item.id}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              aria-label={`${item.title} — ${item.action}`}
              className="p-4 sm:p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-white/20 transition-all duration-300 hover:shadow-card-glow group flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-accent-cyan group-hover:scale-105 group-hover:border-accent-cyan/40 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-accent-cyan">
                    {item.label}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-text-primary tracking-tight mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-text-muted mb-2 truncate">
                  {item.handle}
                </p>

                <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-accent-primary group-hover:text-white transition-colors">
                <span>{item.action}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
