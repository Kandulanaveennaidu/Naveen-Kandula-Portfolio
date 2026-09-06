"use client";

import React from "react";
import { Terminal, Cpu, Database, Network, Shield } from "lucide-react";
import { profileData } from "@/data/profile";

export default function AbstractIdentity() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto rounded-3xl bg-bg-card border border-border-subtle p-6 flex flex-col justify-between overflow-hidden shadow-2xl group">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-cyan/10 blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10 font-mono text-xs text-text-muted pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="text-text-secondary">profile.kernel.ts</span>
        </div>
        <span className="text-accent-success flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
          ONLINE
        </span>
      </div>

      {/* Center Geometric Developer Identity Visual */}
      <div className="relative my-auto py-6 flex flex-col items-center justify-center z-10">
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:border-accent-primary/40 transition-colors duration-700 animate-spin" style={{ animationDuration: '30s' }} />
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-border-subtle group-hover:border-accent-cyan/40 transition-colors duration-700" />
          
          {/* Center Monogram Badge */}
          <div className="relative w-20 h-20 rounded-2xl bg-bg-elevated border border-white/15 flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
            <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-text-secondary">
              NK
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-accent-cyan">
              DEV.v4
            </span>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 className="font-bold text-lg text-text-primary tracking-tight">
            {profileData.name}
          </h3>
          <p className="text-xs font-mono text-text-muted mt-0.5">
            Full-Stack & AI Integration Specialist
          </p>
        </div>
      </div>

      {/* Bottom Technical Spec Footer */}
      <div className="z-10 pt-4 border-t border-border-subtle grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <Cpu className="w-3.5 h-3.5 text-accent-primary" />
          <div>
            <div className="text-text-muted text-[10px]">STACK</div>
            <div className="text-text-primary font-medium">React + Node</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <Database className="w-3.5 h-3.5 text-accent-cyan" />
          <div>
            <div className="text-text-muted text-[10px]">DATA</div>
            <div className="text-text-primary font-medium">PostgreSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
