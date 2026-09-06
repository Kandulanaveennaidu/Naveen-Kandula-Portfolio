"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Github, Linkedin, ArrowUp, Code2, MessageSquare, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import Badge from "./Badge";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-secondary/60 relative overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          {/* Column 1: Identity & Positioning */}
          <div className="md:col-span-6 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-2 group mb-4 focus:outline-none"
              aria-label="Naveen Kandula Portfolio Home"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-border-subtle flex items-center justify-center text-accent-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold tracking-tight text-xl text-text-primary">
                NAVEEN<span className="text-accent-primary">.</span>
              </span>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-md mb-6">
              {profileData.role}. Building digital products that move businesses forward through modern web applications, scalable backends, and practical AI integrations.
            </p>

            {/* Availability status badge */}
            <div className="flex items-center gap-2">
              <Badge variant="success" dot={true}>
                {profileData.availability.badgeText}
              </Badge>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-text-primary transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-text-secondary hover:text-text-primary transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-text-primary transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-text-secondary hover:text-text-primary transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Verified Channels */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-4">
              Verified Channels
            </h3>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-bg-card border border-border-subtle hover:border-white/20 text-xs text-text-secondary hover:text-text-primary transition-all group font-mono"
                title="Click to copy email address"
              >
                <span className="truncate">{profileData.contact.email}</span>
                <span className="ml-2 text-accent-cyan">
                  {copied ? <Check className="w-3.5 h-3.5 text-accent-success" /> : <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />}
                </span>
              </button>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Network"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
                  aria-label="WhatsApp"
                  title="WhatsApp Messaging"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-2 rounded-lg bg-white/[0.03] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
                  aria-label="Send Email"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right font-mono text-[11px]">
            Designed, engineered and continuously improved by {profileData.name}.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
