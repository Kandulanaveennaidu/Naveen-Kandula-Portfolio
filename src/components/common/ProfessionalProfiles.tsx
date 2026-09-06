"use client";

import React, { useState } from "react";
import { Github, Linkedin, MessageSquare, Mail, ArrowUpRight, Copy, Check } from "lucide-react";

export default function ProfessionalProfiles() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kandulanaveennaidu017@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const CHANNELS = [
    {
      label: "GitHub",
      action: "Review Code",
      href: "https://github.com/Kandulanaveennaidu",
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      action: "Connect Professionally",
      href: "https://www.linkedin.com/in/kandulanaveen1/",
      icon: Linkedin,
      external: true,
    },
    {
      label: "WhatsApp",
      action: "+91 9705627977",
      href: "https://wa.me/919705627977",
      icon: MessageSquare,
      external: true,
    },
    {
      label: "Email",
      action: "kandulanaveennaidu017@gmail.com",
      href: "mailto:kandulanaveennaidu017@gmail.com",
      icon: Mail,
      external: false,
    },
  ];

  return (
    <div className="w-full pt-10 border-t border-border-subtle">
      <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
        Direct Communication Channels
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CHANNELS.map((ch) => {
          const Icon = ch.icon;
          return (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.external ? "_blank" : undefined}
              rel={ch.external ? "noopener noreferrer" : undefined}
              className="p-4 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-white/20 transition-all flex items-center justify-between group min-h-[52px]"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Icon className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors shrink-0" />
                <div className="truncate">
                  <span className="text-xs font-bold text-text-primary block leading-tight">
                    {ch.label}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted truncate block">
                    {ch.action}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary transition-colors shrink-0 ml-2" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
