"use client";

import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ProfessionalProfiles from "@/components/common/ProfessionalProfiles";
import { profileData } from "@/data/profile";
import { Mail, Copy, Check, MessageSquare, ArrowUpRight, ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-bg-primary w-full" aria-label="Contact & Project Inquiry">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
            07 // INITIATE COLLABORATION
          </div>
          <h2 className="text-fluid-section font-bold tracking-tighter text-text-primary mb-4">
            Have something worth building?
          </h2>
          <p className="text-base sm:text-xl text-text-secondary leading-relaxed font-normal">
            Tell me what you&apos;re working on. I&apos;ll help turn the idea into a practical, resilient technical plan and ship it into production.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Quick Actions & Direct Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-border-strong bg-bg-card/50 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase text-accent-cyan tracking-wider mb-2">
                  Direct Response Guarantee
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Transparent Communication
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                  I work directly with founders and engineering leads. No account managers, no layers of bureaucracy, and zero sales pressure.
                </p>
              </div>

              {/* One-Click Copy Email */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span className="text-xs font-mono text-text-primary truncate">
                    {profileData.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-text-secondary hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/919705627977"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-border-strong hover:border-emerald-500/50 bg-white/[0.02] hover:bg-emerald-500/5 text-text-primary text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-between group min-h-[48px]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Concrete Value Commitments */}
              <div className="space-y-3 pt-4 border-t border-border-subtle text-xs text-text-secondary font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>Response turnaround within 24 hours.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>Strict mutual NDA &amp; confidentiality.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pragmatic technical scoping discussion.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Actual Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Minimal Professional Profiles Strip */}
        <ProfessionalProfiles />
      </div>
    </section>
  );
}
