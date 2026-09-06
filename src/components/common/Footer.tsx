import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-secondary/40 py-16 px-4 sm:px-6 lg:px-8 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Role */}
        <div>
          <div className="font-bold tracking-tight text-sm sm:text-base text-text-primary mb-1">
            NAVEEN KANDULA
          </div>
          <div className="text-text-muted text-[11px]">
            Full Stack Developer &amp; AI Integration Engineer
          </div>
        </div>

        {/* Direct Links */}
        <div className="flex flex-wrap items-center gap-6 text-text-secondary">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
          <a
            href={profileData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
        </div>

        {/* Signature Line */}
        <div className="text-text-muted text-[11px] md:text-right">
          <div>&ldquo;Let&apos;s build something useful.&rdquo;</div>
          <div className="text-text-muted/60 mt-0.5">© {currentYear} Naveen Kandula</div>
        </div>
      </div>
    </footer>
  );
}
