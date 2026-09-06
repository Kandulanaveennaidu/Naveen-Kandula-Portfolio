"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Code2, Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
  priority?: boolean;
}

export default function ProfileImage({ className, priority = false }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-3xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-border-subtle shadow-2xl",
        className
      )}
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-cyan/15 to-accent-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none" />

      {/* Frame Container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden bg-bg-elevated border border-white/10 flex flex-col items-center justify-center">
        {!imageError ? (
          <Image
            src={profileData.profileImage}
            alt={`${profileData.name} — Full Stack Developer & AI Integration Engineer`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-Tech Founder / Developer Identity Fallback Badge */
          <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center bg-tech-grid relative select-none">
            <div className="w-full flex items-center justify-between text-xs font-mono text-text-muted pb-3 border-b border-border-subtle">
              <span className="flex items-center gap-1.5 text-accent-cyan">
                <Terminal className="w-3.5 h-3.5" />
                <span>kandula.identity</span>
              </span>
              <span className="text-accent-success font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
                VERIFIED
              </span>
            </div>

            <div className="my-auto flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-bg-card border border-white/15 flex items-center justify-center shadow-xl mb-4 group-hover:scale-105 transition-transform duration-500">
                <span className="font-mono text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-text-secondary to-accent-primary">
                  NK
                </span>
              </div>
              <div className="text-lg font-bold text-text-primary tracking-tight">
                {profileData.name}
              </div>
              <div className="text-xs font-mono text-accent-cyan mt-1">
                {profileData.role}
              </div>
            </div>

            <div className="w-full pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>EXP: {profileData.experienceYears} Years</span>
              <span className="text-accent-success">OPEN FOR CONTRACTS</span>
            </div>
          </div>
        )}

        {/* Subtle Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Bottom Tag */}
        <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono text-text-secondary">
          <span className="truncate">{profileData.name}</span>
          <span className="text-accent-success flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
